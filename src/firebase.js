import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATejdQ1QeeflFPUxlnQSJIJPw4J3k_hGE",
  authDomain: "braian-main.firebaseapp.com",
  projectId: "braian-main",
  storageBucket: "braian-main.appspot.com",
  messagingSenderId: "871105362242",
  appId: "1:871105362242:web:ecbfb040e08bd63d73b0db",
  measurementId: "G-1J4L07CB0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };