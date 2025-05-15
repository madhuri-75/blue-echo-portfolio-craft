
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  // CTA button smooth scroll
  const ctaButton = document.querySelector('.cta-button');
  
  ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: 'smooth'
    });
  });

  // Skills carousel functionality
  const skillsCarousel = document.querySelector('.skills-carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  // Set initial scroll position
  let scrollPosition = 0;
  const scrollAmount = 220; // Width of skill item + gap
  
  // Function to update carousel scroll position
  function updateCarousel() {
    skillsCarousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
  
  // Next button click handler
  nextBtn.addEventListener('click', function() {
    const maxScrollPosition = skillsCarousel.scrollWidth - skillsCarousel.clientWidth;
    
    if (scrollPosition < maxScrollPosition) {
      scrollPosition += scrollAmount;
      
      // Make sure we don't scroll past the end
      if (scrollPosition > maxScrollPosition) {
        scrollPosition = maxScrollPosition;
      }
      
      updateCarousel();
    }
  });
  
  // Previous button click handler
  prevBtn.addEventListener('click', function() {
    if (scrollPosition > 0) {
      scrollPosition -= scrollAmount;
      
      // Make sure we don't scroll past the beginning
      if (scrollPosition < 0) {
        scrollPosition = 0;
      }
      
      updateCarousel();
    }
  });

  // Highlight active nav item based on scroll position
  const sections = document.querySelectorAll('.section');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
});
