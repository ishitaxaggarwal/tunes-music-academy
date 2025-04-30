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

// Instructor details data (in a real application, this would come from a database)
const instructorDetails = {
  'emily-chen': {
    name: 'Emily Chen',
    title: 'Piano Program Director',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
    credentials: [
      'M.M. Piano Performance, Juilliard School of Music',
      'B.M. Piano Performance, Eastman School of Music',
      '15+ Years Teaching Experience',
      'Founder of Tunes Music Academy'
    ],
    bio: 'Emily Chen is an accomplished concert pianist and dedicated educator with over 15 years of teaching experience. After completing her studies at Juilliard, she performed extensively throughout North America, Europe, and Asia before focusing on music education. Her passion for teaching led her to found Tunes Music Academy in 2008, with a vision of creating an inclusive environment where students of all ages and backgrounds could receive exceptional music education.',
    specialties: [
      'Classical piano repertoire',
      'Advanced technique development',
      'Performance preparation',
      'Early advanced to professional level instruction',
      'Piano pedagogy and teacher training'
    ],
    education: [
      'Master of Music in Piano Performance, Juilliard School of Music',
      'Bachelor of Music in Piano Performance, Eastman School of Music',
      'Advanced Studies at Aspen Music Festival',
      'Piano Pedagogy Certification, Music Teachers National Association'
    ],
    achievements: [
      'Winner, International Piano Competition, 2005',
      'Soloist with the New York Philharmonic and Boston Symphony',
      'Released two solo albums of classical piano repertoire',
      'Featured in "Pianist Today" magazine as an educator to watch',
      'Developed the comprehensive piano curriculum used at Tunes Music Academy'
    ]
  },
  'robert-davis': {
    name: 'Robert Davis',
    title: 'Piano Instructor',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    credentials: [
      'B.M. Piano Performance, Berklee College of Music',
      'Jazz Studies Certificate, New England Conservatory',
      '8 Years Teaching Experience',
      'Active Performer in Local Jazz Scene'
    ],
    bio: 'Robert Davis brings a unique blend of classical training and jazz expertise to his piano instruction. After graduating from Berklee College of Music, he established himself as a respected performer in the jazz club circuit while developing his teaching approach. Robert specializes in helping students develop improvisational skills and a personal connection to their music, regardless of the style they pursue.',
    specialties: [
      'Jazz piano and improvisation',
      'Contemporary styles (pop, rock, blues)',
      'Music theory application at the keyboard',
      'Chord voicings and harmonic concepts',
      'Beginner to advanced instruction'
    ],
    education: [
      'Bachelor of Music in Piano Performance, Berklee College of Music',
      'Jazz Studies Certificate, New England Conservatory',
      'Studied with jazz legends including Kenny Werner and Danilo Pérez',
      'Continuing education in modern piano pedagogical approaches'
    ],
    achievements: [
      'Released "Modern Interpretations," a critically acclaimed jazz album',
      'Regular performer at Blue Note and other premier jazz venues',
      'Composed music for independent films and multimedia projects',
      'Developed innovative teaching methods for jazz improvisation',
      'Session pianist on over a dozen recordings'
    ]
  },
  'jake-thompson': {
    name: 'Jake Thompson',
    title: 'Guitar Program Lead',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    credentials: [
      'M.M. Guitar Performance, USC Thornton School of Music',
      'B.M. Music Education, Berklee College of Music',
      '12 Years Teaching Experience',
      'Former Touring Guitarist for Multiple Artists'
    ],
    bio: 'Jake Thompson is a versatile guitarist with mastery across multiple genres, from classical to rock, blues, and jazz. His approach to teaching is comprehensive yet tailored to each student\'s interests and goals. After years of professional touring and studio work, Jake found his true calling in education, where he excels at breaking down complex techniques into manageable steps for students at all levels.',
    specialties: [
      'Electric and acoustic guitar techniques',
      'Rock, blues, and jazz styles',
      'Music theory for guitarists',
      'Recording and production fundamentals',
      'Performance skills development'
    ],
    education: [
      'Master of Music in Guitar Performance, USC Thornton School of Music',
      'Bachelor of Music in Music Education, Berklee College of Music',
      'Advanced Studies in Classical Guitar, Aspen Music Festival',
      'Certified in Music Learning Theory Application'
    ],
    achievements: [
      'Lead guitarist for Grammy-nominated artist\'s world tour (2012-2014)',
      'Session guitarist on over 20 commercially released albums',
      'Featured in Guitar World magazine\'s "Teachers to Watch"',
      'Developed innovative guitar curriculum for online learning platforms',
      'Published "Modern Guitar Approaches," a teaching method book'
    ]
  },
  'sophia-rodriguez': {
    name: 'Sophia Rodriguez',
    title: 'Guitar & Bass Instructor',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    credentials: [
      'B.A. Music Education, UCLA',
      'Classical Guitar Performance Certificate, SF Conservatory',
      'Flamenco Studies in Seville, Spain',
      '10 Years Teaching Experience'
    ],
    bio: 'Sophia Rodriguez brings a rich cultural heritage to her guitar and bass instruction, with particular expertise in classical and flamenco guitar styles. Her approach emphasizes proper technique while honoring the cultural contexts of various musical traditions. Students appreciate her patient, structured teaching style and her ability to inspire musical expression across genres.',
    specialties: [
      'Classical and flamenco guitar techniques',
      'Bass guitar fundamentals and advanced concepts',
      'World music styles and traditions',
      'Technical development and injury prevention',
      'Performance preparation and stage presence'
    ],
    education: [
      'Bachelor of Arts in Music Education, UCLA',
      'Classical Guitar Performance Certificate, San Francisco Conservatory',
      'Intensive Flamenco Studies, Fundación Cristina Heeren de Arte Flamenco, Seville, Spain',
      'Bass Studies with Carol Kaye and other prominent educators'
    ],
    achievements: [
      'First prize, International Classical Guitar Competition, 2016',
      'Released "Flamenco Journeys," an album of original compositions',
      'Performed with the Los Angeles Guitar Quartet as guest artist',
      'Developed specialized curriculum for young guitar students',
      'Featured performer at major classical and flamenco festivals'
    ]
  },
  'stephanie-park': {
    name: 'Stephanie Park',
    title: 'Violin Instructor',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    credentials: [
      'D.M.A. Violin Performance, Eastman School of Music',
      'M.M. Violin Performance and Pedagogy, New England Conservatory',
      'Certified Suzuki Method Instructor',
      'Former Philharmonic Orchestra Member'
    ],
    bio: 'Dr. Stephanie Park brings exceptional violin expertise shaped by her extensive orchestral and solo performance career. A passionate educator, she combines traditional and Suzuki methods to provide comprehensive violin education. Her teaching philosophy emphasizes the development of solid technique while nurturing each student\'s musical voice and creative expression.',
    specialties: [
      'Suzuki method for young beginners',
      'Traditional classical training',
      'Orchestral repertoire and audition preparation',
      'Chamber music coaching',
      'Advanced technique for serious students'
    ],
    education: [
      'Doctor of Musical Arts in Violin Performance, Eastman School of Music',
      'Master of Music in Violin Performance and Pedagogy, New England Conservatory',
      'Bachelor of Music in Violin Performance, Juilliard School of Music',
      'Complete Suzuki Teacher Training and Certification'
    ],
    achievements: [
      'Concertmaster of the Metropolitan Philharmonic Orchestra (2010-2015)',
      'Solo recitals at Carnegie Hall and other prestigious venues',
      'Released "Bach Solo Works" recording to critical acclaim',
      'Author of "Violin Technique for the Young Musician"',
      'Recipient of the Excellence in String Teaching Award, 2018'
    ]
  },
  'maria-johnson': {
    name: 'Maria Johnson',
    title: 'Vocal Coach',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    credentials: [
      'M.F.A. Vocal Performance, NYU Tisch School of the Arts',
      'B.M. Voice, Manhattan School of Music',
      'Certified Voice Instructor, Estill Voice Training',
      'Opera & Broadway Experience'
    ],
    bio: 'Maria Johnson is a versatile vocal coach with experience spanning opera, musical theater, and contemporary commercial music. Her approach to teaching is grounded in healthy vocal technique that supports stylistic expression across genres. She has a particular talent for helping students overcome technical challenges and develop their unique vocal identity.',
    specialties: [
      'Healthy vocal technique for all styles',
      'Breath support and vocal stamina',
      'Belt technique for musical theater',
      'Audition preparation and repertoire selection',
      'Performance anxiety management'
    ],
    education: [
      'Master of Fine Arts in Vocal Performance, NYU Tisch School of the Arts',
      'Bachelor of Music in Voice, Manhattan School of Music',
      'Estill Voice Training System Certification',
      'Somatic Voicework™ The LoVetri Method (Levels I, II, III)'
    ],
    achievements: [
      'Lead roles in major opera productions including La Bohème and Carmen',
      'Featured performer in Broadway production of "The Phantom of the Opera"',
      'Vocal director for regional theater productions',
      'Multiple students accepted to prestigious vocal performance programs',
      'Published research on vocal health for contemporary singers'
    ]
  },
  'marcus-williams': {
    name: 'Marcus Williams',
    title: 'Percussion Instructor',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    credentials: [
      'B.M. Percussion Performance, Berklee College of Music',
      'Advanced Studies in African and Latin Percussion',
      'Professional Session Drummer',
      '9 Years Teaching Experience'
    ],
    bio: 'Marcus Williams brings rhythm to life in his dynamic percussion instruction. With experience spanning jazz, rock, funk, and world music traditions, he helps students develop solid technical foundations while exploring diverse stylistic approaches. His teaching emphasizes not just skills but musicality and ensemble playing, preparing students for real-world musical situations.',
    specialties: [
      'Drum kit technique for multiple genres',
      'Hand percussion (congas, djembe, cajon)',
      'Reading drum notation and charts',
      'Groove development and time feel',
      'Electronic drums and programming'
    ],
    education: [
      'Bachelor of Music in Percussion Performance, Berklee College of Music',
      'Advanced Studies in West African Drumming, Ghana National Academy',
      'Latin Percussion Intensive, Havana, Cuba',
      'Ongoing professional development in modern drum techniques'
    ],
    achievements: [
      'Touring drummer for internationally recognized jazz artists',
      'Session drummer on over 40 commercial recordings',
      'Developer of "Rhythm Foundations" educational method',
      'Featured artist in Modern Drummer magazine',
      'Percussion director for youth music program serving underrepresented communities'
    ]
  },
  'daniel-kim': {
    name: 'Daniel Kim',
    title: 'Woodwinds Specialist',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
    credentials: [
      'M.M. Saxophone Performance, Manhattan School of Music',
      'B.M. Multiple Woodwind Performance, Eastman School of Music',
      'Principal Saxophonist, Metropolitan Jazz Orchestra',
      'Multi-Instrumentalist: Saxophone, Clarinet, Flute'
    ],
    bio: 'Daniel Kim is a versatile woodwind specialist with mastery of saxophone, clarinet, and flute. His teaching approach emphasizes the fundamentals that apply across woodwind instruments while honoring the unique characteristics and techniques of each. With extensive performance experience in classical, jazz, and commercial settings, Daniel helps students develop as complete musicians ready for diverse musical settings.',
    specialties: [
      'Saxophone (all styles, all types)',
      'Clarinet and bass clarinet',
      'Flute and piccolo',
      'Doubling skills for multi-instrumentalists',
      'Jazz improvisation and interpretation'
    ],
    education: [
      'Master of Music in Saxophone Performance, Manhattan School of Music',
      'Bachelor of Music in Multiple Woodwind Performance, Eastman School of Music',
      'Advanced Jazz Studies, Brubeck Institute',
      'Private studies with leading woodwind specialists'
    ],
    achievements: [
      'Principal Saxophonist with the Metropolitan Jazz Orchestra',
      'Woodwind doubler for Broadway productions',
      'Released "Conversations," a critically acclaimed jazz album',
      'Guest artist and clinician at major universities',
      'Featured soloist with numerous big bands and orchestras'
    ]
  },
  'david-miller': {
    name: 'David Miller',
    title: 'Music Theory & Composition',
    image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg',
    credentials: [
      'Ph.D. Music Theory & Composition, Eastman School of Music',
      'M.M. Composition, Yale School of Music',
      'B.M. Theory and Composition, Oberlin Conservatory',
      'Published Composer and Former University Professor'
    ],
    bio: 'Dr. David Miller brings deep musical knowledge and analytical skill to his teaching of music theory and composition. Drawing on his background as both a composer and academic, he has a remarkable ability to make complex theoretical concepts accessible and relevant to students of all backgrounds. His approach bridges traditional theory with contemporary applications, helping students connect analytical understanding with creative expression.',
    specialties: [
      'Music theory for all levels',
      'Composition in classical and contemporary styles',
      'Jazz harmony and arranging',
      'Film scoring and media composition',
      'Analytical approaches to diverse musical traditions'
    ],
    education: [
      'Ph.D. Music Theory & Composition, Eastman School of Music',
      'Master of Music in Composition, Yale School of Music',
      'Bachelor of Music in Theory and Composition, Oberlin Conservatory',
      'Post-doctoral studies in Ethnomusicology, UCLA'
    ],
    achievements: [
      'Author of "Harmony in Practice," a widely used theory textbook',
      'Compositions performed by major orchestras and ensembles',
      'Commissioned composer for film and multimedia projects',
      'Former professor of composition at leading conservatory',
      'Recipient of the ASCAP Composer Award'
    ]
  }
};

// Function to populate instructor bio modal
function populateInstructorModal(instructorId) {
  const instructorData = instructorDetails[instructorId];
  
  if (!instructorData || !instructorBioModal) return;
  
  // Set modal content
  document.getElementById('modal-instructor-name').textContent = instructorData.name;
  document.getElementById('modal-instructor-img').src = instructorData.image;
  document.getElementById('modal-instructor-img').alt = instructorData.name;
  document.getElementById('modal-instructor-title').textContent = instructorData.title;
  
  // Clear and populate credentials
  const credentialsDiv = document.getElementById('modal-instructor-credentials');
  credentialsDiv.innerHTML = '';
  instructorData.credentials.forEach(credential => {
    const p = document.createElement('p');
    p.textContent = credential;
    credentialsDiv.appendChild(p);
  });
  
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
  
  // Clear and populate education
  const educationList = document.getElementById('modal-instructor-education');
  educationList.innerHTML = '';
  instructorData.education.forEach(edu => {
    const li = document.createElement('li');
    li.textContent = edu;
    educationList.appendChild(li);
  });
  
  // Clear and populate achievements
  const achievementsList = document.getElementById('modal-instructor-achievements');
  achievementsList.innerHTML = '';
  instructorData.achievements.forEach(achievement => {
    const li = document.createElement('li');
    li.textContent = achievement;
    achievementsList.appendChild(li);
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