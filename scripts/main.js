// Declarations

const searchElement = document.querySelector('.search');
const searchInputElement = searchElement.querySelector('input');
const badgeElement = document.querySelector('header .badges');
const fadeElements = document.querySelectorAll('.visual .fade-in');
const promotionElement = document.querySelector('.promotion');
const promotionToggleButton = document.querySelector('.toggle-promotion');
const spyElements = document.querySelectorAll('section.scroll-spy');

let isHidePromotion = false;

const random = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));

const handleWindowScroll = () => {
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

const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// Functions

const handleSearchElementClick = () => searchInputElement.focus();

const handleSearchInputElementFocus = () => {
  searchElement.classList.add('focused');
  searchInputElement.setAttribute('placeholder', '통합검색');
}

const handleSearchInputElementBlur = () => {
  searchElement.classList.remove('focused');
  searchInputElement.setAttribute('placeholder', '');
}

const handlePromotionToggleButtonClick = () => {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    promotionElement.classList.add('hide');
  } else {
    promotionElement.classList.remove('hide');
  }
}

// Listeners

window.addEventListener('scroll', _.throttle(handleWindowScroll, 300));
searchElement.addEventListener('click', handleSearchElementClick);
searchInputElement.addEventListener('focus', handleSearchInputElementFocus);
searchInputElement.addEventListener('blur', handleSearchInputElementBlur);
promotionToggleButton.addEventListener('click', handlePromotionToggleButtonClick);

// Libraries

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})

fadeElements.forEach((fadeElement, index) => {
  gsap.to(fadeElement, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
});

spyElements.forEach(spyElement => {
  new ScrollMagic
    .Scene({
      triggerElement: spyElement,
      triggerHook: .8,
    })
    .setClassToggle(spyElement, 'show')
    .addTo(new ScrollMagic.Controller());
})