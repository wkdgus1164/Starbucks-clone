const searchElement = document.querySelector('.search');
const searchInputElement = searchElement.querySelector('input');
const badgeElement = document.querySelector('header .badges');

const handleWindowScroll = () => {
  console.log('scroll');
}

const handleSearchElementClick = () => {
  searchInputElement.focus();
}

const handleSearchInputElementFocus = () => {
  searchElement.classList.add('focused');
  searchInputElement.setAttribute('placeholder', '통합검색');
}

const handleSearchInputElementBlur = () => {
  searchElement.classList.remove('focused');
  searchInputElement.setAttribute('placeholder', '');
}

window.addEventListener('scroll', _.throttle(handleWindowScroll, 300));
searchElement.addEventListener('click', handleSearchElementClick);
searchInputElement.addEventListener('focus', handleSearchInputElementFocus);
searchInputElement.addEventListener('blur', handleSearchInputElementBlur);