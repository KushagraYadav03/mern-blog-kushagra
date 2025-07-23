// firebase.js

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// ✅ Firebase config using .env values
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "yt-mern-blog-54587.firebaseapp.com",
  projectId: "yt-mern-blog-54587",
  storageBucket: "yt-mern-blog-54587.appspot.com",
  messagingSenderId: "1013463220313",
  appId: "1:1013463220313:web:6d3d8af21eb1de2875f148"
}

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
