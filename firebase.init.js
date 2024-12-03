import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZM6r6bFeo6Do-tfMqyGoGgJ5_XMdAHfY",
  authDomain: "assignment-10-arijit.firebaseapp.com",
  projectId: "assignment-10-arijit",
  storageBucket: "assignment-10-arijit.firebasestorage.app",
  messagingSenderId: "342536282856",
  appId: "1:342536282856:web:07c835c545c2ffbbe09f5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);