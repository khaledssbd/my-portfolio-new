import { Metadata } from 'next';
import { myPortfolioURL } from '../constants';
import { IBlog } from '@/types';

// mainKeywords
const mainKeywords: string[] = [
  'Next.js',
  'React.js',
  'Redux',
  'Prisma',
  'PostgreSQL',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Shadcn',
  'Ant Design',
  'DaisyUI',
  'Mongoose',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'HTML5',
  'CSS3',
  'Git',
  'GitHub',
  'Full-Stack Developer',
  'Fullstack Developer',
  'Frontend Developer',
  'Backend Developer',
  'MERN Stack Developer',
  'React Developer',
  'Typescript Developer',
  'Javascript Developer',
  'Software Developer',
  'Web Developer',
  'Responsive Web Design',
  'REST API Integration',
];

// mainLayoutMetadata
export const mainLayoutMetadata: Metadata = {
  metadataBase: new URL(myPortfolioURL), // must use here
  title: {
    default: 'Khaled Siddique',
    template: '%s | Khaled Siddique',
  },
  description:
    'Khaled Siddique, a Full-Stack Developer passionate about building responsive, user-friendly web applications. I specialize in crafting fast and modern interfaces using Next.js React.js, Redux, Prisma, PostgreSQL, Mongoose, Node.js, Express.js, MongoDB, CSS, Tailwind CSS, Shadcn, Ant Design, and various tailwindCSS based UI. Get your next level web development service from here.',

  keywords: mainKeywords, // must use separate Array field on DB for keywords
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Get service in Khaled Siddique',
    description:
      'Looking for your next level website? 🎯 Khaled Siddique makes it easy to develop your website in stress-free. Start your journey with us today!',
    url: myPortfolioURL,
    siteName: 'Khaled Siddique',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Khaled Siddique Preview Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get service in Khaled Siddique',
    description:
      'Get smart websites in seconds with Khaled Siddique! Find interiactive and fast responsive websites. Your next website is just a few clicks away.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow', // ডিফল্ট ইনডেক্সিং for all
};

// homePageMetadata
export const homePageMetadata: Metadata = {
  metadataBase: new URL(myPortfolioURL),
  title: 'Khaled Siddique - Find best web development services!',
  description:
    'Get smart websites in seconds with Khaled Siddique! Find interiactive and fast responsive websites. Your next website is just a few clicks away!',
  keywords: mainKeywords, // Including main keywords from original list

  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Khaled Siddique - Find best web development services!',
    description:
      'Get smart websites in seconds with Khaled Siddique! Find interiactive and fast responsive websites. Your next website is just a few clicks away!',
    url: myPortfolioURL,
    siteName: 'Khaled Siddique',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Khaled Siddique Home Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaled Siddique - Trusted web developer',
    description:
      'Get smart websites in seconds with Khaled Siddique! Find interiactive and fast responsive websites. Your next website is just a few clicks away!',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

// blogsPageMetadata
export const blogsPageMetadata: Metadata = {
  metadataBase: new URL(myPortfolioURL),
  title: 'Blogs',
  description:
    'Looking for your next level website? 🎯 Khaled Siddique makes it easy to develop your website in stress-free. Start your journey with us today!',
  keywords: mainKeywords,
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: 'Blogs in Khaled Siddique',
    description:
      'Looking for your next level website? 🎯 Khaled Siddique makes it easy to develop your website in stress-free. Start your journey with us today!',
    url: `${myPortfolioURL}/blogs`,
    siteName: 'Khaled Siddique',
    images: [
      {
        url: '/og-blogs-image.png', // You might want to have a custom image for the blogs page
        width: 1200,
        height: 630,
        alt: 'Khaled Siddique Website Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs in Khaled Siddique',
    description:
      'Looking for your next level website? 🎯 Khaled Siddique makes it easy to develop your website in stress-free. Start your journey with us today!',
    images: ['/og-blogs-image.png'],
  },
  robots: 'index, follow',
};

// blogDetailsMetaData
export const blogDetailsMetaData = (blog: IBlog): Metadata => ({
  title: blog?.title || 'Blog Details',
  // title: {
  //   absolute: blog?.title || 'Blog Details', // it will remove the default title given in main layout.js file
  // },
  description:
    blog?.content ||
    'Explore the best web development services from Khaled Siddique.',
  keywords:
    blog?.content.split(' ') ||
    'Khaled Siddique, blog, blog details, blogs, web development services', // must use separate Array field on DB for keywords
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }, // latest browser favicon
      { url: '/icon.png', type: 'image/png' }, // all browser icon
    ],
    apple: '/apple-icon.png', // apple browser icon
  },
  openGraph: {
    title: `${blog?.title} | Blog Details - Khaled Siddique`,
    description: blog?.content || 'Explore websites from Khaled Siddique.',
    url: `${myPortfolioURL}/blogs/${blog?._id}`,
    siteName: 'Khaled Siddique',
    images: blog.images?.length
      ? blog.images.map((image: string) => ({
          url: image,
          width: 1200,
          height: 630,
          alt: 'Blog Preview Image',
        }))
      : [
          {
            url: '/default-blog-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Blog Default Image',
          },
        ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${blog?.title} | Blog Details - Khaled Siddique`,
    description:
      blog?.content || 'Explore web development services from Khaled Siddique.',
    images: blog.images?.length
      ? blog.images.map((image: string) => ({
          url: image,
          width: 1200,
          height: 630,
          alt: 'Blog Preview Image',
        }))
      : [
          {
            url: '/default-blog-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Blog Default Image',
          },
        ],
  },
});

// notFoundPageMetadata
export const notFoundPageMetadata: Metadata = {
  metadataBase: new URL(myPortfolioURL),
  title: 'Page Not Found',
  description:
    'Oops! The page you are looking for does not exist. Explore best web development services and find your next website easily from Khaled Siddique.',
  keywords: [
    '404 page',
    'page not found',
    'Khaled Siddique 404',
    'missing page',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Page Not Found | Khaled Siddique',
    description:
      'The page you are trying to reach does not exist. Get your amazing websites from Khaled Siddique!',
    url: `${myPortfolioURL}/404`,
    siteName: 'Khaled Siddique',
    images: [
      {
        url: '/og-404-image.png',
        width: 1200,
        height: 630,
        alt: 'Khaled Siddique 404 Page Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found | Khaled Siddique',
    description:
      'Looks like you’re lost! The page you’re searching for is unavailable. Visit Khaled Siddique to find the best web development services!',
    images: ['/og-404-image.png'],
  },
  robots: 'noindex, nofollow',
};
