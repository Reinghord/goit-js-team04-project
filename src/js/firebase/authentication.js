import { signIn, signOutUser } from '../../service/firebase';
import { btnLogIn } from '../refs';

btnLogIn.addEventListener('click', onLoginClick);

async function onLoginClick(e) {
  let id = e.target.textContent;
  if (id === 'logIn') {
    await signIn();
    return;
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
