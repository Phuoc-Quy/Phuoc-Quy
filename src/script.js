const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const themeToggle = document.querySelector('.theme-toggle');
const skillsTrigger = document.querySelector('.info-box-skills');
const skillsModal = document.querySelector('#skills-modal');
const skillsModalPanel = document.querySelector('.skills-modal-panel');
const experienceTrigger = document.querySelector('.info-box-experience');
const experienceModal = document.querySelector('#experience-modal');
const experienceModalPanel = document.querySelector('.experience-modal-panel');
const projectsTrigger = document.querySelector('.info-box-project');
const projectsModal = document.querySelector('#projects-modal');
const projectsModalPanel = document.querySelector(
  '#projects-modal .experience-modal-panel',
);
const educationTrigger = document.querySelector('.info-box-education');
const educationModal = document.querySelector('#education-modal');
const educationModalPanel = document.querySelector(
  '#education-modal .experience-modal-panel',
);
const profileData = window.portfolioData;

const renderEntryList = (entries) =>
  `<div class="experience-list">${entries
    .map(
      (entry) => `
        <article class="experience-entry">
          <div class="experience-meta"><strong>${entry.meta}</strong><span>${entry.context}</span></div>
          <h3>${entry.title}</h3>
          <p class="experience-company">${entry.company}</p>
          ${entry.bullets ? `<ul>${entry.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>` : ''}
        </article>`,
    )
    .join('')}</div>`;

const renderSkills = (skills) => {
  const logoSet = skills.logos
    .map(
      (logo) =>
        `<span class="skill-logo"><i class="${logo.icon}" aria-hidden="true"></i><small>${logo.label}</small></span>`,
    )
    .join('');

  return `<div class="skills-logo-row" aria-label="Technical skills logos">
    <div class="skills-logo-track">
      <div class="skills-logo-set">${logoSet}</div>
      <div class="skills-logo-set" aria-hidden="true">${logoSet}</div>
    </div>
  </div>`;
};

const renderProfile = () => {
  document.querySelectorAll('[data-profile-trigger]').forEach((card) => {
    const data = profileData[card.dataset.profileTrigger];
    card.querySelector('.info-number').textContent = data.number;
    card.querySelector('h3').textContent = data.title;
    card.querySelector('.info-preview').innerHTML = data.preview
      .map((line) => `<p class="info-detail">${line}</p>`)
      .join('');
  });

  const modals = [
    { key: 'skills', modal: skillsModal, panel: skillsModalPanel },
    { key: 'experience', modal: experienceModal, panel: experienceModalPanel },
    { key: 'projects', modal: projectsModal, panel: projectsModalPanel },
    { key: 'education', modal: educationModal, panel: educationModalPanel },
  ];

  modals.forEach(({ key, modal, panel }) => {
    const data = profileData[key];
    const content =
      key === 'skills' ? renderSkills(data) : renderEntryList(data.entries);

    panel.innerHTML = `
      <button class="skills-modal-close" type="button" aria-label="Close ${data.title.toLowerCase()} details">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <p class="main-kicker">${data.eyebrow}</p>
      <h2 id="${modal.id}-title">${data.modalTitle}</h2>
      ${content}`;
    modal.setAttribute('aria-labelledby', `${modal.id}-title`);
  });
};

renderProfile();

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

setupModal(
  skillsTrigger,
  skillsModal,
  skillsModalPanel,
  skillsModal.querySelector('.skills-modal-close'),
);
setupModal(
  experienceTrigger,
  experienceModal,
  experienceModalPanel,
  experienceModal.querySelector('.skills-modal-close'),
);
setupModal(
  projectsTrigger,
  projectsModal,
  projectsModalPanel,
  projectsModal.querySelector('.skills-modal-close'),
);
setupModal(
  educationTrigger,
  educationModal,
  educationModalPanel,
  educationModal.querySelector('.skills-modal-close'),
);
