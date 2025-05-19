const expCards = [
  {
    review:
      "Khaled consistently brought innovative frontend solutions using React and Tailwind, which greatly enhanced our project's performance and user satisfaction. His proactive communication and pixel-perfect implementations were key to our success.",
    imgPath: '/images/react.png',
    logoPath: '/images/react.png',
    title: 'Frontend Developer (React)',
    date: 'November 2023 - February 2024',
    responsibilities: [
      'Developed dynamic user interfaces with React.js and Tailwind CSS.',
      'Implemented reusable UI components to speed up development cycles.',
      'Worked closely with the design and QA teams to ensure smooth delivery.',
    ],
  },
  {
    review:
      'Khaled was instrumental in building and scaling our full-stack MERN application. His ability to manage both frontend and backend tasks, along with his problem-solving mindset, made him a valuable team player.',
    imgPath: '/images/mern.png',
    logoPath: '/images/mern.png',
    title: 'Full Stack Developer (MERN)',
    date: 'February 2024 - June 2024',
    responsibilities: [
      'Built RESTful APIs with Express.js and MongoDB for user management and product listings.',
      'Secured routes and endpoints using JWT authentication and bcrypt password hashing.',
      'Integrated Stripe for payment and implemented admin panel functionalities.',
    ],
  },
  {
    review:
      'Khaled played a vital role in building our tourism project. His clear understanding of UI/UX and component structure helped us deliver a fast and mobile-friendly web experience.',
    imgPath: '/images/sa-tourism.png',
    logoPath: '/images/sa-tourism.png',
    title: 'Project Developer – SA Tourism',
    date: 'June 2024 - October 2024',
    responsibilities: [
      'Designed and developed a tourism-focused web application using React and Tailwind CSS.',
      'Implemented responsive design for mobile-first experience.',
    ],
  },
  {
    review:
      'Khaled’s work on the BasaFinder platform showcased his ability to blend technical skill with real-world problem solving. His attention to security, user experience, and role-based features added tremendous value to the project.',
    imgPath: '/images/basafinder-logo.png',
    logoPath: '/images/basafinder-logo.png',
    title: 'Full Stack Developer – BasaFinder',
    date: 'October 2024 - January 2025',
    responsibilities: [
      'Built a role-based rental platform using Nextjs and MongoDB.',
      'Implemented authentication and authorization using bcrypt and JWT.',
      'Created user dashboards for house owners and renters with protected routes.',
      'Integrated secure password hashing and route protection middleware.',
      'Handled error states and forced logout.',
    ],
  },
  {
    review:
      'Your work on ThinkGreenly demonstrated excellent full-stack development skills with a focus on sustainability. The platform effectively combines environmental awareness with practical tools, featuring carbon footprint calculation and eco-friendly recommendations that deliver real value to users.',
    imgPath: '/images/thinkgreenly-logo.png',
    logoPath: '/images/thinkgreenly-logo.png',
    title: 'Full Stack Developer – ThinkGreenly',
    date: 'January 2025 - May 2025',
    responsibilities: [
      'Developed an eco-conscious platform using Next.js and Firebase/MongoDB',
      'Implemented carbon footprint calculator with personalized tracking',
      'Created educational resources and sustainability recommendation engine',
      'Designed intuitive user dashboards with progress visualization',
      'Integrated secure authentication and data protection measures',
      'Optimized performance for seamless user experience across devices',
      'Collaborated in a team environment and managed Git-based deployments.',
    ],
  },
];

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Khaled. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Khaled was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Khaled was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Khaled's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Khaled is the ideal partner.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Khaled was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Khaled’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Khaled was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png',
  },
];

const myPortfolioURL: string = process.env.NEXT_PUBLIC_CLIENT_URL as string;

const myEmail: string = process.env.NEXT_PUBLIC_EMAIL as string;
const myGitHubURL: string = process.env.NEXT_PUBLIC_GITHUB_URL as string;
const myLinkedinURL: string = process.env.NEXT_PUBLIC_LINKEDIN_URL as string;
const myFacebookURL: string = process.env.NEXT_PUBLIC_FACEBOOK_URL as string;
const myWhatsAppURL: string = process.env.NEXT_PUBLIC_WHATSAPP_URL as string;
const myXURL: string = process.env.NEXT_PUBLIC_X_URL as string;
const myInstagramURL: string = process.env.NEXT_PUBLIC_INSTAGRAM_URL as string;

export {
  expCards,
  testimonials,
  myPortfolioURL,
  myEmail,
  myGitHubURL,
  myLinkedinURL,
  myFacebookURL,
  myWhatsAppURL,
  myXURL,
  myInstagramURL,
};
