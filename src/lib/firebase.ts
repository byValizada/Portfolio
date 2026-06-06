import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const isConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY_HERE";
export const app = isConfigured ? initializeApp(firebaseConfig) : null;
export const db = isConfigured && app ? getFirestore(app) : null;
export const auth = isConfigured && app ? getAuth(app) : null;

// Təhlükəsiz funksiyalar: Əgər config yoxdursa mock işlədir, varsa həqiqi bazaya yazır.
export const addToCollection = async (collectionName: string, data: Record<string, unknown>) => {
  if (isConfigured && db) {
    // Real Firebase
    const colRef = collection(db, collectionName);
    return await addDoc(colRef, data);
  } else {
    // Mock
    console.log(`[MOCK DB] Sended to collection "${collectionName}":`, data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Math.random().toString(36).substring(7), success: true });
      }, 1000);
    });
  }
};

