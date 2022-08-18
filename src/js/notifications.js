import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//Var to call error notification from IziToast library
export const errorPopup = () => {
  iziToast.error({
    title: 'Error',
    message: 'Oops... something went wrong!',
    position: 'topRight',
  });
};
