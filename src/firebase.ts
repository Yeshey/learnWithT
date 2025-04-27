import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (Optional, but recommended)
// Check if Analytics is supported in the current environment
let analytics;
isSupported().then((supported) => {
    if (supported) {
        analytics = getAnalytics(app);
        console.log("Firebase Analytics initialized");
    } else {
        console.log("Firebase Analytics not supported in this environment.");
    }
});


// Initialize Cloud Functions
const functions = getFunctions(app);

// Optionally connect to emulator during development
// if (process.env.NODE_ENV === 'development') {
//   console.log("Connecting to Firebase Functions emulator");
//   connectFunctionsEmulator(functions, "localhost", 5001);
// }


// Export the initialized services
export { app, functions, analytics };