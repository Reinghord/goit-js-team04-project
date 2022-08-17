// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCC8_MgK1himNe24DycvtKn4eILHfsNlGI',
  authDomain: 'js-project-69603.firebaseapp.com',
  projectId: 'js-project-69603',
  storageBucket: 'js-project-69603.appspot.com',
  messagingSenderId: '723891192902',
  appId: '1:723891192902:web:56cac8a0bb673caa127647',
  measurementId: 'G-FPFJ79VJJ6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
