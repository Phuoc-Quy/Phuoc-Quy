const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const themeToggle = document.querySelector('.theme-toggle');
const skillsTrigger = document.querySelector('.info-box-skills');
const skillsModal = document.querySelector('#skills-modal');
const skillsModalPanel = document.querySelector('.skills-modal-panel');
const skillsModalClose = document.querySelector('.skills-modal-close');
const experienceTrigger = document.querySelector('.info-box-experience');
const experienceModal = document.querySelector('#experience-modal');
const experienceModalPanel = document.querySelector('.experience-modal-panel');
const experienceModalClose = document.querySelector('.experience-modal-close');
const projectsTrigger = document.querySelector('.info-box-project');
const projectsModal = document.querySelector('#projects-modal');
const projectsModalPanel = document.querySelector('#projects-modal .experience-modal-panel');
const projectsModalClose = document.querySelector('.projects-modal-close');
const educationTrigger = document.querySelector('.info-box-education');
const educationModal = document.querySelector('#education-modal');
const educationModalPanel = document.querySelector('#education-modal .experience-modal-panel');
const educationModalClose = document.querySelector('.education-modal-close');

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

const setupModal = (trigger, modal, panel, closeButton) => {
  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    trigger.focus();
  };

  trigger.addEventListener('click', () => {
    modal.hidden = false;
    document.body.classList.add('modal-open');
    closeButton.focus();
  });

  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  panel.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
};

setupModal(skillsTrigger, skillsModal, skillsModalPanel, skillsModalClose);
setupModal(
  experienceTrigger,
  experienceModal,
  experienceModalPanel,
  experienceModalClose,
);
setupModal(projectsTrigger, projectsModal, projectsModalPanel, projectsModalClose);
setupModal(
  educationTrigger,
  educationModal,
  educationModalPanel,
  educationModalClose,
);
