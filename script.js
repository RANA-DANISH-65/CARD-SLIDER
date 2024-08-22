// Initialize Swiper with the specified configuration
const swiper = new Swiper('.slider-wrapper', {
  // Enable infinite looping of slides
  loop: true,
  
  // Show a grab cursor when hovering over the swiper
  grabCursor: true,

  // Space between each slide in pixels
  spaceBetween: 30,

  // Configuration for pagination bullets
  pagination: {
    // Selector for pagination container
    el: '.swiper-pagination',
    // Make pagination bullets clickable
    clickable: true,
    // Enable dynamic pagination bullets for better visual effect
    dynamicBullets: true
  },

  // Configuration for navigation arrows
  navigation: {
    // Selector for the next slide button
    nextEl: '.swiper-button-next',
    // Selector for the previous slide button
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints for adjusting the number of slides per view
  breakpoints: {
    // At viewport widths of 0px and above, show 1 slide at a time
    0: {
      slidesPerView: 1
    },
    // At viewport widths of 768px and above, show 2 slides at a time
    768: {
      slidesPerView: 2
    },
    // At viewport widths of 1024px and above, show 3 slides at a time
    1024: {
      slidesPerView: 3
    }
  }
});
