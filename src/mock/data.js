import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Conflux - Web & Mobile App Development', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description:
    'We are a team of individuals that brings together talents from Product Development, Software Engineering and UI/UX design.', // e.g: Welcome to my website
  url: 'https://conflux.tech',
  ogImage: 'src/images/webandmobiledevelopment.png',
  keywords: [
    'conflux',
    'startup',
    'web development',
    'mobile development',
    'web app development',
    'mobile app development',
    'ui/ux design',
    'mobile app development in thailand',
    'web development in thailand',
    'startup in thailand',
  ],
};

// HERO DATA
export const heroData = {
  title: '',
  cta: 'Learn more',
};

// ABOUT DATA - WHO ARE WE
export const aboutData = {
  paragraphOne:
    'We are a team of individuals that brings together talents from Product Development, Software Engineering and UI/UX design.',
  paragraphTwo:
    'Our mission is to make products that will bring delightful experiences to our users and apps that deliver revenue.',
};

// ABOUT2 DATA - WHO WE WORK WITH
export const about2Data = {
  title: 'We work with different business sizes',
  paragraphOne: '“Conflux”, is another term for confluence, which means “the process of merging”.',
  paragraphTwo:
    'We are here to work with people and businesses from different sizes with big ideas to build beautiful products together and bring them to consumers.',
  businesses: [
    {
      id: uuidv4(),
      title: 'For Startups and Small Businesses',
      subtitle: 'design and development teams',
      description:
        'From building minimum-viable-products to managing existing products, we have created product teams and managed them within Conflux. We work with companies of different stages and together we build products and launch them.',
    },
    {
      id: uuidv4(),
      title: 'Enterprise Solutions',
      subtitle: 'digital transformation and solutions',
      description:
        'We provide alternative software solutions for enterprises. Meticulously custom-built to fit the needs of each company.',
    },
    {
      id: uuidv4(),
      title: 'Technical Co-Founding',
      subtitle: 'end-to-end technical service',
      description:
        'From technical architecture, training, design, review, hiring, forming cultures, and setting up processes --  we can provide end-to-end analysis of your business and products. Leave the technology to us and focus on the important aspects of your business instead.',
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let us help you bring your ideas to life',
  btn: '',
  email: 'info@conflux.tech',
};

// SERVICES DATA
export const servicesData = [
  {
    title: 'State-of-the-art web applications',
    description:
      'We are experts at building solid, reliable, and fast web applications from the ground up. We’re industry agnostic.',
    tools: [
      {
        name: 'Go',
        description:
          'Go is an extremely efficient language for developers to write high peforming implementations. It is best used for micro-service oriented architectures or high-performance applications.',
      },
      {
        name: 'NodeJS',
        description:
          'NodeJS are loved by developers for its development speed. It is a great choice for building Minimum Viable Products (MVP) and a fast "Go to Market" applications',
      },
      {
        name: 'ReactJS',
        description:
          'ReactJS is a proven framework to build remarkable and beatifully crafted user interfaces for your web applications.',
      },
    ],
  },
  {
    title: 'Delightful iOS and Android apps',
    description: 'We design and build beautiful native mobile apps for the best user experience.',
    tools: [
      {
        name: 'Swift',
        description:
          'Swift is the modern way to build iOS applications. It enables developers to write code faster. It is safe, efficient, and easy to maintain. Swift also has a great community and is being improved at a rapid pace.',
      },
      {
        name: 'Kotlin',
        description:
          'Kotlin is great for developing Android applications. It provides a lot of features allowing for clean and concise code while also providing a high level of performance and security.',
      },
      {
        name: 'Flutter',
        description:
          'We are using Flutter for building natively compiled applications for mobile. With a single codebase, we can easily compile the application for both Android and iOS platforms.',
      },
    ],
  },
  {
    title: 'R&D and Consulting',
    description:
      'We are an an engineering company; we love new tech. Our R&D "ConNEXT" constantly gets us ready for the newest and most exciting challenges.',
    tools: [],
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'twitter',
      url: 'https://twitter.com/conflux___',
    },
    {
      id: uuidv4(),
      name: 'facebook',
      url: 'https://facebook.com/conflux-tech',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/conflux-tech',
    },
    {
      id: uuidv4(),
      name: 'medium',
      url: 'https://medium.com/conflux-tech',
    },
  ],
};
