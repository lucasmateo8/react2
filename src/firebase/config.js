import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwFUZQlCVp9w_Wa0RDlcgD3teqnIp7m8k",
  authDomain: "react-lucasmateo.firebaseapp.com",
  projectId: "react-lucasmateo",
  storageBucket: "react-lucasmateo.appspot.com",
  messagingSenderId: "343873822033",
  appId: "1:343873822033:web:df903e7a320fd45fc04770",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
