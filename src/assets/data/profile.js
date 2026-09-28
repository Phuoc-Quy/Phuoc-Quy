window.portfolioData = {
  skills: {
    number: '01',
    title: 'Technical Skills',
    icon: 'fa-code',
    eyebrow: 'Tools I work with',
    modalTitle: 'Technical skills',
    preview: [
      'Python · C/C++/C# · Java · JavaScript · TypeScript · SQL',
      'React · Node.js · .NET · PostgreSQL · Redis · AWS · Docker',
    ],
    logos: [
      { label: 'Python', icon: 'fa-brands fa-python' },
      { label: 'Java', icon: 'fa-brands fa-java' },
      { label: 'JavaScript', icon: 'fa-brands fa-js' },
      { label: 'React', icon: 'fa-brands fa-react' },
      { label: 'Node.js', icon: 'fa-brands fa-node-js' },
      { label: 'Docker', icon: 'fa-brands fa-docker' },
      { label: 'AWS', icon: 'fa-brands fa-aws' },
      { label: 'SQL', icon: 'fa-solid fa-database' },
    ],
  },
  experience: {
    number: '02',
    title: 'Experiences',
    icon: 'fa-briefcase',
    eyebrow: "Where I've worked",
    modalTitle: 'Work experience',
    preview: [
      'IoT Network Technician Intern · Foundation Pharmacy · 2026',
      'Instructional Student Assistant · CSULB · 2025',
      'Data Warehouse Assistant Intern · Superbalife International · 2023',
    ],
    entries: [
      {
        meta: 'Jun 2026 - Aug 2026',
        context: 'Delray Beach, FL',
        title: 'IoT Network Technician - Internship',
        company: 'Foundation Pharmacy, LLC',
        bullets: [
          'Deployed and configured 8 workstations and 1 automated packaging machine, establishing reliable network connectivity for daily operations.',
          'Integrated workstation systems with company software through API configuration.',
          'Optimized network connectivity, allowing workers to begin operations 2 days ahead of schedule.',
        ],
      },
      {
        meta: 'Jan 2025 - Dec 2025',
        context: 'Long Beach, CA',
        title: 'Instructional Student Assistant',
        company: 'California State University, Long Beach',
        bullets: [
          'Assisted in teaching CS courses and supported 100+ students through debugging and concept clarification.',
          'Improved student performance through structured guidance and technical explanations.',
        ],
      },
      {
        meta: 'Mar 2023 - Jun 2023',
        context: 'Los Angeles, CA',
        title: 'Data Warehouse Assistant - Internship',
        company: 'Superbalife International, LLC',
        bullets: [
          'Migrated 50,000+ legacy records from Excel to a structured SQL database, reducing manual data management time by 22%.',
          'Automated order-data sorting, saving approximately 1 hour of processing time per day.',
        ],
      },
    ],
  },
  projects: {
    number: '03',
    title: 'Projects',
    icon: 'fa-layer-group',
    eyebrow: 'Selected work',
    modalTitle: 'Projects',
    preview: [
      'KouMe · React Native · PostgreSQL · Redis',
      'Design Patterns · Clean code architecture',
      'Data Structures · Algorithms from scratch',
    ],
    entries: [
      {
        meta: 'Jan 2026 - Present',
        context: 'Full-stack application',
        title: 'KouMe',
        company:
          'React Native · Expo · TypeScript · Node.js · Express · PostgreSQL · Redis',
        bullets: [
          'Built signup, login, logout, OTP verification and password reset workflows.',
          'Implemented JWT access and refresh tokens, RSA key pairs, bcrypt hashing, SecureStore and token revocation.',
          'Designed modular controllers, services, repositories, migrations and Redis stores with automated unit and integration tests.',
        ],
      },
      {
        meta: 'Public repository',
        context: 'Software architecture',
        title: 'Design Patterns',
        company: 'Clean code and reusable architecture',
        bullets: [
          'Developed a public repository demonstrating design patterns through practical programming examples.',
        ],
      },
      {
        meta: 'Implemented from scratch',
        context: 'Algorithms',
        title: 'Data Structures',
        company: 'Efficient operations and problem-solving',
        bullets: [
          'Implemented fundamental data structures and algorithms with clean, practical solutions.',
        ],
      },
    ],
  },
  education: {
    number: '04',
    title: 'Educations',
    icon: 'fa-book-open',
    eyebrow: 'Academic background',
    modalTitle: 'Education',
    preview: [
      "B.S. Computer Science · CSULB · GPA 4.0 · Dean's List",
      "A.S. Computer Information Systems · El Camino College · GPA 4.0 · Dean's List",
    ],
    entries: [
      {
        meta: 'Aug 2023 - Dec 2026',
        context: 'Long Beach, CA',
        title: 'Bachelor of Science, Computer Science',
        company:
          "California State University, Long Beach · GPA 4.0 · Dean's List",
      },
      {
        meta: 'Feb 2021 - Jun 2023',
        context: 'Torrance, CA',
        title: 'Associate of Science, Computer Information Systems',
        company: "El Camino College · GPA 4.0 · Dean's List",
      },
    ],
  },
};
