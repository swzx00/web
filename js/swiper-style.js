$(document).ready(function() {
   var swiper = new Swiper(".swiper-over", {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
         768: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
         992: {
            slidesPerView: 5,
            spaceBetween: 30,
         },
         1200: {
            slidesPerView: 6,
            spaceBetween: 30,
         }
      },
      mousewheel: true,
      freeMode: true,
   });
});