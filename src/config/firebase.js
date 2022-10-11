
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import {initializeFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0i3OkagvWM1-RTvHMaY9YP0rnxlSlp-o",
  authDomain: "codetribe-assignment-app.firebaseapp.com",
  projectId: "codetribe-assignment-app",
  storageBucket: "codetribe-assignment-app.appspot.com",
  messagingSenderId: "156613955956",
  appId: "1:156613955956:web:d4459979ebdad939c79c21",
  measurementId: "G-R5JCD8PFCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app,{
  experimentalForceLongPolling:true,
  useFetchStreams:false,
})

export const storage = getStorage(app);

const analytics = getAnalytics(app);

export default app
