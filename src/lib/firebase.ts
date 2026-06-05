// Placeholder configuration for Firebase / Supabase backend

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Simulated Database Object
// Gələcəkdə həqiqi firebase/firestore paketi quraşdırıldıqda bunu importlarla əvəz edəcəksiniz.
export const db = {
  collection: (collectionName: string) => ({
    add: async (data: any) => {
      console.log(`[MOCK DB] Sended to collection "${collectionName}":`, data);
      
      // Simulate network delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id: Math.random().toString(36).substring(7), success: true });
        }, 1000);
      });
    }
  })
};
