// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA18mAaNk0mA-Qz2C3dIxS_3E-IrSAqmkE',
  authDomain: 'practice-authe.firebaseapp.com',
  projectId: 'practice-authe',
  storageBucket: 'practice-authe.firebasestorage.app',
  messagingSenderId: '861853171022',
  appId: '1:861853171022:web:5adf9665f9f45e2d5e321f',
  measurementId: 'G-J5YCWQG1MY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
