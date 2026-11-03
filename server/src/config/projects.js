// Single source of truth for seed data (used by scripts/seed.js).
const GH = 'https://github.com/Akhter-Hussain97';

export const projects = [
  {
    title: 'MonkeyNews',
    description:
      'A news reader built with React. Browse headlines by category with a clean, responsive layout.',
    category: 'React',
    tags: ['React', 'REST API', 'Responsive'],
    repoUrl: GH,
    featured: true,
    order: 1,
  },
  {
    title: 'Word & Text Converter',
    description:
      'A React utility for transforming text: change case, trim whitespace and count words and characters.',
    category: 'React',
    tags: ['React', 'Hooks', 'State'],
    repoUrl: GH,
    featured: true,
    order: 2,
  },
  {
    title: 'Restaurant Website',
    description: 'A multi-section restaurant landing page, hand-built with semantic HTML and CSS.',
    category: 'HTML/CSS',
    tags: ['HTML', 'CSS', 'Responsive'],
    repoUrl: GH,
    order: 3,
  },
  {
    title: 'YouTube Clone',
    description: 'A front-end recreation of the YouTube home layout using flexbox and grid.',
    category: 'HTML/CSS',
    tags: ['HTML', 'CSS', 'Flexbox'],
    repoUrl: GH,
    order: 4,
  },
  {
    title: 'Tic Tac Toe',
    description: 'A two-player browser game with win and draw detection, written in vanilla JavaScript.',
    category: 'JavaScript',
    tags: ['JavaScript', 'DOM', 'Game logic'],
    repoUrl: GH,
    order: 5,
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Play against the computer in this score-tracking game, built with vanilla JavaScript.',
    category: 'JavaScript',
    tags: ['JavaScript', 'DOM', 'Game logic'],
    repoUrl: GH,
    order: 6,
  },
  {
    title: 'Bank Management System',
    description: 'A console application in C++ using OOP: accounts, deposits, withdrawals and balance checks.',
    category: 'C++',
    tags: ['C++', 'OOP', 'File I/O'],
    repoUrl: GH,
    order: 7,
  },
  {
    title: 'Digital Clock',
    description: 'A C++ program that renders a live-updating digital clock in the terminal.',
    category: 'C++',
    tags: ['C++', 'Time'],
    repoUrl: GH,
    order: 8,
  },
];
