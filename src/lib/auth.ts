import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const login = async (email: string, pass: string) => {
  if (auth) {
    return await signInWithEmailAndPassword(auth, email, pass);
  } else {
    // Mock login
    console.log(`[MOCK AUTH] Logging in ${email}...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@byvalizada.com' && pass === 'admin123') {
          resolve({ user: { email } });
        } else {
          reject(new Error('Invalid credentials (try admin@byvalizada.com / admin123)'));
        }
      }, 1000);
    });
  }
};

export const logout = async () => {
  if (auth) {
    return await signOut(auth);
  } else {
    console.log(`[MOCK AUTH] Logged out`);
    return Promise.resolve();
  }
};
