// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdV60ioAXPLk4lDRL3Fvp9-ioxUM5rssc",
  authDomain: "as-book-inventory.firebaseapp.com",
  projectId: "as-book-inventory",
  storageBucket: "as-book-inventory.appspot.com",
  messagingSenderId: "318633979493",
  appId: "1:318633979493:web:71cc84af284d8e6775a08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;