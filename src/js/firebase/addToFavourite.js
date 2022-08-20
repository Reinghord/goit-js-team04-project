// import { getAuth } from 'firebase/auth';
// import { addToFavourite, removeFromFavourite } from '../../service/firebase';
// import { errorNoLogin } from '../notifications';
// import { cocktailsList } from '../refs';

// cocktailsList.addEventListener('click', e => {
//   if (e.target.dataset.action === 'favourite') {
//     const id = e.target.parentElement.parentElement.id;
//     addToFavourite(id);
//     e.target.dataset.action = 'addedToFavourite';

//     errorNoLogin();
//     return;
//   }
//   if (e.target.dataset.action === 'addedToFavourite') {
//     const id = e.target.parentElement.parentElement.id;
//     removeFromFavourite(id);
//     e.target.dataset.action = 'favourite';
//     return;
//   }
// });
