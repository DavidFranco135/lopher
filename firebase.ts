import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ── Credenciais lidas do .env (nunca hardcoded) ───────────────
// Cada cliente tem seu próprio projeto Firebase configurado
// nas variáveis de ambiente do Cloudflare Pages (ou .env local)
const firebaseConfig = {
  apiKey: "AIzaSyA0NNXzbi6NpctcPudTUswms6HkqBV_uQo",
  authDomain: "niklaus-9c2b6.firebaseapp.com",
  projectId: "niklaus-9c2b6",
  storageBucket: "niklaus-9c2b6.firebasestorage.app",
  messagingSenderId: "608119762863",
  appId: "1:608119762863:web:8d022ec10741e9d0b8895a",
  measurementId: "G-CH1ZFCXDDF"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar e exportar serviços
export const db   = getFirestore(app);
export const auth = getAuth(app);
