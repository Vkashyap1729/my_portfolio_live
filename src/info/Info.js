import self from '../img/self.jpeg';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Kashyap',
  lastName: 'Vishnudas',
  initials: 'kashyap.v', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'based in the India',
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
};
