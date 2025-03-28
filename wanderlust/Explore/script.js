window.addEventListener('scroll', function() {
    const parallaxBackground = document.querySelector('.background');
    let scrollPosition = window.pageYOffset;
  
    parallaxBackground.style.transform = 'translateY(' + scrollPosition * 0.6 + 'px)';
  });

// Slider part

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Function to slide to a specific card in the swiper (Button functionality)
function slideToCard(index) {
  swiper.slideTo(index); // Slide to the specified index
}
