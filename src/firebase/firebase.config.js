// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUS7rc6Fcwx7RUtSv00RisBPcYGBVqQ8",
  authDomain: "fir-auth-context-tailwin-5d1a0.firebaseapp.com",
  projectId: "fir-auth-context-tailwin-5d1a0",
  storageBucket: "fir-auth-context-tailwin-5d1a0.appspot.com",
  messagingSenderId: "852690951889",
  appId: "1:852690951889:web:48fb94baa4f40660d0aff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;