import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "yt-mern-blog.firebaseapp.com",
  projectId: "yt-mern-blog-54587",
  storageBucket: "yt-mern-blog.appspot.com",
  messagingSenderId: "1013463220313",
  appId: "1:1013463220313:web:34bc9843d732ee4be7f678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
