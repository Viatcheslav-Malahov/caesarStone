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

const numEl = document.querySelector('.hdrSwiperPagination2');

function updateNumeric() {
  const total = swiper.slides.length;
  const current = swiper.realIndex + 1;
  numEl.textContent = `(${current}/${total})`;
}

swiper.on('init', updateNumeric);
swiper.on('slideChange', updateNumeric);


const inspirationSwiper = new Swiper('.inspirationSwiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.inspirationContentSliderArrowsRight',
    prevEl: '.inspirationContentSliderArrowsLeft',
  },

});

const newsBlogSwiper = new Swiper('.newsBlogSwiper', {
  // Optional parameters
  loop: true,

  slidesPerView: 4,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.newsBlogSliderArrowsRight',
    prevEl: '.newsBlogSliderArrowsLeft',
  },

  breakpoints: {
    '1200': {
      slidesPerView: 3.4,
      spaceBetween: 20,
    },
    '900': {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    '650': {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    '0': {
      slidesPerView: 1.4,
      spaceBetween: 20,
    }
  },

});

const newsBlogSwiper2 = new Swiper('.newsBlogSwiper2', {
  // Optional parameters
  loop: true,

  slidesPerView: 4,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.newsBlogSliderArrowsRight',
    prevEl: '.newsBlogSliderArrowsLeft',
  },

  breakpoints: {
    '1200': {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    '900': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '650': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '0': {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  },

});

const newsBlogSwiper3 = new Swiper('.newsBlogSwiper3', {
  // Optional parameters
  loop: true,

  slidesPerView: 4,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.newsBlogSliderArrowsRight',
    prevEl: '.newsBlogSliderArrowsLeft',
  },

  breakpoints: {
    '1200': {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    '900': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '650': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '0': {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  },

});

const newsBlogLinks = document.querySelectorAll('.newsBlogLinksBtn');
const newsBlogSwiperArr = document.querySelectorAll('.newsBlogSwiper');

newsBlogLinks.forEach((el) => {
  el.addEventListener('click', (el) => {
    newsBlogSwiperArr.forEach((el) => {
      el.classList.add('newsBlogSwiperHide')
    })
    const target = document.getElementById(`newsBlogSwiper${el.target.id}`)
    target.classList.remove('newsBlogSwiperHide')
    newsBlogLinks.forEach((link) => {
      link.classList.remove('newsBlogLinksSelected')
    })
    el.target.classList.add('newsBlogLinksSelected')
  })
});