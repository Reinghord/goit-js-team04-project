import { btnScroll } from './refs';

function scrollTo() {
  window.scrollTo({
    top: 0,
    left: 100,
    behavior: 'smooth',
  });
}

btnScroll.addEventListener('click', scrollTo);
