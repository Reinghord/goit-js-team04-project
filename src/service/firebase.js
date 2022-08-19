// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { toggleBtnContent } from '../js/firebase/authentication';
import { getDatabase, ref, set, push, update } from 'firebase/database';
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
  databaseURL:
    'https://js-project-69603-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getDatabase();

export const signIn = async () => {
  await signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(writeUserData());
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
}

onAuthStateChanged(auth, user => {
  toggleBtnContent(user);
});

export function addToFavourite(id) {
  const cocktails = {};
  cocktails[id] = id;
  try {
    update(
      ref(db, 'favourite/' + auth.currentUser.uid + '/cocktails/'),
      cocktails
    );
  } catch (error) {
    console.log(error);
  }
}
