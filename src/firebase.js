import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAdSfeYvSL9vqMdFO4PB07LMCU1QgBsT4s',
  authDomain: 'shokuei-hp.firebaseapp.com',
  projectId: 'shokuei-hp',
  storageBucket: 'shokuei-hp.firebasestorage.app',
  messagingSenderId: '1051272390345',
  appId: '1:1051272390345:web:fe56680188c4d09e8b0f18',
  measurementId: 'G-3WFCXK3WH8',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
