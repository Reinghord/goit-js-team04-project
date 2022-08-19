import { signIn, signOutUser } from '../../service/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { btnLogIn } from '../refs';

btnLogIn.addEventListener('click', onLoginClick);

function onLoginClick(e) {
  let id = e.target.textContent;
  if (id === 'logIn') {
    return signIn();
  }
  signOutUser();
  return;
}

export function toggleBtnContent(user) {
  if (user) {
    btnLogIn.textContent = 'logOut';
    return;
  }
  btnLogIn.textContent = 'logIn';
  return;
}
