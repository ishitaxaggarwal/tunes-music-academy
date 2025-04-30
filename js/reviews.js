// Reviews page specific JavaScript

// Reviews filtering functionality
const reviewCards = document.querySelectorAll('.review-card');
const courseFilter = document.getElementById('course-filter');
const ratingFilter = document.getElementById('rating-filter');
const dateFilter = document.getElementById('date-filter');
const resetFiltersBtn = document.getElementById('reset-filters');

// Function to filter reviews
function filterReviews() {
  const courseValue = courseFilter ? courseFilter.value : 'all';
  const ratingValue = ratingFilter ? ratingFilter.value : 'all';
  const sortValue = dateFilter ? dateFilter.value : 'newest';
  
  // First, filter the reviews
  reviewCards.forEach(card => {
    // Get data attributes
    const cardCourse = card.getAttribute('data-course');
    const cardRating = card.getAttribute('data-rating');
    
    // Check if card matches all selected filters
    const matchesCourse = courseValue === 'all' || cardCourse === courseValue;
    const matchesRating = ratingValue === 'all' || cardRating === ratingValue;
    
    // Show or hide based on filter matches
    if (matchesCourse && matchesRating) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  
  // Then, sort the visible reviews
  const reviewsGrid = document.querySelector('.reviews-grid');
  if (!reviewsGrid) return;
  
  const visibleCards = Array.from(reviewCards).filter(card => card.style.display !== 'none');
  
  // Sort based on selected option
  visibleCards.sort((a, b) => {
    // Get dates from cards (hypothetical, would need real data)
    const aDate = new Date(a.querySelector('.review-date').textContent);
    const bDate = new Date(b.querySelector('.review-date').textContent);
    
    // Get ratings from cards
    const aRating = parseInt(a.getAttribute('data-rating'));
    const bRating = parseInt(b.getAttribute('data-rating'));
    
    switch(sortValue) {
      case 'newest':
        return bDate - aDate;
      case 'oldest':
        return aDate - bDate;
      case 'highest':
        return bRating === aRating ? (bDate - aDate) : (bRating - aRating);
      case 'lowest':
        return aRating === bRating ? (bDate - aDate) : (aRating - bRating);
      default:
        return 0;
    }
  });
  
  // Reorder cards in the DOM
  visibleCards.forEach(card => {
    reviewsGrid.appendChild(card);
  });
}

// Event listeners for filters
if (courseFilter) {
  courseFilter.addEventListener('change', filterReviews);
}

if (ratingFilter) {
  ratingFilter.addEventListener('change', filterReviews);
}

if (dateFilter) {
  dateFilter.addEventListener('change', filterReviews);
}

// Reset filters
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    if (courseFilter) courseFilter.value = 'all';
    if (ratingFilter) ratingFilter.value = 'all';
    if (dateFilter) dateFilter.value = 'newest';
    
    filterReviews();
  });
}

// Write Review Modal functionality
const openReviewFormBtn = document.getElementById('open-review-form');
const reviewModal = document.getElementById('review-modal');
const reviewForm = document.getElementById('review-form');
const ratingStars = document.querySelectorAll('.rating-select i');
const ratingInput = document.getElementById('rating-value');

// Star rating functionality
ratingStars.forEach(star => {
  star.addEventListener('mouseenter', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    
    // Reset all stars
    ratingStars.forEach(s => {
      s.className = 'far fa-star';
    });
    
    // Fill stars up to the hovered one
    ratingStars.forEach(s => {
      const starRating = parseInt(s.getAttribute('data-rating'));
      if (starRating <= rating) {
        s.className = 'fas fa-star';
      }
    });
  });
  
  star.addEventListener('mouseleave', () => {
    // Reset to current rating
    updateStarDisplay();
  });
  
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    ratingInput.value = rating;
    updateStarDisplay();
  });
});

// Update star display based on current rating
function updateStarDisplay() {
  const currentRating = parseInt(ratingInput.value) || 0;
  
  ratingStars.forEach(star => {
    const starRating = parseInt(star.getAttribute('data-rating'));
    if (starRating <= currentRating) {
      star.className = 'fas fa-star';
    } else {
      star.className = 'far fa-star';
    }
  });
}

// Open review form
if (openReviewFormBtn && reviewModal) {
  openReviewFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    reviewModal.classList.add('modal-visible');
    document.body.style.overflow = 'hidden';
  });
}

// Submit review form
if (reviewForm) {
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    const nameInput = document.getElementById('reviewer-name');
    const emailInput = document.getElementById('reviewer-email');
    const courseSelect = document.getElementById('review-course');
    const ratingValue = document.getElementById('rating-value');
    const reviewText = document.getElementById('review-text');
    const reviewConsent = document.getElementById('review-consent');
    
    if (!nameInput.value.trim() || !emailInput.value.trim() || 
        !courseSelect.value || !ratingValue.value || 
        !reviewText.value.trim() || !reviewConsent.checked) {
      alert('Please fill in all required fields and consent to submit your review.');
      return;
    }
    
    if (reviewText.value.length < 50) {
      alert('Your review must be at least 50 characters long.');
      return;
    }
    
    // Hide form and show success message
    reviewForm.style.display = 'none';
    document.getElementById('review-success').classList.remove('hidden');
    
    // Reset form for future submissions
    reviewForm.reset();
    ratingInput.value = '';
    updateStarDisplay();
  });
}

// Pagination functionality
const paginationBtns = document.querySelectorAll('.pagination-btn');

paginationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    
    // In a real application, this would load the appropriate page of reviews
    // For this demo, we'll just update the active button
    paginationBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Scroll to top of reviews section
    document.getElementById('reviews-list').scrollIntoView({ behavior: 'smooth' });
  });
});