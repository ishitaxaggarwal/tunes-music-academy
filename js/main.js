// Main JavaScript for Tunes Music Academy

// Navigation Menu Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileNavToggle) {
  mobileNavToggle.addEventListener('click', () => {
    mobileNavToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
const navLinkElements = document.querySelectorAll('.nav-links a');
navLinkElements.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      mobileNavToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

// Header scroll effect
const header = document.getElementById('main-header');
const scrollThreshold = 50;

function handleHeaderScroll() {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleHeaderScroll);
handleHeaderScroll(); // Initial check

// Smooth scrolling for anchor links
document.querySelectorAll('a.scroll-to').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Modal functionality
const modalContainers = document.querySelectorAll('.modal-hidden');
const modalCloseButtons = document.querySelectorAll('.close-modal');

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('modal-visible');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  modalContainers.forEach(modal => {
    modal.classList.remove('modal-visible');
  });
  document.body.style.overflow = '';
}

// Close modal on clicking the X button
modalCloseButtons.forEach(button => {
  button.addEventListener('click', closeAllModals);
});

// Close modal on clicking outside
modalContainers.forEach(container => {
  container.addEventListener('click', (e) => {
    if (e.target === container) {
      closeAllModals();
    }
  });
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});

// Free lesson button in hero section - Using existing freeLessonBtn from home.js
if (document.getElementById('free-lesson-btn')) {
  document.getElementById('free-lesson-btn').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('modal-container');
  });
}

// Form validation
function validateForm(form, errorMessages) {
  let isValid = true;
  
  // Reset error messages
  errorMessages.forEach(error => {
    error.style.display = 'none';
  });
  
  // Check required fields
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      const errorElement = document.getElementById(`${field.id}-error`);
      if (errorElement) {
        errorElement.textContent = 'This field is required';
        errorElement.style.display = 'block';
      }
      isValid = false;
    }
  });
  
  // Email validation
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
      const errorElement = document.getElementById(`${emailField.id}-error`);
      if (errorElement) {
        errorElement.textContent = 'Please enter a valid email address';
        errorElement.style.display = 'block';
      }
      isValid = false;
    }
  }
  
  return isValid;
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const formMessage = newsletterForm.querySelector('.form-message');
    
    if (!emailInput.value.trim()) {
      formMessage.textContent = 'Please enter your email address';
      formMessage.style.color = 'var(--color-error)';
      return;
    }
    
    // Simulate form submission
    formMessage.textContent = 'Thank you for subscribing!';
    formMessage.style.color = 'var(--color-success-light)';
    emailInput.value = '';
    
    // Reset message after delay
    setTimeout(() => {
      formMessage.textContent = '';
    }, 5000);
  });
}

// Init function for all pages
function init() {
  handleHeaderScroll();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);