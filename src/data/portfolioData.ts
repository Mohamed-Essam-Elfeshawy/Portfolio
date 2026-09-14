export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Next.js & React' | 'Commercial & Enterprise' | 'Full-Stack & APIs' | 'UI & Interactive';
  description: string;
  fullDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  highlights: string[];
  stars?: number;
  year: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    iconUrl?: string;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'Education' | 'Experience' | 'Certification';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
}

export const PERSONAL_INFO = {
  name: 'Mohamed Essam Elfeshawy',
  nameAr: 'محمد عصام الفيشاوي',
  title: 'Senior-Grade Frontend Developer',
  subtitle: 'Specialized in Next.js, React.js, TypeScript & Modern UI/UX',
  bio: `Passionate Frontend Developer specializing in ReactJS, Next.js, TypeScript, and Redux Toolkit. I build high-performance, responsive, and aesthetically stunning web applications with clean, maintainable architecture.

Graduated in 2023 with a Bachelor's degree in Information Technology from Mansoura University (Faculty of Computers and Information), followed by an intensive 4-month Frontend Track at ITI (Information Technology Institute). With deep hands-on expertise across real-world commercial platforms, e-commerce systems, and dynamic enterprise portals, I transform complex ideas into intuitive digital experiences.`,
  shortBio: 'Crafting responsive, high-performance, and visually captivating web applications with Next.js, React, TypeScript, and modern design systems.',
  location: 'El-Mahalla El-Kubra, Gharbia, Egypt',
  email: 'mohamedelfeshawy43@gmail.com',
  phone: '+20 102 748 5963',
  avatar: '/images/profile.jpg',
  availableForHire: true,
  yearsOfExperience: '2+',
  projectsCompleted: '15+',
  githubUsername: 'Mohamed-Essam-Elfeshawy',
  githubProfile: 'https://github.com/Mohamed-Essam-Elfeshawy',
  linkedinProfile: 'https://www.linkedin.com/in/mohamed-elfeshawy-45a098246/',
  twitterProfile: 'https://x.com/AnaMoha29244923',
  whatsappUrl: 'https://wa.me/201027485963',
  resumeUrl: '#getInTouch',
};

export const STATS = [
  { label: 'Years Experience', value: '2+', suffix: '' },
  { label: 'Completed Projects', value: '15+', suffix: '' },
  { label: 'GitHub Repositories', value: '25+', suffix: '' },
  { label: 'Client Satisfaction', value: '100%', suffix: '' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Core & Frameworks',
    icon: 'Code2',
    skills: [
      { name: 'Next.js (App Router)', level: 95, badge: 'Expert' },
      { name: 'React.js', level: 95, badge: 'Expert' },
      { name: 'TypeScript', level: 90, badge: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 98, badge: 'Master' },
      { name: 'HTML5 & Semantic Web', level: 98, badge: 'Master' },
      { name: 'PWA (Progressive Web Apps)', level: 85, badge: 'Proficient' },
    ],
  },
  {
    category: 'State & Data Architecture',
    icon: 'Database',
    skills: [
      { name: 'Redux Toolkit (RTK)', level: 92, badge: 'Expert' },
      { name: 'RTK Query & Caching', level: 90, badge: 'Advanced' },
      { name: 'Context API & Hooks', level: 95, badge: 'Master' },
      { name: 'REST APIs & Fetch/Axios', level: 95, badge: 'Master' },
      { name: 'JSON Server & Mock APIs', level: 90, badge: 'Advanced' },
    ],
  },
  {
    category: 'Styling & UI Systems',
    icon: 'Palette',
    skills: [
      { name: 'Tailwind CSS', level: 95, badge: 'Expert' },
      { name: 'Bootstrap 5', level: 95, badge: 'Expert' },
      { name: 'CSS3 / Sass / Animations', level: 95, badge: 'Master' },
      { name: 'Material UI (MUI)', level: 88, badge: 'Advanced' },
      { name: 'Responsive UI/UX Design', level: 98, badge: 'Master' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub Workflow', level: 92, badge: 'Advanced' },
      { name: 'Vercel & Netlify Deployment', level: 95, badge: 'Expert' },
      { name: 'VS Code & Chrome DevTools', level: 95, badge: 'Expert' },
      { name: 'Performance & SEO Optimization', level: 90, badge: 'Advanced' },
      { name: 'Postman & API Testing', level: 90, badge: 'Advanced' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'freshcart-v2',
    title: 'FreshCart E-Commerce V2',
    subtitle: 'Next.js 14 App Router, Redux Toolkit & TypeScript Storefront',
    category: 'Next.js & React',
    description: 'A full-featured modern e-commerce platform built with Next.js App Router, Redux Toolkit, TypeScript, and Tailwind CSS. Features dynamic cart, product search, categories, and checkout.',
    fullDescription: 'FreshCart V2 is an enterprise-ready modern e-commerce application designed to deliver instant page loads and seamless shopping experiences. Developed with Next.js App Router, it utilizes server components for optimized SEO and fast initial rendering, combined with Redux Toolkit for seamless client-side state management across product filtering, real-time cart mutations, wishlist handling, and authenticated checkouts.',
    technologies: ['Next.js', 'TypeScript', 'Redux Toolkit', 'TailwindCSS', 'REST API', 'Vercel'],
    liveUrl: 'https://fresh-cart-v2-tau.vercel.app',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/FreshCart-V2',
    image: '/images/work-1.jpg',
    featured: true,
    highlights: [
      'Next.js App Router architecture with Server and Client components',
      'Global shopping cart & wishlist management via Redux Toolkit',
      'Dynamic category browsing, price filters, and instant keyword search',
      'Fully responsive, mobile-first design with smooth micro-interactions',
    ],
    year: '2026',
  },
  {
    id: 'tablya-app',
    title: 'TABLYA Homemade Food Marketplace',
    subtitle: 'Connecting home chefs with authentic food lovers',
    category: 'Next.js & React',
    description: 'A comprehensive web platform connecting home chefs with customers looking for fresh, authentic, and affordable homemade food with menu management and real-time ordering.',
    fullDescription: 'TABLYA empowers local home cooking businesses by providing home chefs with a dedicated digital storefront. Customers can explore verified homemade meal listings, custom dietary tags, chef stories, daily specials, and order fresh food directly. The application features intuitive navigation, smooth transitions, and a clean culinary design theme.',
    technologies: ['React.js', 'JavaScript', 'TailwindCSS', 'REST APIs', 'Vercel'],
    liveUrl: 'https://tablya-app-43jt.vercel.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/TABLYA-APP',
    image: '/images/hero-img.png',
    featured: true,
    highlights: [
      'Chef storefront profiles with interactive dish portfolios and pricing',
      'Category filtering for traditional, diet, and specialty homemade dishes',
      'Real-time customer reviews and chef ratings system',
      'Direct order coordination and contact integration',
    ],
    year: '2026',
  },
  {
    id: 'fuji-ksa',
    title: 'FUJI Elevators & Escalators KSA',
    subtitle: 'Enterprise corporate web platform for FUJI Elevators Saudi Arabia',
    category: 'Commercial & Enterprise',
    description: 'A high-end commercial corporate website for FUJI Elevators in Saudi Arabia. Features product catalogs, technical engineering specs, portfolio showcase, and quotation forms.',
    fullDescription: 'Developed as a high-end corporate digital presence for FUJI Elevators & Escalators in KSA. The platform showcases luxury passenger elevators, panoramic lifts, industrial freight systems, and moving walkways. Includes interactive technical specification sheets, project gallery of completed towers across the Gulf, and quick quotation workflows.',
    technologies: ['JavaScript', 'Modern CSS3', 'Bootstrap 5', 'SEO Optimization', 'Responsive Design'],
    liveUrl: 'https://www.fujifd-ksa.com/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/FUJI',
    image: '/images/work-3.jpg',
    featured: true,
    highlights: [
      'Live commercial production website serving corporate KSA clients',
      'Bilingual architecture readiness and ultra-fast page speed index',
      'Product technical spec downloads and interactive engineering galleries',
      'Tailored corporate inquiry and instant quote request funnel',
    ],
    year: '2025 - 2026',
  },
  {
    id: 'allura-store',
    title: 'Allura Cosmetics & Beauty Store',
    subtitle: 'Luxury beauty and skincare e-commerce experience',
    category: 'Commercial & Enterprise',
    description: 'A visually stunning e-commerce boutique for luxury skincare, fragrance, and cosmetics featuring glassmorphic UI, product shade pickers, and fluid animations.',
    fullDescription: 'Allura is crafted for high-end beauty and cosmetics retail, delivering an editorial, magazine-style web presentation. Features smooth micro-animations, product zoom, curated beauty collections, responsive carousels, and an ultra-clean aesthetic.',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Vercel', 'Glassmorphism UI'],
    liveUrl: 'https://azzrk-allura.vercel.app',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/Allura',
    image: '/images/work-4.jpg',
    featured: true,
    highlights: [
      'Luxury beauty aesthetic with subtle glassmorphism and gold accents',
      'Responsive product carousel with fluid touch gestures',
      'Interactive shade selector and ingredient breakdown tabs',
      'High-performance Vercel edge deployment',
    ],
    year: '2025',
  },
  {
    id: 'hr-system',
    title: 'Enterprise HR & Attendance Portal',
    subtitle: 'Comprehensive employee management, attendance & payroll portal',
    category: 'Next.js & React',
    description: 'An advanced HR management system featuring security gate attendance, employee leave/permission requests, manager & HR hierarchy approval workflows, and task salary impacts.',
    fullDescription: 'A robust enterprise workflow tool that bridges operational security, employee self-service, management oversight, and HR payroll computation. Security guards log time-stamped gate entries; employees submit vacation or excuse permissions; managers review requests with approval chains; and HR computes salary deductions/bonuses dynamically.',
    technologies: ['JavaScript', 'Bootstrap 5', 'State Management', 'Role-Based UI', 'Vercel'],
    liveUrl: 'https://hr-system-peach.vercel.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/HR-System',
    image: '/images/work-2.jpg',
    featured: true,
    highlights: [
      'Multi-role access (Security Guard, Employee, Line Manager, HR Admin)',
      'Time-clock attendance capturing with automated late penalty computation',
      'Multi-step permission request approval chain',
      'Real-time task tracking with dynamic financial compensation adjustments',
    ],
    year: '2025',
  },
  {
    id: 'post-crud-app',
    title: 'Post Management & Authentication Portal',
    subtitle: 'Type-safe React & Redux Toolkit Query full-stack app',
    category: 'Full-Stack & APIs',
    description: 'A full-stack CRUD application built with React, TypeScript, RTK Query, and Material UI with complete JWT authentication and mock REST server architecture.',
    fullDescription: 'A modern full-stack implementation demonstrating robust API integration and state management patterns. Built with TypeScript for strict type safety, Redux Toolkit Query for automated caching and optimistic UI updates, and Material UI for a polished user experience.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit Query', 'Material UI', 'REST API', 'JSON Server'],
    liveUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/post-crud-app',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/post-crud-app',
    image: '/images/post-1.jpg',
    featured: false,
    highlights: [
      'Type-safe data queries and mutations using RTK Query',
      'JWT token storage, refresh interceptors, and protected private routes',
      'Custom Material UI theme with responsive layout and pagination',
      'Optimistic updates for instant user feedback on CRUD operations',
    ],
    year: '2025',
  },
  {
    id: 'smart-bankist',
    title: 'Smart Bankist Digital Banking Platform',
    subtitle: 'Interactive simulation of modern online banking',
    category: 'UI & Interactive',
    description: 'A responsive online banking portal simulation with account authentication, live money transfers, loan approval simulations, dynamic transaction history, and currency localization.',
    fullDescription: 'Smart Bankist simulates a real-world digital banking dashboard. It features pin-based account login, internationalized transaction logs, simulated peer-to-peer transfers, automated loan interest checks, auto-logout security timers, and sticky navigation with smooth scrolling.',
    technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'DOM API', 'Netlify'],
    liveUrl: 'https://smart-bankist.netlify.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/Bankist__website',
    image: '/images/banking.jpg',
    featured: true,
    highlights: [
      'Real-time transaction computation, deposits, withdrawals, and balance charts',
      'Simulated peer-to-peer money transfers and loan requests with conditions',
      'Interactive date & currency formatting using native Intl API',
      'Countdown inactivity logout timer for enhanced security simulation',
    ],
    year: '2024 - 2025',
  },
  {
    id: 'product-card-3d',
    title: 'Interactive 3D Product Showcase',
    subtitle: 'TypeScript & Modern CSS Perspective Component',
    category: 'UI & Interactive',
    description: 'A modern interactive product card component featuring 3D hover tilt perspective, dynamic colorway switching, size pickers, and smooth checkout triggers.',
    fullDescription: 'Built with TypeScript and cutting-edge CSS transforms, this component provides an engaging e-commerce card experience with mouse-tracking 3D tilt, dynamic asset swap on color selection, and smooth responsive animations.',
    technologies: ['TypeScript', 'CSS3 Animations', 'Modern UI', 'Vercel'],
    liveUrl: 'https://product-card-qw8f.vercel.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/product-card',
    image: '/images/work-6.jpg',
    featured: false,
    highlights: [
      'Dynamic mouse-tracking 3D tilt and specular lighting reflection',
      'Real-time color switcher with smooth product image transition',
      'Size picker with stock status validation',
      'Lightweight, zero-dependency TypeScript implementation',
    ],
    year: '2025',
  },
  {
    id: 'mealify-restaurant',
    title: 'Mealify Gourmet Restaurant',
    subtitle: 'Modern culinary showcase with online booking',
    category: 'UI & Interactive',
    description: 'A responsive restaurant website built with clean HTML5, CSS3, and Bootstrap, featuring interactive food menus, chef introductions, and online table reservations.',
    fullDescription: 'Mealify delivers an appetizing digital presentation for gourmet restaurants. Includes categorized food menus, high-definition dish galleries, interactive chef cards, customer reviews, and a reservation booking form.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Netlify'],
    liveUrl: 'https://mealify-site.netlify.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/patoresturantHTMLCSS',
    image: '/images/hero-img.png',
    featured: false,
    highlights: [
      'Categorized culinary menus with ingredient breakdowns and pricing',
      'Online table reservation form with instant validation',
      'Smooth scroll navigation and dynamic dark/light mode accents',
      '100% responsive across desktop, tablet, and mobile screens',
    ],
    year: '2024',
  },
  {
    id: 'daniels-portfolio',
    title: 'Daniels Dynamic Portfolio Showcase',
    subtitle: 'Interactive developer portfolio with filtered gallery',
    category: 'UI & Interactive',
    description: 'A responsive portfolio template built with Bootstrap and JavaScript, featuring isotope project filters, animated milestone counters, and testimonials carousel.',
    fullDescription: 'Daniels is a clean developer template focusing on personal branding, skill demonstration, filtered project showcases, customer reviews, and direct lead generation.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Netlify'],
    liveUrl: 'https://daniels-site.netlify.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/Daniels',
    image: '/images/work-5.jpg',
    featured: false,
    highlights: [
      'Interactive isotope portfolio category filter',
      'Animated statistics counter upon scroll detection',
      'Client testimonial slider with custom pagination',
      'Contact form with floating labels and validation',
    ],
    year: '2024',
  },
  {
    id: 'devfolio-showcase',
    title: 'DevFolio Developer Theme',
    subtitle: 'Interactive skill bars, blog and portfolio showcase',
    category: 'UI & Interactive',
    description: 'A dynamic portfolio featuring typewriter hero text, animated skill progress meters, portfolio preview modal, and client review carousels.',
    fullDescription: 'A classic responsive developer theme showcasing hands-on JavaScript DOM manipulation, custom CSS keyframe animations, and clean modular layout.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Netlify'],
    liveUrl: 'https://devfoplio.netlify.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/Devfolio',
    image: '/images/post-2.jpg',
    featured: false,
    highlights: [
      'Animated typewriter header effect',
      'Skill progress bars with on-scroll activation',
      'Service offering cards with custom hover depth',
      'Cross-browser tested and optimized for speed',
    ],
    year: '2024',
  },
  {
    id: 'petcare-system',
    title: 'PetCare Animal Health & Clinic',
    subtitle: 'Veterinary services & pet adoption management',
    category: 'Full-Stack & APIs',
    description: 'A specialized platform for veterinary clinics and pet adoption centers, featuring medical appointment scheduling, pet health cards, and adoption profiles.',
    fullDescription: 'PetCare provides pet owners and clinic staff with an intuitive interface to manage pet health records, schedule vet check-ups, view vaccination reminders, and browse adoptable animals.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
    liveUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/petcare',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/petcare',
    image: '/images/post-3.jpg',
    featured: false,
    highlights: [
      'Pet medical record and vaccination tracking interface',
      'Vet appointment booking form with time slots',
      'Pet adoption catalog with breed and age filters',
      'Emergency helpline banner and direct WhatsApp reachout',
    ],
    year: '2023 - 2024',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 - Present',
    title: 'Frontend Web Developer',
    organization: 'Freelance & Enterprise Projects',
    location: 'El-Mahalla El-Kubra / Remote, Egypt',
    type: 'Experience',
    description: 'Building modern responsive web applications and commercial platforms for clients in Egypt, Saudi Arabia (KSA), and globally using Next.js, React, TypeScript, and Redux.',
    achievements: [
      'Developed FUJI Elevators corporate platform for KSA with high SEO ranking',
      'Engineered FreshCart-V2 full e-commerce store with Next.js App Router and RTK',
      'Created enterprise HR attendance portal with dynamic salary impact tracking',
      'Implemented clean, modular, and reusable component architectures',
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'TailwindCSS', 'REST APIs'],
  },
  {
    period: '2023',
    title: 'Front-End Web Development Intensive Track',
    organization: 'Information Technology Institute (ITI)',
    location: 'Mansoura Branch, Egypt',
    type: 'Certification',
    description: 'Completed an intensive 4-month professional track focusing on modern frontend technologies, software engineering best practices, and team project delivery.',
    achievements: [
      'Mastered advanced JavaScript (ES6+), React.js, State Management, and PWA',
      'Built production-grade real-world graduation projects adhering to industry standards',
      'Collaborated in agile team environments using Git/GitHub workflows',
    ],
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'PWA', 'Git'],
  },
  {
    period: '2019 - 2023',
    title: "Bachelor's Degree in Information Technology",
    organization: 'Mansoura University, Faculty of Computers and Information',
    location: 'Mansoura, Egypt',
    type: 'Education',
    description: 'Graduated with a comprehensive computer science and IT foundation covering data structures, algorithms, web technologies, database systems, and software engineering principles.',
    achievements: [
      'Specialized in Information Technology and Modern Web Systems',
      'Built multiple academic and practical software projects',
      'Strong analytical and algorithmic problem-solving foundation',
    ],
    skills: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'OOP'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mohamed Adel',
    role: 'Project Manager',
    company: 'Tech Solutions Hub',
    avatar: '/images/2.jpg',
    rating: 5,
    content: 'Mohamed is an exceptional frontend developer. His code is clean, well-structured, and he delivered our e-commerce project ahead of schedule with remarkable attention to detail and animations.',
  },
  {
    name: 'Samy Mansour',
    role: 'Product Lead',
    company: 'Elevator Systems Group',
    avatar: '/images/testimonial-2.jpg',
    rating: 5,
    content: 'Working with Mohamed on the FUJI Elevators platform was a fantastic experience. He transformed our requirements into a sleek, fast, and modern corporate presence that impressed our corporate clients in KSA.',
  },
  {
    name: 'Jomana Khaled',
    role: 'UI/UX Designer',
    company: 'Creative Studio',
    avatar: '/images/testimonial-4.jpg',
    rating: 5,
    content: 'Mohamed has an incredible eye for UI details. He translated our Figma designs into pixel-perfect React and Tailwind code with smooth micro-interactions that exceeded our team expectations.',
  },
  {
    name: 'Youssef Hassan',
    role: 'CTO & Co-Founder',
    company: 'FoodTech Ventures',
    avatar: '/images/hero-bg.jpg',
    rating: 5,
    content: 'Punctual, professional, and deeply skilled in Next.js and Redux. Mohamed solved complex state handling in our platform effortlessly. Highly recommended for any serious frontend project!',
  },
];

export const PARTNERS_LOGOS = [
  { name: 'ClickUp', image: '/images/clickup logo 1.png' },
  { name: 'Dropbox', image: '/images/dropbox_blue 1.png' },
  { name: 'Parmayan', image: '/images/parmayan.png' },
  { name: 'Elevation', image: '/images/ele.png' },
  { name: 'Stripe', image: '/images/stripe.png' },
];
