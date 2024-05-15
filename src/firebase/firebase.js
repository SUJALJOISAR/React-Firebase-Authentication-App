import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB518bHy_LbG6o0ueiOlGNviPGj0edf_c0",
  authDomain: "react-firebase-app-bfafb.firebaseapp.com",
  projectId: "react-firebase-app-bfafb",
  storageBucket: "react-firebase-app-bfafb.appspot.com",
  messagingSenderId: "413366091855",
  appId: "1:413366091855:web:4589fddf21922eb048ea3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {app,auth};