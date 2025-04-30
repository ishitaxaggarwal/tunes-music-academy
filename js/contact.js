// Contact page specific JavaScript

// Contact form validation and submission
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    // Get error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    subjectError.style.display = 'none';
    messageError.style.display = 'none';
    
    // Validate form fields
    let isValid = true;
    
    // Name validation
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name';
      nameError.style.display = 'block';
      isValid = false;
    }
    
    // Email validation
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please enter your email address';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
      }
    }
    
    // Subject validation
    if (!subjectSelect.value) {
      subjectError.textContent = 'Please select a subject';
      subjectError.style.display = 'block';
      isValid = false;
    }
    
    // Message validation
    if (!messageTextarea.value.trim()) {
      messageError.textContent = 'Please enter your message';
      messageError.style.display = 'block';
      isValid = false;
    } else if (messageTextarea.value.trim().length < 20) {
      messageError.textContent = 'Your message is too short (minimum 20 characters)';
      messageError.style.display = 'block';
      isValid = false;
    }
    
    // If form is valid, submit it (simulated)
    if (isValid) {
      // In a real application, send data to server here
      
      // Hide form and show success message
      contactForm.style.display = 'none';
      formSuccess.classList.remove('hidden');
      
      // Reset form
      contactForm.reset();
    }
  });
}

// FAQ functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Check if this item is already active
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(faq => {
      faq.classList.remove('active');
    });
    
    // If the clicked item wasn't active before, open it
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a.scroll-to').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});