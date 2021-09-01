const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  //loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Responsive breakpoints
  slidesPerView: 1,
  breakpoints: {

    // when window width is >= 640px
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1500:{
      slidesPerView: 4,
    },
    1900:{
      slidesPerView: 5,
    },
  }
});
