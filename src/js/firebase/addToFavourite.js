import { addToFavourite } from '../../service/firebase';
import { cocktailsList } from '../refs';

cocktailsList.addEventListener('click', e => {
  if (e.target.dataset.action === 'favourite') {
    const id = e.target.parentElement.parentElement.id;
    addToFavourite(id);
  }
});
