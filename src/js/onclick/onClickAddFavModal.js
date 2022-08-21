import { auth } from '../../service/firebase';
import { errorNoLogin } from '../notifications';
import { addToFavourite } from '../../service/firebase';
import { getFavouriteCocktails } from '../../service/firebase';
import { removeFromFavourite } from '../../service/firebase';
import { backdrop } from '../refs';

backdrop.addEventListener('click', onClick);

export function onClick(e) {
  const id = e.target.dataset.id;
  if (e.target.dataset.action === 'favourite') {
    if (auth.currentUser) {
      addToFavourite(id);
      getFavouriteCocktails(renderFavouriteCocktailsIconModal);
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
}

export function renderFavouriteCocktailsIconModal(snapshot) {
  {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataKeys = Object.keys(data);
      dataKeys.forEach(id => {
        const query = document.querySelector(`[data-id="${id}"]`);
        if (query) {
          const svg = query.firstElementChild;
          query.dataset.action = 'addedToFavourite';
          svg.classList.add('btn__svg--fav');
        }
      });
    } else {
      return;
    }
  }
}
