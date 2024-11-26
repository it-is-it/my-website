// Dark Mode Toggle Functionality
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode'); // Toggle the dark mode class on the body
};

// Scroll Behavior - Scroll down to the bottom
const scrollDown = document.getElementById('scroll-down');
const scrollUp = document.getElementById('scroll-up');

// Get sections for scroll tracking
const homeSection = document.getElementById('home');
const contactSection = document.getElementById('contact');
const portfolioSection = document.getElementById('portfolio');

// Scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Scroll to the bottom of the page
const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

// Event listeners for scroll buttons
scrollDown.addEventListener('click', scrollToBottom);
scrollUp.addEventListener('click', scrollToTop);

// Scroll Event Listener to show/hide scroll buttons
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Toggle the visibility of scroll buttons based on the scroll position
  if (scrollPosition < documentHeight - windowHeight - 200) {
    scrollDown.style.display = 'block'; // Show scroll down button
  } else {
    scrollDown.style.display = 'none'; // Hide scroll down button when at the bottom
  }

  if (scrollPosition > 200) {
    scrollUp.style.display = 'block'; // Show scroll up button when scrolled down
  } else {
    scrollUp.style.display = 'none'; // Hide scroll up button when at the top
  }
});

// Sticky Navigation Click Handlers
const homeNav = document.querySelector('#sticky-icons a:nth-child(1)');
const aboutNav = document.querySelector('#sticky-icons a:nth-child(2)');
const portfolioNav = document.querySelector('#sticky-icons a:nth-child(3)');
const contactNav = document.querySelector('#sticky-icons a:nth-child(4)');

// Scroll to sections
homeNav.addEventListener('click', () => {
  homeSection.scrollIntoView({ behavior: 'smooth' });
});

aboutNav.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

portfolioNav.addEventListener('click', () => {
  portfolioSection.scrollIntoView({ behavior: 'smooth' });
});

contactNav.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

// Check for saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  darkModeIcon.textContent = '🌞'; // Change icon to light mode
} else {
  document.body.classList.remove('dark-mode');
  darkModeIcon.textContent = '🌙'; // Change icon to dark mode
}

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save theme preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    darkModeIcon.textContent = '🌞'; // Change icon to light mode
  } else {
    localStorage.setItem('theme', 'light');
    darkModeIcon.textContent = '🌙'; // Change icon to dark mode
  }
});
