// About page specific JavaScript

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

if (timelineItems.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.2
  });
  
  // Set initial styles and observe timeline items
  timelineItems.forEach((item, index) => {
    // Stagger the initial positions
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
    
    observer.observe(item);
  });
}

// Facility cards hover effect enhancement
const facilityCards = document.querySelectorAll('.facility-card');

facilityCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    // Add a subtle tilt effect
    card.style.transform = 'translateY(-5px) rotate(1deg)';
  });
  
  card.addEventListener('mouseleave', () => {
    // Reset to original state with just the translateY from CSS
    card.style.transform = 'translateY(-5px)';
    
    // After transition completes, remove inline styles
    setTimeout(() => {
      card.style.transform = '';
    }, 300);
  });
});

// Mission statement highlight effect
const missionStatement = document.querySelector('.mission-statement');

if (missionStatement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        missionStatement.classList.add('highlighted');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(missionStatement);
}

// Add some additional styling for mission statement highlight effect
const style = document.createElement('style');
style.textContent = `
  .mission-statement.highlighted {
    animation: highlightText 1s ease-out forwards;
  }
  
  @keyframes highlightText {
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: 0% 100%;
    }
  }
  
  .mission-statement {
    background: linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(230, 175, 46, 0.3) 60%, rgba(230, 175, 46, 0.3) 100%);
    background-size: 100% 200%;
    background-position: 0% 0;
  }
`;
document.head.appendChild(style);

// Team members hover effect
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.addEventListener('mouseenter', () => {
    const image = member.querySelector('.member-image img');
    if (image) {
      image.style.transform = 'scale(1.05)';
    }
  });
  
  member.addEventListener('mouseleave', () => {
    const image = member.querySelector('.member-image img');
    if (image) {
      image.style.transform = '';
    }
  });
});