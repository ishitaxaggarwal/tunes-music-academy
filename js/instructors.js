// Instructors page specific JavaScript

// Instructor filtering functionality
const instructorCards = document.querySelectorAll('.instructor-card');
const instrumentFilter = document.getElementById('instrument-filter');
const resetFiltersBtn = document.getElementById('reset-filters');

// Function to filter instructors
function filterInstructors() {
  const instrumentValue = instrumentFilter ? instrumentFilter.value : 'all';
  
  instructorCards.forEach(card => {
    // Get data attributes
    const cardInstrument = card.getAttribute('data-instrument');
    
    // Check if card matches the selected filter
    const matchesInstrument = instrumentValue === 'all' || cardInstrument === instrumentValue;
    
    // Show or hide based on filter match
    if (matchesInstrument) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Event listener for instrument filter
if (instrumentFilter) {
  instrumentFilter.addEventListener('change', filterInstructors);
}

// Reset filters
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    if (instrumentFilter) instrumentFilter.value = 'all';
    filterInstructors();
  });
}

// Instructor Bio Modal functionality
const instructorBioBtns = document.querySelectorAll('.instructor-details-btn');
const instructorBioModal = document.getElementById('instructor-bio-modal');

// Instructor details data
const instructorDetails = {
  'jake-thompson': {
    name: 'SAPAN SHARMA',
    title: 'Guitar Program Lead',
    bio: 'Versatile guitarist proficient in rock, blues, jazz, and classical styles. Former touring musician with extensive studio experience. Passionate about nurturing the next generation of guitarists.',
    specialties: [
      'Electric and acoustic guitar techniques',
      'Rock, blues, and jazz styles',
      'Music theory for guitarists',
      'Recording and production fundamentals',
      'Performance skills development'
    ]
  },
  'marcus-williams': {
    name: 'BHASKAR GANGULY',
    title: 'Percussion Instructor',
    bio: 'Versatile drummer with experience across multiple genres. Studio session player and former touring musician. Teaches drum kit, hand percussion, and electronic drums for all skill levels.',
    specialties: [
      'Drum kit technique for multiple genres',
      'Hand percussion (congas, djembe, cajon)',
      'Reading drum notation and charts',
      'Groove development and time feel',
      'Electronic drums and programming'
    ]
  }
};

// Function to populate instructor bio modal
function populateInstructorModal(instructorId) {
  const instructorData = instructorDetails[instructorId];
  
  if (!instructorData || !instructorBioModal) return;
  
  // Set modal content
  document.getElementById('modal-instructor-name').textContent = instructorData.name;
  document.getElementById('modal-instructor-title').textContent = instructorData.title;
  
  // Set bio
  document.getElementById('modal-instructor-bio').textContent = instructorData.bio;
  
  // Clear and populate specialties
  const specialtiesList = document.getElementById('modal-instructor-specialties');
  specialtiesList.innerHTML = '';
  instructorData.specialties.forEach(specialty => {
    const li = document.createElement('li');
    li.textContent = specialty;
    specialtiesList.appendChild(li);
  });
  
  // Show modal
  instructorBioModal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';
}

// Event listeners for instructor bio buttons
instructorBioBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const instructorId = btn.getAttribute('data-instructor');
    populateInstructorModal(instructorId);
  });
});