window.addEventListener('scroll', function() {
    const parallaxBackground = document.querySelector('.background');
    let scrollPosition = window.pageYOffset;
  
    parallaxBackground.style.transform = 'translateY(' + scrollPosition * 0.6 + 'px)';
  });