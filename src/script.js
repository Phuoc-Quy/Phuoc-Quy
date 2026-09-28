const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const themeToggle = document.querySelector('.theme-toggle');

const setTheme = (isDarkMode) => {
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeToggle.setAttribute(
    'aria-label',
    isDarkMode ? 'Disable dark mode' : 'Enable dark mode',
  );
  themeToggle.setAttribute(
    'title',
    isDarkMode ? 'Disable dark mode' : 'Enable dark mode',
  );
  themeToggle.innerHTML = `<i class="fa-solid fa-${isDarkMode ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
};

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
  const isDarkMode = !document.body.classList.contains('dark-mode');
  setTheme(isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${sectionId}`;
    link.classList.toggle('active', isActive);
    link.toggleAttribute('aria-current', isActive);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries.find((entry) => entry.isIntersecting);

    if (visibleSection) {
      setActiveLink(visibleSection.target.id);
    }
  },
  { threshold: 0.6 },
);

sections.forEach((section) => sectionObserver.observe(section));
