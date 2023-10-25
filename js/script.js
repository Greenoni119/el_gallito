

//home page slider
var swiper = new Swiper(".home-slider", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});
//---------------------------------------------------------

var swiper = new Swiper(".food-slider", {
 
   loop:true,
   centeredSlides:true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".menu-slider", {
   pagination: {
      el: ".swiper-pagination",
   },
});

var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 4,
      },
   },
});