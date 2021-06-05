const searchElement = document.querySelector('.search');
const searchInputElement = searchElement.querySelector('input');
const badgeElement = document.querySelector('header .badges');
const fadeElements = document.querySelectorAll('.visual .fade-in');

const handleWindowScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeElement, .6, {
      opacity: 0,
      display: 'none',
    })
  } else {
    gsap.to(badgeElement, .6, {
      opacity: 1,
      display: 'block',
    })
  }
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
fadeElements.forEach((fadeElement, index) => {
  gsap.to(fadeElement, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
});