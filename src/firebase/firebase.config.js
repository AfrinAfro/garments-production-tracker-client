import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTWCNQc5T9h4s5jQqHieFiN1PfyT38gGc",
  authDomain: "garments-production-trac-e2ad4.firebaseapp.com",
  projectId: "garments-production-trac-e2ad4",
  storageBucket: "garments-production-trac-e2ad4.firebasestorage.app",
  messagingSenderId: "282936309304",
  appId: "1:282936309304:web:52a6182ced938fa47958cd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;