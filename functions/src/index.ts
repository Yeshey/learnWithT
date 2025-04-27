// Import the main package
import * as functions from "firebase-functions";
// Explicitly import 'https' from the V1 SDK path
import {https} from "firebase-functions/v1";
// Import CallableContext directly from the main package
import {CallableContext} from "firebase-functions/v1/https";

// Keep nodemailer import
import * as nodemailer from "nodemailer";

// --- Environment Configuration ---
// ... (Keep the try/catch block for config loading as before) ...
let gmailEmail: string;
let gmailPassword: string;
try {
  const config = functions.config();
  gmailEmail = config.gmail?.email;
  gmailPassword = config.gmail?.password;
  if (!gmailEmail || !gmailPassword) {
    console.error("Gmail email or password not ");
    throw new Error("Missing Gmail configuration.");
  }
} catch (error) {
  console.error("Error Firebase Functions config:", error);
  gmailEmail = "fallback_email@example.com";
  gmailPassword = "fallback_password";
  console.warn("Using fallback credentials for");
}


// --- Input Data Interface ---
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  level: string;
  message: string;
}

// --- Input Data Validation Function ---
const isValidData = (data: unknown): data is ContactFormData => {
  if (typeof data !== "object" || data === null) {
    return false;
  }
  // Cast to a record type for easier property access checks
  const obj = data as Record<string, unknown>;

  return (
    typeof obj.name === "string" && obj.name.trim() !== "" &&
    typeof obj.email === "string" && /\S+@\S+\.\S+/.test(obj.email) &&
    typeof obj.level === "string" && obj.level.trim() !== "" &&
    typeof obj.message === "string" && obj.message.trim() !== "" &&
    (typeof obj.phone === "undefined" || typeof obj.phone === "string")
  );
};


// --- Nodemailer Setup ---
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});


// --- Cloud Function Definition ---
export const sendContactEmail = https.onCall(
  async (data: unknown, context: CallableContext) => {
    functions.logger.info(
      "Function called. Context Auth:",
      context.auth ? `UID: ${context.auth.uid}` : "No Auth"
    );

    // --- Validate Input Data ---
    if (!isValidData(data)) {
      functions.logger.error("Invalid data received:", data);
      throw new functions.https.HttpsError(
        "invalid-argument",
        "The function must be called with valid contact form data. " +
        "Required fields: name, email, level, message."
      );
    }

    // Data is now confirmed to be ContactFormData
    const {name, email, phone, level, message} = data;
    const subjectLevel = level === "other" ? "Other Matters" : `Level ${level}`;
    const teacherEmail = gmailEmail;
    const userName = name;
    const userEmail = email;

    functions.logger.log("Processing valid data:", {
      name,
      email,
      phone: phone ? "Provided" : "Not provided",
      level,
    });

    // --- Email to Teacher ---
    const mailOptionsTeacher: nodemailer.SendMailOptions = {
      from: `"${userName}" <${teacherEmail}>`,
      replyTo: userEmail, // Set reply-to user
      to: teacherEmail,
      subject: `New Contact Form Submission: ${subjectLevel}`,
      text: `You received a new message from your website contact form:
        \nName: ${userName}
        \nEmail: ${userEmail}
        \nPhone: ${phone || "Not provided"}
        \nSelected Level/Topic: ${subjectLevel}
        \n\nMessage:\n${message}`,
      html: `
        <p>You received a new message from your website contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${userName}</li>
          <li><strong>Email:</strong> ${userEmail}</li>
          <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
          <li><strong>Selected Level/Topic:</strong> ${subjectLevel}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>`,
    };

    // --- Confirmation Email to User ---
    const mailOptionsUser: nodemailer.SendMailOptions = {
      from: `"Tânia Almeida" <${teacherEmail}>`, // Send from teacher's email
      to: userEmail,
      subject: "Thank you for contacting Tânia Almeida!",
      text: `Hi ${userName},\n\nThank you for reaching out!
        \nI have received your message regarding "${subjectLevel}" and will
        get back to you as soon as possible (usually within 24-48 hours).
        \n\nYour message details:\n${message}\n\nBest regards,
        \nTânia Almeida`,
      html: `
        <p>Hi ${userName},</p>
        <p>Thank you for reaching out!</p>
        <p>I have received your message regarding
          "<strong>${subjectLevel}</strong>" and will get back to you as
          soon as possible (usually within 24-48 hours).
        </p>
        <p><strong>Your message details:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 1em;
                           margin-left: 0; white-space: pre-wrap;">
          ${message}
        </blockquote>
        <p>Best regards,<br/>Tânia Almeida</p>`,
    };

    // --- Send Emails ---
    try {
      functions.logger.log(`Attempting to send emails via ${gmailEmail}...`);
      const results = await Promise.allSettled([
        mailTransport.sendMail(mailOptionsTeacher),
        mailTransport.sendMail(mailOptionsUser),
      ]);

      let teacherMailSuccess = false;

      // Check result for sending email to teacher
      if (results[0].status === "fulfilled") {
        teacherMailSuccess = true;
        functions.logger.log(
          "Email to teacher sent successfully:",
          results[0].value.messageId
        );
      } else {
        // Log the reason for failure
        functions.logger.error(
          "Error sending email to teacher:",
          results[0].reason
        );
      }

      // Check result for sending confirmation email to user
      if (results[1].status === "fulfilled") {
        functions.logger.log(
          "Confirmation email to user sent successfully:",
          results[1].value.messageId
        );
      } else {
        // Log the reason for failure but don't necessarily fail the function
        functions.logger.error(
          "Error sending confirmation email to user:",
          results[1].reason
        );
      }

      // Consider the function successful if the email to the teacher was sent
      if (teacherMailSuccess) {
        return {success: true, message: "Message sent successfully!"};
      } else {
        // If the primary email failed, throw an error
        throw new Error("Failed to send primary notification email.");
      }
    } catch (error) {
      functions.logger.error("Error during email sending process:", error);
      // Re-throw errors in a format the client SDK can understand
      if (error instanceof functions.https.HttpsError) {
        throw error; // Re-throw Firebase specific errors
      } else if (error instanceof Error) {
        // Wrap generic errors
        throw new functions.https.HttpsError(
          "internal",
          `Failed to send email: ${error.message}`
        );
      } else {
        // Catch any other unknown errors
        throw new functions.https.HttpsError(
          "internal",
          "An unknown error occurred while sending the email."
        );
      }
    }
  }
);
// Ensure a newline character exists at the end of the file.
