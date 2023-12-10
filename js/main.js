const swiper = new Swiper(".first__slider", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 7000,
  },
  speed: 1200,
  spaceBetween: 120,
  pagination: true,
  navigation: false,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
