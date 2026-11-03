export const profile = {
  name: 'Akhter Hussain',
  role: 'Frontend & MERN Developer',
  roles: ['React interfaces', 'MERN-stack apps', 'responsive websites', 'clean, maintainable code'],
  tagline:
    'Software engineering student at the University of Sargodha, building fast, accessible and responsive web apps.',
  about: [
    "I'm a front-end web developer who specializes in JavaScript, HTML/CSS and C++, with working knowledge of React.js, Bootstrap, jQuery and Tailwind CSS.",
    "I enjoy turning ideas into visually polished, user-friendly websites and I'm now building full-stack applications with MongoDB, Express, React and Node.js. This portfolio is one of them.",
  ],
  location: 'Satellite Town, Sargodha, Pakistan',
  email: 'akhtershirani64@gmail.com',
  phone: '+92 346 5095504',
  whatsapp: 'https://wa.me/923465095504',
  github: 'https://github.com/Akhter-Hussain97',
  resume: '/AHS.CV.pdf',
};

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'C++ (OOP, DSA)', 'HTML', 'CSS'] },
  { group: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Bootstrap', 'jQuery'] },
  { group: 'Backend & Data', items: ['Node.js', 'Express', 'MongoDB', 'Django', 'Databases (DBS)'] },
];

export const education = [
  { degree: 'BS Software Engineering', place: 'University of Sargodha', years: '2022 – 2026', score: 'CGPA 3.26', current: true },
  { degree: 'Intermediate (FSc, Computer Science)', place: 'Govt. Degree College Khaplu', years: '2019 – 2021', score: '83%' },
  { degree: 'Matric', place: 'Govt. Boys High School Barah', years: '2017 – 2019', score: '72%' },
];

export const extras = {
  languages: ['English (intermediate)', 'Urdu (fluent)', 'Balti (fluent)'],
  certifications: ['GLOF', 'FAK'],
  hobbies: ['Book reading', 'Coding', 'Cricket'],
};

// Fallback used if the API is unreachable (e.g. static hosting of the client only).
export const fallbackProjects = [
  { _id: 'p1', title: 'MonkeyNews', category: 'React', description: 'A news reader built with React. Browse headlines by category with a clean, responsive layout.', tags: ['React', 'REST API', 'Responsive'], repoUrl: profile.github, featured: true },
  { _id: 'p2', title: 'Word & Text Converter', category: 'React', description: 'A React utility for transforming text: change case, trim whitespace and count words and characters.', tags: ['React', 'Hooks', 'State'], repoUrl: profile.github, featured: true },
  { _id: 'p3', title: 'Restaurant Website', category: 'HTML/CSS', description: 'A multi-section restaurant landing page, hand-built with semantic HTML and CSS.', tags: ['HTML', 'CSS', 'Responsive'], repoUrl: profile.github },
  { _id: 'p4', title: 'YouTube Clone', category: 'HTML/CSS', description: 'A front-end recreation of the YouTube home layout using flexbox and grid.', tags: ['HTML', 'CSS', 'Flexbox'], repoUrl: profile.github },
  { _id: 'p5', title: 'Tic Tac Toe', category: 'JavaScript', description: 'A two-player browser game with win and draw detection, written in vanilla JavaScript.', tags: ['JavaScript', 'DOM', 'Game logic'], repoUrl: profile.github },
  { _id: 'p6', title: 'Rock Paper Scissors', category: 'JavaScript', description: 'Play against the computer in this score-tracking game, built with vanilla JavaScript.', tags: ['JavaScript', 'DOM', 'Game logic'], repoUrl: profile.github },
  { _id: 'p7', title: 'Bank Management System', category: 'C++', description: 'A console application in C++ using OOP: accounts, deposits, withdrawals and balance checks.', tags: ['C++', 'OOP', 'File I/O'], repoUrl: profile.github },
  { _id: 'p8', title: 'Digital Clock', category: 'C++', description: 'A C++ program that renders a live-updating digital clock in the terminal.', tags: ['C++', 'Time'], repoUrl: profile.github },
];
