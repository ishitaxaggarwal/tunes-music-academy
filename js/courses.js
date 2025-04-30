// Courses page specific JavaScript

// Course filtering functionality
const courseCards = document.querySelectorAll('.course-card');
const instrumentFilter = document.getElementById('instrument-filter');
const levelFilter = document.getElementById('level-filter');
const ageFilter = document.getElementById('age-filter');
const resetFiltersBtn = document.getElementById('reset-filters');

// Function to filter courses
function filterCourses() {
  const instrumentValue = instrumentFilter ? instrumentFilter.value : 'all';
  const levelValue = levelFilter ? levelFilter.value : 'all';
  const ageValue = ageFilter ? ageFilter.value : 'all';
  
  courseCards.forEach(card => {
    // Get data attributes
    const cardInstrument = card.getAttribute('data-instrument');
    const cardLevel = card.getAttribute('data-level');
    const cardAge = card.getAttribute('data-age');
    
    // Check if card matches all selected filters
    const matchesInstrument = instrumentValue === 'all' || cardInstrument === instrumentValue;
    const matchesLevel = levelValue === 'all' || cardLevel.includes(levelValue);
    const matchesAge = ageValue === 'all' || cardAge.includes(ageValue);
    
    // Show or hide based on filter matches
    if (matchesInstrument && matchesLevel && matchesAge) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Event listeners for filters
if (instrumentFilter) {
  instrumentFilter.addEventListener('change', filterCourses);
}

if (levelFilter) {
  levelFilter.addEventListener('change', filterCourses);
}

if (ageFilter) {
  ageFilter.addEventListener('change', filterCourses);
}

// Reset filters
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    if (instrumentFilter) instrumentFilter.value = 'all';
    if (levelFilter) levelFilter.value = 'all';
    if (ageFilter) ageFilter.value = 'all';
    
    filterCourses();
  });
}

// Course Detail Modal functionality
const courseDetailBtns = document.querySelectorAll('.course-details-btn');
const courseDetailModal = document.getElementById('course-detail-modal');

// Course details data
const courseDetails = {
  'piano-fundamentals': {
    title: 'Piano Fundamentals',
    image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'All Ages (5+)',
    price: '₹6000',
    description: 'This course is designed for absolute beginners with no prior experience playing the piano. You\'ll learn proper hand positioning, basic note reading, and fundamental techniques to start your piano journey. By the end of the course, you\'ll be able to play simple pieces and have a foundation for further advancement.',
    curriculum: [
      'Proper posture and hand technique',
      'Introduction to the keyboard and note names',
      'Basic music notation and rhythm',
      'Playing simple melodies with both hands',
      'Introduction to scales and chords',
      'Basic music theory concepts',
      'End-of-course recital performance'
    ],
    instructor: {
      name: 'SAPAN SHARMA',
      bio: 'Professional pianist with extensive teaching experience, specializing in beginner and intermediate instruction.'
    }
  },
  'piano-intermediate': {
    title: 'Piano Repertoire & Technique',
    image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg',
    duration: '16 Weeks, 1 Hour/Week',
    level: 'Intermediate',
    age: 'Teens & Adults',
    price: '₹8000',
    description: 'Building on foundational piano skills, this intermediate course focuses on developing more advanced techniques and expanding your repertoire. You\'ll work on a variety of musical styles, improve your sight-reading abilities, and deepen your understanding of music theory concepts as they apply to performance.',
    curriculum: [
      'Advanced finger techniques and exercises',
      'Intermediate to advanced music theory',
      'Mastering complex rhythms and patterns',
      'Interpretation and artistic expression',
      'Diverse repertoire from classical to contemporary',
      'Pedaling techniques and dynamics',
      'Solo and ensemble performance opportunities'
    ],
    instructor: {
      name: 'SAPAN SHARMA',
      bio: 'Professional pianist with extensive teaching experience.'
    }
  },
  'guitar-basics': {
    title: 'Guitar Basics',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
    duration: '10 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'All Ages (8+)',
    price: '₹6000',
    description: 'Start your guitar journey with proper technique, chord foundations, and strumming patterns.',
    curriculum: [
      'Guitar basics and proper technique',
      'Basic chords and progressions',
      'Strumming patterns',
      'Reading tablature',
      'Simple songs and melodies',
      'Music theory fundamentals'
    ],
    instructor: {
      name: 'SAPAN SHARMA',
      bio: 'Experienced guitar instructor specializing in beginner techniques.'
    }
  },
  'electric-guitar': {
    title: 'Electric Guitar Techniques',
    image: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'Intermediate',
    age: 'Teens & Adults',
    price: '₹6000',
    description: 'Focus on rock, blues, and jazz styles with emphasis on soloing, effects, and expressive playing.',
    curriculum: [
      'Advanced guitar techniques',
      'Effects and tone shaping',
      'Improvisation and soloing',
      'Genre-specific styles',
      'Performance techniques',
      'Recording basics'
    ],
    instructor: {
      name: 'SAPAN SHARMA',
      bio: 'Professional guitarist specializing in electric guitar styles.'
    }
  },
  'violin-foundations': {
    title: 'Violin Foundations',
    image: 'https://images.pexels.com/photos/7097/people-woman-violin-music.jpg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'Ages 7+',
    price: '₹6000',
    description: 'Learn proper violin posture, bow technique, and basic pieces.',
    curriculum: [
      'Proper posture and holding',
      'Bow technique',
      'Basic note reading',
      'Simple pieces',
      'Music theory basics',
      'Practice techniques'
    ],
    instructor: {
      name: 'SAPAN SHARMA',
      bio: 'Experienced violin instructor for beginners.'
    }
  },
  'vocal-performance': {
    title: 'Vocal Performance',
    image: 'https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg',
    duration: '10 Weeks, 1 Hour/Week',
    level: 'All Levels',
    age: 'Teens & Adults',
    price: '₹6000',
    description: 'Develop your singing voice through proper technique and performance skills.',
    curriculum: [
      'Breathing techniques',
      'Vocal exercises',
      'Range development',
      'Performance skills',
      'Song interpretation',
      'Stage presence'
    ],
    instructor: {
      name: 'BHASKAR GANGULY',
      bio: 'Professional vocal coach with extensive performance experience.'
    }
  },
  'drum-basics': {
    title: 'Drum Kit Basics',
    image: 'https://images.ctfassets.net/3s5io6mnxfqz/2HNsNbf0vLjrPWBHAzTCTW/ffa20bf84222733d71cbc1a71ff2ed20/AdobeStock_71496802.jpeg?w=1920',
    duration: '8 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'Ages 8+',
    price: '₹5000',
    description: 'Learn the fundamentals of playing the drum kit, from proper stick grip to basic beats.',
    curriculum: [
      'Drum kit introduction',
      'Basic rhythms and patterns',
      'Proper technique',
      'Reading drum notation',
      'Simple fills and transitions',
      'Practice routines'
    ],
    instructor: {
      name: 'BHASKAR GANGULY',
      bio: 'Professional drummer with extensive teaching experience.'
    }
  },
  'Flute Studies': {
    title: 'Flute Studies',
    image: 'https://kayasanatakademi.com/wp-content/uploads/2019/10/yan-flut-kursu.jpg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'All Levels',
    age: 'Ages 10+',
    price: '₹6000',
    description: 'From beginner to intermediate levels, this comprehensive Flute course covers proper embouchure, tone production, and musical repertoire. Whether you\'re just starting out or looking to improve your existing skills, this course provides structured learning tailored to your level.',
    curriculum: [
      'Flute maintenance',
      'Proper embouchure and breathing technique',
      'Tone production and development',
      'Fingering and note production',
      'Scales and technical exercises',
      'Repertoire across various musical styles',
      'Improvisation basics (for intermediate students)'
    ],
    instructor: {
      name: 'BHASKAR GANGULY',
      bio: 'Multi-instrumentalist specializing in Flute and clarinet. Experienced in classical, jazz, and contemporary performance.'
    }
  },
  'music-theory': {
    title: 'Music Theory Fundamentals',
    image: 'https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg',
    duration: '8 Weeks, 1 Hour/Week',
    level: 'All Levels',
    age: 'Teens & Adults',
    price: '₹8000',
    description: 'Essential knowledge of scales, chords, rhythm, and notation.',
    curriculum: [
      'Note reading',
      'Scales and keys',
      'Chord construction',
      'Rhythm and meter',
      'Musical analysis',
      'Ear training'
    ],
    instructor: {
      name: 'SAPAN SHARMA',
      bio: 'Experienced music theory instructor.'
    }
  }
};

// Function to populate course detail modal
function populateCourseModal(courseId) {
  const courseData = courseDetails[courseId];
  
  if (!courseData || !courseDetailModal) return;
  
  // Set modal content
  document.getElementById('modal-course-title').textContent = courseData.title;
  document.getElementById('modal-course-image').src = courseData.image;
  document.getElementById('modal-course-image').alt = courseData.title;
  document.getElementById('modal-course-duration').textContent = courseData.duration;
  document.getElementById('modal-course-level').textContent = courseData.level;
  document.getElementById('modal-course-age').textContent = courseData.age;
  document.getElementById('modal-course-price').textContent = courseData.price;
  document.getElementById('modal-course-description').textContent = courseData.description;
  
  // Clear and populate curriculum list
  const curriculumList = document.getElementById('modal-course-curriculum');
  curriculumList.innerHTML = '';
  courseData.curriculum.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    curriculumList.appendChild(li);
  });
  
  // Set instructor info
  document.getElementById('modal-instructor-name').textContent = courseData.instructor.name;
  document.getElementById('modal-instructor-bio').textContent = courseData.instructor.bio;
  
  // Show modal
  courseDetailModal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';
}

// Event listeners for course detail buttons
courseDetailBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const courseId = btn.getAttribute('data-course');
    populateCourseModal(courseId);
  });
});