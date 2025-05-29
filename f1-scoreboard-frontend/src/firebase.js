import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkEnNPaKIpZ3L3T633X57NNWpKoYVKzDE",
    authDomain: "f1-scoreboard-959c4.firebaseapp.com",
    projectId: "f1-scoreboard-959c4",
    storageBucket: "f1-scoreboard-959c4.firebasestorage.app",
    messagingSenderId: "813456410912",
    appId: "1:813456410912:web:23cb2e7887741b1ce96f45"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
