const menuOpenBtn = document.querySelector('.mob-btn-open');
const menuCloseBtn = document.querySelector('.mob-btn-close');
const menu = document.querySelector('[data-menu]');
const theme = document.getElementById('checkbox');
const themeNameLight = document.querySelector('.theme-name__light');
const themeNameDark = document.querySelector('.theme-name__dark');
const favorite = document.querySelector('.favorite-acctive');

menuOpenBtn.addEventListener('click', onMenuBtnClick);
menuCloseBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick() {
  menu.classList.toggle('is-hidden');
}

theme.addEventListener('change', () => {
  themeNameLight.classList.toggle('theme-acctive');
  themeNameDark.classList.toggle('theme-acctive');
});

favorite.addEventListener('click', () => {
  const Links = document.querySelector('.favorite-wrapper');
  Links.classList.toggle('favorite-wrapper__close');
});
