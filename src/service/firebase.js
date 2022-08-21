// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  browserSessionPersistence,
} from 'firebase/auth';
import { toggleBtnContent } from '../js/firebase/authentication';
import {
  getDatabase,
  ref,
  update,
  onValue,
  child,
  get,
} from 'firebase/database';
import { errorNoLogin, errorPopup } from '../js/notifications';
import { errorNoLogin } from '../js/notifications';
import { cocktailsList, titlereturn } from '../js/refs';
import { noResultsMarkup } from '../js/cocktails-markup';

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
export const auth = getAuth();
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
  removeFavIconsClass();
  getFavouriteCocktails(renderFavouriteCocktailsIcon);
});

export async function addToFavourite(id) {
  const cocktails = {};
  cocktails[id] = id;

  try {
    await update(
      ref(db, 'favourite/' + auth.currentUser.uid + '/cocktails/'),
      cocktails
    );
  } catch {
    errorNoLogin();
  }
}

export function removeFromFavourite(id) {
  const cocktails = {};
  cocktails[id] = null;

  try {
    update(
      ref(db, 'favourite/' + auth.currentUser.uid + '/cocktails/'),
      cocktails
    );
  } catch {
    errorPopup();
  }
}

export async function addToFavouriteIngr(id) {
  const ingredients = {};
  ingredients[id] = id;

  try {
    await update(
      ref(db, 'favourite/' + auth.currentUser.uid + '/ingredients/'),
      ingredients
    );
  } catch {
    errorNoLogin();
  }
}

export function removeFromFavouriteIngr(id) {
  const ingredients = {};
  ingredients[id] = null;

  try {
    update(
      ref(db, 'favourite/' + auth.currentUser.uid + '/ingredients/'),
      ingredients
    );
  } catch {
    errorPopup();
  }
}

//LEGACY CODE
cocktailsList.addEventListener('click', e => {
  const id = e.target.parentElement.parentElement.id;

  if (e.target.dataset.action === 'favourite') {
    if (auth.currentUser) {
      addToFavourite(id);
      getFavouriteCocktails(renderFavouriteCocktailsIcon);
      e.target.dataset.action = 'addedToFavourite';
      return;
    }
    errorNoLogin();
  }
  if (e.target.dataset.action === 'addedToFavourite') {
    if (auth.currentUser) {
      removeFromFavourite(id);
      e.target.firstElementChild.classList.remove('btn__svg--fav');
      e.target.dataset.action = 'favourite';
      return;
    }
    errorNoLogin();
  }
});

export function getFavouriteCocktails(executeFunction) {
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const dbRef = ref(getDatabase());
    get(child(dbRef, `favourite/${userId}/cocktails`))
      .then(snapshot => executeFunction(snapshot))
      .catch(error => {
        console.error(error);
      });
  }
}

export function renderFavouriteCocktailsIcon(snapshot) {
  {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataKeys = Object.keys(data);
      dataKeys.forEach(id => {
        const query = document.getElementById(`${id}`);
        if (query) {
          const btn = query.children[2].children[1];
          const svg = btn.firstElementChild;
          btn.dataset.action = 'addedToFavourite';
          svg.classList.add('btn__svg--fav');
        }
      });
    } else {
      return;
    }
  }
}

function removeFavIconsClass() {
  const query = document.querySelectorAll('.btn__svg--fav');
  query.forEach(element => {
    element.classList.remove('btn__svg--fav');
  });
}
