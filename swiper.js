const swiper = new Swiper('.hdr__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hdr__swiper-button-next',
    prevEl: '.hdr__swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const numEl = document.querySelector('.hdr__swiper-pagination_2');

function updateNumeric() {
  const total = swiper.slides.length;
  const current = swiper.realIndex + 1;
  numEl.textContent = `(${current}/${total})`;
}

swiper.on('init', updateNumeric);
swiper.on('slideChange', updateNumeric);