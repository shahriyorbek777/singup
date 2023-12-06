import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOO7OSPi36H235kitry1VvzBwW60xj5Qw",
  authDomain: "test-project-e65cb.firebaseapp.com",
  projectId: "test-project-e65cb",
  storageBucket: "test-project-e65cb.appspot.com",
  messagingSenderId: "549433328565",
  appId: "1:549433328565:web:8d7c279994e170ec5e8ffc",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth();
