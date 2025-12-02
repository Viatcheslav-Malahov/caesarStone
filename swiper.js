const swiper = new Swiper('.hdrSwiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hdrSwiper-button-next',
    prevEl: '.hdrSwiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const numEl = document.querySelector('.hdrSwiper-pagination_2');

function updateNumeric() {
  const total = swiper.slides.length;
  const current = swiper.realIndex + 1;
  numEl.textContent = `(${current}/${total})`;
}

swiper.on('init', updateNumeric);
swiper.on('slideChange', updateNumeric);