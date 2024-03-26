import self from '../img/self.jpeg';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];

export const info = {
  firstName: 'Kashyap',
  lastName: 'Vishnudas',
  initials: 'kashyap.v',
  position: 'a Software Developer',
  email: 'kashyapvishnudas@gmail.com',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '💼',
      text: 'Software Engineer at Edwisely',
    },
    {
      emoji: '📧',
      text: 'kashyapvishnudas@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://facebook.com',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://www.instagram.com/kashyapvishnudas?igsh=MXJsc3p2djNtaXc5ZQ%3D%3D&utm_source=qr',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/Vkashyap1729',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/kashyap-vishnudas-317529237/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Kashyap Vishnudas, a passionate tech enthusiast on a mission to leave a positive mark in the world of technology. With a strong foundation in Java, Python, C++, and expertise in data structures, I thrive on solving complex problems and crafting elegant solutions. My journey in tech has been fueled by a relentless curiosity and a drive to learn and adapt to emerging technologies., and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'javascript',
      'python',
      'react',
      'flask',
      'django',
      'sql',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'figma',
    ],
    exposedTo: ['nodejs', 'Express', 'Dockers'],
  },
  hobbies: [
    {
      label: 'gym',
      emoji: '💪🏻',
    },
    {
      label: 'travel',
      emoji: '🧭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'badminton',
      emoji: '🎾',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Portfolio website',
      live: 'https://master--kashyapvishnudas.netlify.app/',
      source: 'https://github.com/Vkashyap1729/my_portfolio_live.git',
      image: mock1,
    },
    {
      title: 'Blogful: Blog website',
      live: 'https://vkashyap1729.github.io/BolgFul/loading.html',
      source: 'https://github.com/Vkashyap1729/BolgFul.git',
      image: mock2,
    },
    {
      title: 'College Student Management',
      requirements: 'username : student@edwisely.com password : edwisely@2024',
      live: 'https://edwisely2-0.netlify.app/',
      source: 'https://github.com/Vkashyap1729/Edwisely2.0.git',
      image: mock3,
    },
    {
      title: 'Periodic Table',
      live: 'https://kashyap-vishnudas-periodictable.netlify.app/ ',
      source: 'https://github.com/Vkashyap1729/assignment-1.git',
      image: mock4,
    },
    {
      title: 'Project 5',
      live: 'https://edwisely2-0.netlify.app/',
      source: 'https://github.com/Vkashyap1729/Edwisely2.0.git',
      image: mock5,
    },
  ],
  contact: {
    header:
      'Thank you for taking the time to view my portfolio! If you have any inquiries, collaboration proposals, or just want to say hello, feel free to reach out to me using the information below:',
    footer:
      'I aim to respond to all messages within 24 hours. Looking forward to hearing from you!',
  },
};
