const menuOpenBtn = document.querySelector('.mob-btn-open');
const menuCloseBtn = document.querySelector('.mob-btn-close');
const menu = document.querySelector('[data-menu]');

menuOpenBtn.addEventListener('click', onMenuBtnClick);
menuCloseBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick() {
  menu.classList.toggle('is-hidden');
}
