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

// Course details data (in a real application, this would come from a database)
const courseDetails = {
  'piano-fundamentals': {
    title: 'Piano Fundamentals',
    image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'All Ages (5+)',
    price: '$299',
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
      name: 'Emily Chen',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      bio: 'Concert pianist with over 15 years of teaching experience, specializing in beginner and intermediate instruction.'
    }
  },
  'piano-intermediate': {
    title: 'Piano Repertoire & Technique',
    image: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg',
    duration: '16 Weeks, 1 Hour/Week',
    level: 'Intermediate',
    age: 'Teens & Adults',
    price: '$399',
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
      name: 'Robert Davis',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Specializes in jazz and contemporary piano styles with extensive performance experience throughout North America and Europe.'
    }
  },
  'guitar-basics': {
    title: 'Guitar Basics',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
    duration: '10 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'All Ages (8+)',
    price: '$279',
    description: 'This introductory guitar course is perfect for those who have never picked up a guitar before. You\'ll learn the essentials of guitar playing including proper technique, basic chords, and simple strumming patterns. By the end of the course, you\'ll be able to play several songs and have the confidence to continue your guitar journey.',
    curriculum: [
      'Parts of the guitar and proper holding technique',
      'Tuning your instrument',
      'Basic open chords and power chords',
      'Simple strumming and picking patterns',
      'Reading guitar tablature and chord diagrams',
      'Playing your first songs',
      'Basic instrument maintenance'
    ],
    instructor: {
      name: 'Jake Thompson',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      bio: 'Former touring guitarist with a passion for teaching beginners the joy of playing guitar.'
    }
  },
  'electric-guitar': {
    title: 'Electric Guitar Techniques',
    image: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'Intermediate',
    age: 'Teens & Adults',
    price: '$349',
    description: 'Take your electric guitar playing to the next level with this focused course on rock, blues, and jazz techniques. You\'ll develop your soloing abilities, learn to use effects pedals, and explore various styles of electric guitar playing. Ideal for guitarists who are comfortable with basic chords and want to expand their skills.',
    curriculum: [
      'Scale patterns and application in solos',
      'Understanding amplifiers and tone',
      'Effects pedals and signal chain basics',
      'Rock, blues, and jazz stylistic techniques',
      'Improvisation approaches',
      'Bending, vibrato, and expressive techniques',
      'Recording basics for electric guitar'
    ],
    instructor: {
      name: 'Sophia Rodriguez',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: 'Professional electric guitarist with extensive studio recording experience and expertise in multiple genres.'
    }
  },
  'violin-foundations': {
    title: 'Violin Foundations',
    image: 'https://images.pexels.com/photos/7097/people-woman-violin-music.jpg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'Ages 7+',
    price: '$329',
    description: 'Begin your violin journey with proper fundamentals and technique. This course covers everything from holding the instrument and bow correctly to playing your first melodies. Our patient approach ensures steady progress through the challenging early stages of violin learning.',
    curriculum: [
      'Proper posture and instrument holding',
      'Bow hold and basic bowing techniques',
      'Left hand positioning and fingering',
      'Reading music for violin (including clefs and notation)',
      'Introduction to scales and simple pieces',
      'Ear training and pitch matching',
      'Group performance experience'
    ],
    instructor: {
      name: 'Stephanie Park',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      bio: 'Classically trained violinist with experience teaching the Suzuki method and traditional approaches to students of all ages.'
    }
  },
  'vocal-performance': {
    title: 'Vocal Performance',
    image: 'https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg',
    duration: '10 Weeks, 1 Hour/Week',
    level: 'All Levels',
    age: 'Teens & Adults',
    price: '$299',
    description: 'Develop your singing voice through proper technique, breathing exercises, and performance skills. This course is adaptable to various skill levels, focusing on your individual vocal development while also providing opportunities for group singing and performance experience.',
    curriculum: [
      'Proper breathing techniques for singing',
      'Vocal warm-ups and exercises',
      'Extending vocal range safely',
      'Diction and articulation',
      'Performance skills and stage presence',
      'Microphone technique',
      'Solo and ensemble singing opportunities'
    ],
    instructor: {
      name: 'Maria Johnson',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      bio: 'Professional vocalist with background in opera, musical theater, and contemporary styles. Specializes in healthy vocal technique.'
    }
  },
  'drum-basics': {
    title: 'Drum Kit Basics',
    image: 'https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg',
    duration: '8 Weeks, 1 Hour/Week',
    level: 'Beginner',
    age: 'Ages 8+',
    price: '$279',
    description: 'Learn the fundamentals of playing the drum kit, from proper stick grip and striking technique to basic beats and fills. This course emphasizes coordination, timing, and rhythm, giving you a solid foundation for playing a variety of musical styles on the drums.',
    curriculum: [
      'Drum kit components and setup',
      'Proper stick grip and striking technique',
      'Basic beats and rhythmic patterns',
      'Coordination exercises',
      'Reading drum notation',
      'Simple fills and transitions',
      'Introduction to different musical styles'
    ],
    instructor: {
      name: 'Marcus Williams',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      bio: 'Professional drummer with extensive experience in rock, jazz, and session work. Known for his patient teaching approach.'
    }
  },
  'saxophone-studies': {
    title: 'Saxophone Studies',
    image: 'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg',
    duration: '12 Weeks, 1 Hour/Week',
    level: 'All Levels',
    age: 'Ages 10+',
    price: '$349',
    description: 'From beginner to intermediate levels, this comprehensive saxophone course covers proper embouchure, tone production, and musical repertoire. Whether you\'re just starting out or looking to improve your existing skills, this course provides structured learning tailored to your level.',
    curriculum: [
      'Saxophone assembly and maintenance',
      'Proper embouchure and breathing technique',
      'Tone production and development',
      'Fingering and note production',
      'Scales and technical exercises',
      'Repertoire across various musical styles',
      'Improvisation basics (for intermediate students)'
    ],
    instructor: {
      name: 'Daniel Kim',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
      bio: 'Multi-instrumentalist specializing in saxophone and clarinet. Experienced in classical, jazz, and contemporary performance.'
    }
  },
  'music-theory': {
    title: 'Music Theory Fundamentals',
    image: 'https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg',
    duration: '8 Weeks, 1 Hour/Week',
    level: 'All Levels',
    age: 'Teens & Adults',
    price: '$199',
    description: 'Develop a solid understanding of music theory concepts applicable to all instruments. This course covers scales, chords, rhythm, and notation, providing essential knowledge for any musician wanting to deepen their understanding of how music works.',
    curriculum: [
      'Note reading and staff notation',
      'Key signatures and scales',
      'Intervals and chord construction',
      'Rhythm notation and time signatures',
      'Harmonic progressions',
      'Musical form and analysis',
      'Ear training and sight-singing'
    ],
    instructor: {
      name: 'David Miller',
      image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg',
      bio: 'Ph.D. in Music Theory with extensive teaching experience at the university level. Makes complex concepts accessible and engaging.'
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
  document.getElementById('modal-instructor-image').src = courseData.instructor.image;
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