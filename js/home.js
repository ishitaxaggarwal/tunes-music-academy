// Home page specific JavaScript

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.dot');
const prevTestimonialBtn = document.querySelector('.prev-testimonial');
const nextTestimonialBtn = document.querySelector('.next-testimonial');
let currentTestimonialIndex = 0;

// Function to change testimonial slide
function showTestimonial(index) {
  // Hide all slides
  testimonialSlides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all dots
  testimonialDots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show the selected slide and activate the corresponding dot
  testimonialSlides[index].classList.add('active');
  testimonialDots[index].classList.add('active');
  
  // Update current index
  currentTestimonialIndex = index;
}

// Event listeners for dot navigation
testimonialDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.getAttribute('data-slide'));
    showTestimonial(slideIndex);
  });
});

// Event listeners for previous and next buttons
if (prevTestimonialBtn) {
  prevTestimonialBtn.addEventListener('click', () => {
    let newIndex = currentTestimonialIndex - 1;
    if (newIndex < 0) {
      newIndex = testimonialSlides.length - 1;
    }
    showTestimonial(newIndex);
  });
}

if (nextTestimonialBtn) {
  nextTestimonialBtn.addEventListener('click', () => {
    let newIndex = currentTestimonialIndex + 1;
    if (newIndex >= testimonialSlides.length) {
      newIndex = 0;
    }
    showTestimonial(newIndex);
  });
}

// Auto-rotate testimonials
let testimonialInterval;

function startTestimonialAutoplay() {
  testimonialInterval = setInterval(() => {
    let newIndex = currentTestimonialIndex + 1;
    if (newIndex >= testimonialSlides.length) {
      newIndex = 0;
    }
    showTestimonial(newIndex);
  }, 5000);
}

function stopTestimonialAutoplay() {
  clearInterval(testimonialInterval);
}

// Start autoplay and pause on hover
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
  startTestimonialAutoplay();
  
  testimonialSlider.addEventListener('mouseenter', stopTestimonialAutoplay);
  testimonialSlider.addEventListener('mouseleave', startTestimonialAutoplay);
}

// Stats Counter Animation
const statsNumbers = document.querySelectorAll('.stat-number');

function animateCounters() {
  statsNumbers.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Use Intersection Observer to trigger counter animation when in view
if (statsNumbers.length > 0) {
  const statsSection = document.getElementById('stats');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(statsSection);
}

// Free Lesson Modal
const freeLessonBtn = document.getElementById('free-lesson-btn');
const freeLessonModal = document.getElementById('modal-container');
const freeLessonForm = document.getElementById('free-lesson-form');

if (freeLessonBtn && freeLessonModal) {
  freeLessonBtn.addEventListener('click', (e) => {
    e.preventDefault();
    freeLessonModal.classList.add('modal-visible');
    document.body.style.overflow = 'hidden';
  });
}

if (freeLessonForm) {
  freeLessonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('modal-email');
    const phoneInput = document.getElementById('phone');
    const instrumentSelect = document.getElementById('instrument');
    
    if (!nameInput.value.trim() || !emailInput.value.trim() || 
        !phoneInput.value.trim() || !instrumentSelect.value) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Hide form and show success message
    freeLessonForm.style.display = 'none';
    const modalBody = document.querySelector('.modal-body');
    const successMessage = document.createElement('div');
    successMessage.classList.add('form-success');
    successMessage.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <h3>Thank You!</h3>
      <p>Your free trial lesson request has been submitted. A member of our team will contact you within 24 hours to schedule your lesson.</p>
    `;
    modalBody.appendChild(successMessage);
    
    // Reset form for future submissions
    freeLessonForm.reset();
  });
}