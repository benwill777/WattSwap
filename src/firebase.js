import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_oNBzPuNMgZAzBHNlwW-2ZePGW7h5XRk",
    authDomain: "watt-swap.firebaseapp.com",
    projectId: "watt-swap",
    storageBucket: "watt-swap.appspot.com",
    messagingSenderId: "435722590970",
    appId: "1:435722590970:web:6313caa8fd41b191844743",
    measurementId: "G-V348Z1EFBC"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();