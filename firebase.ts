import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ── Credenciais lidas do .env (nunca hardcoded) ───────────────
// Cada cliente tem seu próprio projeto Firebase configurado
// nas variáveis de ambiente do Cloudflare Pages (ou .env local)
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar e exportar serviços
export const db   = getFirestore(app);
export const auth = getAuth(app);
