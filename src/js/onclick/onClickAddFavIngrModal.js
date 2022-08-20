import { auth } from '../../service/firebase';
import { ref, getDatabase, child, get } from 'firebase/database';
import { errorNoLogin } from '../notifications';
import { addToFavouriteIngr } from '../../service/firebase';
import { getFavouriteCocktails } from '../../service/firebase';
import { removeFromFavouriteIngr } from '../../service/firebase';
import { backdrop } from '../refs';

backdrop.addEventListener('click', onClickIngr);

export function onClickIngr(e) {
  const id = e.target.dataset.idingr;
  if (e.target.dataset.action === 'favouriteIngr') {
    if (auth.currentUser) {
      addToFavouriteIngr(id);
      getFavouriteIngredients(renderFavouriteIngredientsIconModal);
      e.target.dataset.action = 'addedToFavouriteIngr';
      return;
    }
    errorNoLogin();
  }
  if (e.target.dataset.action === 'addedToFavouriteIngr') {
    if (auth.currentUser) {
      removeFromFavouriteIngr(id);
      e.target.firstElementChild.classList.remove('cocktails-svg--fav');
      e.target.dataset.action = 'favouriteIngr';
      return;
    }
    errorNoLogin();
  }
}

export function renderFavouriteIngredientsIconModal(snapshot) {
  {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataKeys = Object.keys(data);
      dataKeys.forEach(id => {
        const query = document.querySelector(`[data-idingr="${id}"]`);
        if (query) {
          const svg = query.firstElementChild;
          query.dataset.action = 'addedToFavouriteIngr';
          svg.classList.add('cocktails-svg--fav');
        }
      });
    } else {
      return;
    }
  }
}

export function getFavouriteIngredients(executeFunction) {
  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const dbRef = ref(getDatabase());
    get(child(dbRef, `favourite/${userId}/ingredients`))
      .then(snapshot => executeFunction(snapshot))
      .catch(error => {
        console.error(error);
      });
  }
}
