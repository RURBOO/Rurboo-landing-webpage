import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBf9BPX-iiSdLVgRCH_H-LZ91vgVx5ar9w",
    authDomain: "rurboo-prod.firebaseapp.com",
    projectId: "rurboo-prod",
    storageBucket: "rurboo-prod.firebasestorage.app",
    messagingSenderId: "417302943554",
    appId: "1:417302943554:web:1234567890abcdef" // Placeholder or inferred from similar
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
