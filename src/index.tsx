import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
// Import the type for context
import { CallableContext } from "firebase-functions/v1/https";

// --- Environment Configuration ---
let gmailEmail: string;
let gmailPassword: string;
try {
    // It's safer to check if config and its properties exist
    const config = functions.config();
    gmailEmail = config.gmail?.email;
    gmailPassword = config.gmail?.password;
    if (!gmailEmail || !gmailPassword) {
        console.error("Gmail email or password not set in Firebase Functions config.");
        throw new Error("Missing Gmail configuration."); // Prevent function from running without config
    }
} catch (error) {
    console.error("Error accessing Firebase Functions config:", error);
    // Handle cases where config might not be available (e.g., local emulation without mock config)
    // Provide default values or throw, depending on your needs for local testing
    gmailEmail = "fallback_email@example.com"; // Or throw error
    gmailPassword = "fallback_password";       // Or throw error
    console.warn("Using fallback credentials for config - ensure config is set for deployment!");
}


// --- Input Data Interface ---
interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Optional
  level: string; // '1', '2', ..., 'other'
  message: string;
}

// --- Input Data Validation Function ---
const isValidData = (data: unknown): data is ContactFormData => {
  // Type guard needs to check the structure of 'data' which is initially unknown
  if (typeof data !== 'object' || data === null) {
      return false;
  }
  const obj = data as Record<string, unknown>; // Cast to a generic object type

  return (
    typeof obj.name === "string" && obj.name.trim() !== "" &&
    typeof obj.email === "string" && /\S+@\S+\.\S+/.test(obj.email) &&
    typeof obj.level === "string" && obj.level.trim() !== "" &&
    typeof obj.message === "string" && obj.message.trim() !== "" &&
    (typeof obj.phone === "undefined" || typeof obj.phone === "string")
  );
};


// --- Nodemailer Setup ---
// Initialize outside the function handler for potential reuse
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// --- Cloud Function Definition ---
// Add types for data (unknown before validation) and context
export const sendContactEmail = functions.https.onCall(
  async (data: unknown, context: CallableContext) => {
    // Use context if needed (e.g., authentication checks)
    // If not using context, you can name it _context to avoid unused variable warnings
    // Example: async (data: unknown, _context: CallableContext) => { ... }
    functions.logger.info("Function called. Context Auth:", context.auth ? `UID: ${context.auth.uid}`: "No Auth");


    // --- Validate Input Data ---
    if (!isValidData(data)) {
      functions.logger.error("Invalid data received:", data);
      throw new functions.https.HttpsError(
        "invalid-argument",
        "The function must be called with valid contact form data. Required fields: name, email, level, message."
      );
    }

    // Data is now confirmed to be ContactFormData
    const { name, email, phone, level, message } = data;
    const subjectLevel = level === "other" ? "Other Matters" : `Level ${level}`;
    const teacherEmail = gmailEmail; // Send to configured email
    const userName = name;
    const userEmail = email;

    functions.logger.log("Processing valid data:", { name, email, phone, level, message });

    // --- Email to Teacher ---
    const mailOptionsTeacher: nodemailer.SendMailOptions = {
        // from field is often ignored by Gmail when using OAuth/AppPassword, but good practice
        from: `"${userName}" <${teacherEmail}>`, // Send FROM teacher's verified address
        replyTo: userEmail,                   // Set reply-to user
        to: teacherEmail,
        subject: `New Contact Form Submission: ${subjectLevel}`,
        text: `You received a new message from your website contact form:\n\nName: ${userName}\nEmail: ${userEmail}\nPhone: ${phone || "Not provided"}\nSelected Level/Topic: ${subjectLevel}\n\nMessage:\n${message}`,
        html: `<p>You received a new message from your website contact form:</p><ul><li><strong>Name:</strong> ${userName}</li><li><strong>Email:</strong> ${userEmail}</li><li><strong>Phone:</strong> ${phone || "Not provided"}</li><li><strong>Selected Level/Topic:</strong> ${subjectLevel}</li></ul><p><strong>Message:</strong></p><p style="white-space: pre-wrap;">${message}</p>`, // Use pre-wrap for newlines
    };

    // --- Confirmation Email to User ---
    const mailOptionsUser: nodemailer.SendMailOptions = {
      from: `"Tânia Almeida" <${teacherEmail}>`, // Send from teacher's email
      to: userEmail,
      subject: "Thank you for contacting Tânia Almeida!",
      text: `Hi ${userName},\n\nThank you for reaching out!\n\nI have received your message regarding "${subjectLevel}" and will get back to you as soon as possible (usually within 24-48 hours).\n\nYour message details:\n${message}\n\nBest regards,\nTânia Almeida`,
      html: `<p>Hi ${userName},</p><p>Thank you for reaching out!</p><p>I have received your message regarding "<strong>${subjectLevel}</strong>" and will get back to you as soon as possible (usually within 24-48 hours).</p><p><strong>Your message details:</strong></p><blockquote style="border-left: 4px solid #ccc; padding-left: 1em; margin-left: 0; white-space: pre-wrap;">${message}</blockquote><p>Best regards,<br/>Tânia Almeida</p>`, // Use pre-wrap
    };

    // --- Send Emails ---
    try {
       functions.logger.log(`Attempting to send emails via ${gmailEmail}...`);
      // Send both emails concurrently
      const results = await Promise.allSettled([ // Use allSettled to see both results
        mailTransport.sendMail(mailOptionsTeacher),
        mailTransport.sendMail(mailOptionsUser),
      ]);

      let teacherMailSuccess = false;
      let userMailSuccess = false;

      if (results[0].status === "fulfilled") {
        functions.logger.log("Email to teacher sent successfully:", results[0].value.messageId);
        teacherMailSuccess = true;
      } else {
         functions.logger.error("Error sending email to teacher:", results[0].reason);
      }

       if (results[1].status === "fulfilled") {
        functions.logger.log("Confirmation email to user sent successfully:", results[1].value.messageId);
        userMailSuccess = true;
      } else {
         functions.logger.error("Error sending confirmation email to user:", results[1].reason);
      }

      // Consider success if at least the teacher email was sent
      if (teacherMailSuccess) {
         return { success: true, message: "Message sent successfully!" };
      } else {
          // Throw error if teacher mail failed critically
          throw new Error("Failed to send primary notification email.");
      }

    } catch (error) {
        functions.logger.error("Error during email sending process:", error);
        // Throwing an HttpsError allows the client to receive a structured error
        if (error instanceof functions.https.HttpsError) {
            throw error; // Re-throw Firebase specific errors
        } else if (error instanceof Error) {
           throw new functions.https.HttpsError("internal", `Failed to send email: ${error.message}`);
        } else {
           throw new functions.https.HttpsError("internal", "An unknown error occurred while sending the email.");
        }
    }
  }
);