const swiper = new Swiper('.product__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    1920: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1680: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
  
});