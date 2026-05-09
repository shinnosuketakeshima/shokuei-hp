import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Firebase SDKのインポート
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase設定情報
const firebaseConfig = {
    apiKey: "AIzaSyAdSfeYvSL9vqMdFO4PB07LMCU1QgBsT4s",
    authDomain: "shokuei-hp.firebaseapp.com",
    projectId: "shokuei-hp",
    storageBucket: "shokuei-hp.firebasestorage.app",
    messagingSenderId: "1051272390345",
    appId: "1:1051272390345:web:fe56680188c4d09e8b0f18",
    measurementId: "G-3WFCXK3WH8"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// Firestoreの初期化
export const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
