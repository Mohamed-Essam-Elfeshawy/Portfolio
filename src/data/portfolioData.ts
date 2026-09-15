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
  type: 'Experience' | 'Certification' | 'Education' | 'Training';
  description: string;
  achievements: string[];
  skills: string[];
  credentialUrl?: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: 'Mohamed Essam Elfeshawy',
  nameAr: 'محمد عصام الفيشاوي',
  title: 'Front-End React.js Developer',
  subtitle: 'Specializing in React.js, Next.js, E-Commerce (Salla & Zid) & Modern UI Architecture',
  bio: `Results-oriented Front-End Developer with 6+ months of professional experience at Azzrk, specializing in React.js and modern UI development. Experienced in building responsive, high-performance, and scalable web applications as well as customizing e-commerce platforms such as Salla and Zid. Skilled in REST API integration, state management (Redux Toolkit), performance optimization, and writing clean, maintainable, and reusable code.

Adept at working in Agile/Scrum environments using Jira and Sprint methodologies, collaborating with cross-functional teams, and delivering high-quality, user-centered web applications. Graduated with a "Very Good" grade from the Faculty of Computer & Information Sciences, Mansoura University (2023), completed a 6-month intensive Front-End track at ITI (Information Technology Institute), and certified as a Computer Science Instructor by iSchool.`,
  shortBio: 'Front-End React.js Developer with professional experience at Azzrk. Crafting responsive web apps & customizing e-commerce platforms (Salla & Zid) with React, Next.js, and TypeScript.',
  location: 'Cairo - Egypt',
  email: 'melfeshawy42@gmail.com',
  phone: '+201201029395',
  avatar: '/images/profile.jpg',
  availableForHire: true,
  yearsOfExperience: '1+',
  projectsCompleted: '15+',
  githubUsername: 'Mohamed-Essam-Elfeshawy',
  githubProfile: 'https://github.com/Mohamed-Essam-Elfeshawy',
  linkedinProfile: 'https://www.linkedin.com/in/mohamed-elfeshawy-45a098246/',
  whatsappUrl: 'https://wa.me/201201029395',
  resumeUrl: '/Mohamed_Essam_Elfeshawy_CV.pdf',
};

export const STATS = [
  { label: 'Professional & Track Exp', value: '1+', suffix: ' Yrs' },
  { label: 'Completed Projects', value: '15+', suffix: '' },
  { label: 'Licenses & Certifications', value: '6+', suffix: '' },
  { label: 'Agile & Team Satisfaction', value: '100%', suffix: '' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'E-Commerce & Platforms',
    icon: 'Palette',
    skills: [
      { name: 'Salla Platform Customization', level: 95, badge: 'Expert' },
      { name: 'Zid Platform Customization', level: 92, badge: 'Expert' },
      { name: 'RTL & Arabic Localization', level: 98, badge: 'Master' },
      { name: 'WhatsApp Ordering & Checkout', level: 95, badge: 'Master' },
      { name: 'Product Catalog & Cart Systems', level: 96, badge: 'Master' },
    ],
  },
  {
    category: 'Core & Frameworks',
    icon: 'Code2',
    skills: [
      { name: 'React.js', level: 96, badge: 'Expert' },
      { name: 'Next.js (App Router)', level: 92, badge: 'Expert' },
      { name: 'TypeScript', level: 90, badge: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 98, badge: 'Master' },
      { name: 'HTML5 & Semantic Web', level: 98, badge: 'Master' },
      { name: 'OOP (Object-Oriented Programming)', level: 92, badge: 'Expert' },
      { name: 'Vite & Build Tooling', level: 92, badge: 'Expert' },
      { name: 'jQuery', level: 88, badge: 'Proficient' },
    ],
  },
  {
    category: 'State & Data Architecture',
    icon: 'Database',
    skills: [
      { name: 'Redux & Redux Toolkit (RTK)', level: 94, badge: 'Expert' },
      { name: 'React Query / RTK Query', level: 90, badge: 'Advanced' },
      { name: 'REST APIs & Fetch/Axios', level: 96, badge: 'Master' },
      { name: 'Context API & Custom Hooks', level: 95, badge: 'Master' },
      { name: 'JSON & Mock Server', level: 92, badge: 'Expert' },
      { name: 'OpenAI API Integration', level: 88, badge: 'Advanced' },
    ],
  },
  {
    category: 'Styling & UI Systems',
    icon: 'Palette',
    skills: [
      { name: 'Tailwind CSS', level: 96, badge: 'Expert' },
      { name: 'Bootstrap 5', level: 95, badge: 'Expert' },
      { name: 'Material UI (MUI)', level: 90, badge: 'Advanced' },
      { name: 'Styled Components', level: 88, badge: 'Advanced' },
      { name: 'CSS3 / SASS / Keyframes', level: 95, badge: 'Master' },
      { name: 'Responsive UI/UX Design', level: 98, badge: 'Master' },
    ],
  },
  {
    category: 'Tools & Agile Workflow',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub Workflows', level: 94, badge: 'Expert' },
      { name: 'Jira & Sprint Methodology', level: 92, badge: 'Expert' },
      { name: 'Postman & API Testing', level: 92, badge: 'Advanced' },
      { name: 'Figma to Pixel-Perfect Code', level: 95, badge: 'Master' },
      { name: 'SEO & Performance Tuning', level: 90, badge: 'Advanced' },
      { name: 'Vercel & Netlify Deployment', level: 95, badge: 'Expert' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'tablya-app',
    title: 'Home Made Food Delivery App (TABLYA)',
    subtitle: 'ITI Graduation Project – Multi-portal Food Delivery System',
    category: 'Next.js & React',
    description: 'Developed and deployed Customer, Delivery, Chef, and Admin web applications for a comprehensive food delivery system, ensuring a unified and scalable user experience with real-time order tracking.',
    fullDescription: 'Built as the capstone graduation project for the Information Technology Institute (ITI) Front-End Track. TABLYA provides a 4-in-1 multi-portal ecosystem connecting home chefs, delivery drivers, hungry customers, and platform administrators. Built responsive, high-performance web interfaces and optimized client-side state management to support real-time order updates, secure synchronization, and accurate tracking.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'REST APIs', 'Vercel'],
    liveUrl: 'https://tablya-app-43jt.vercel.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/TABLYA-APP',
    image: '/images/tablya-cover.jpg',
    featured: true,
    highlights: [
      'Multi-portal architecture (Customer, Delivery, Chef & Admin portals)',
      'Optimized client-side state management for real-time tracking & updates',
      'Interactive dish catalog, custom dietary filters, and secure ordering workflow',
      '100% responsive layout with mobile-first UI and smooth transitions',
    ],
    year: '10/2025 – 12/2025',
  },
  {
    id: 'fuji-ksa',
    title: 'FUJI FD - Elevators E-Commerce Website',
    subtitle: 'Freelance Project – Commercial E-Commerce Platform for Saudi Elevator Enterprise',
    category: 'Commercial & Enterprise',
    description: 'Developed a responsive React.js web application for a Saudi elevator company. Built modern UI with Tailwind CSS, JavaScript (ES6+), and full Arabic RTL support. Integrated product catalog, shopping cart, and WhatsApp ordering system.',
    fullDescription: 'A high-conversion commercial web application built for FUJI Elevators in Saudi Arabia. Engineered with modern React.js, Tailwind CSS, and comprehensive Arabic Right-to-Left (RTL) support. Features interactive product catalogs with technical engineering specifications, responsive shopping cart, instant WhatsApp quotation and order routing, bilingual support (Arabic/English), dark/light mode toggle, and fast SEO performance.',
    technologies: ['React.js', 'TailwindCSS', 'JavaScript (ES6+)', 'RTL Support', 'WhatsApp Ordering', 'SEO Optimization'],
    liveUrl: 'https://www.fujifd-ksa.com/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/FUJI',
    image: '/images/work-3.jpg',
    featured: true,
    highlights: [
      'Production commercial platform serving corporate clients in Saudi Arabia (KSA)',
      'Integrated WhatsApp instant ordering and quick RFQ quotation system',
      'Full Arabic RTL layout with seamless English / Arabic bilingual readiness',
      'SEO-optimized metadata, ultra-fast Lighthouse score, and dark/light themes',
    ],
    year: '09/2025 – 10/2025',
  },
  {
    id: 'hr-system',
    title: 'Enterprise HR Management System',
    subtitle: 'Team Leader – Web-based HR & Payroll Platform with Multi-tier Role Access',
    category: 'Next.js & React',
    description: 'Developed a web-based HR platform to manage employees, attendance, payroll, and reports. Implemented role-based access for Admin, HR Manager, Employee, and Accountant dashboards with high security and clean UI.',
    fullDescription: 'Served as Team Leader for developing a comprehensive web-based HR management system. The platform streamlines employee records, daily attendance tracking, multi-tier leave/permission approval chains, automated payroll computation, and analytical reporting. Engineered role-based access control (Admin, HR Manager, Employee, Accountant), enhanced data security, workflow efficiency, and smooth scalable architecture.',
    technologies: ['JavaScript', 'Bootstrap 5', 'Role-Based Access', 'Payroll Engine', 'Vercel'],
    liveUrl: 'https://hr-system-peach.vercel.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/HR-System',
    image: '/images/work-2.jpg',
    featured: true,
    highlights: [
      'Team Leader directing frontend engineering, agile tasks, and sprint delivery',
      'Role-based access control (Admin, HR Manager, Employee, Accountant)',
      'Time-stamped attendance logging with automated late penalty & salary adjustments',
      'Clean modular architecture designed for high security and seamless user experience',
    ],
    year: '08/2025 – 09/2025',
  },
  {
    id: 'product-management-crud',
    title: 'Product Management CRUD Dashboard',
    subtitle: 'React, TypeScript & Vite Dashboard with Image Upload & Color Variations',
    category: 'Full-Stack & APIs',
    description: 'Built a full-featured dashboard using React, TypeScript, and Vite with complete CRUD functionality. Users can create, view, update, and delete products with images, prices, and color variations.',
    fullDescription: 'An intuitive, responsive e-commerce product administration dashboard built using React, TypeScript, and Vite. Implements strict type safety across full CRUD operations: creating, reading, updating, and deleting products with multi-image previews, real-time price calculations, and dynamic color variations. Focused on clean architecture, state management, and scalability for real-world e-commerce platforms.',
    technologies: ['React.js', 'TypeScript', 'Vite', 'CRUD Architecture', 'TailwindCSS'],
    liveUrl: 'https://product-card-qw8f.vercel.app/',
    githubUrl: 'https://github.com/Mohamed-Essam-Elfeshawy/product-card',
    image: '/images/work-6.jpg',
    featured: true,
    highlights: [
      'Type-safe product creation, editing, and deletion with instant UI reflection',
      'Multi-color swatch selector and dynamic image variation switching',
      'Lightweight build tooling with Vite for lightning-fast HMR and bundle optimization',
      'Modular component library with reusable form controls and modals',
    ],
    year: '08/2025 – 09/2025',
  },
  {
    id: 'freshcart-v2',
    title: 'FreshCart E-Commerce V2',
    subtitle: 'Next.js 14 App Router, Redux Toolkit & TypeScript Storefront',
    category: 'Next.js & React',
    description: 'A full-featured modern e-commerce platform built with Next.js App Router, Redux Toolkit, TypeScript, and Tailwind CSS with dynamic shopping cart, product filtering, and instant search.',
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
    id: 'allura-store',
    title: 'Allura Cosmetics & Beauty Store',
    subtitle: 'Luxury E-Commerce & Skincare Storefront (Azzrk)',
    category: 'Commercial & Enterprise',
    description: 'A visually stunning e-commerce boutique for luxury skincare, fragrance, and cosmetics featuring glassmorphic UI, product shade pickers, and fluid animations.',
    fullDescription: 'Allura is crafted for high-end beauty and cosmetics retail, delivering an editorial, magazine-style web presentation. Features smooth micro-animations, product zoom, curated beauty collections, responsive carousels, and an ultra-clean aesthetic.',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'E-Commerce', 'Glassmorphism UI'],
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
    id: 'post-crud-app',
    title: 'Post Management & Authentication Portal',
    subtitle: 'Type-safe React & Redux Toolkit Query Full-Stack Application',
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
    subtitle: 'Interactive Simulation of Modern Online Banking & Transfers',
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
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '12/2025 – Present',
    title: 'Front-End Developer',
    organization: 'Azzrk',
    location: 'El Mansoura, Egypt',
    type: 'Experience',
    description: 'Working as a Front-End Developer on major commercial and e-commerce platforms, specializing in Salla and Zid customizations, responsive user-friendly interfaces, and Agile sprint workflows.',
    achievements: [
      'Worked on two major projects for leading e-commerce platforms Salla and Zid, creating responsive and user-friendly interfaces.',
      'Managed tasks, feature deliverables, and project timelines using Jira and Sprint methodology within Agile environments.',
      'Integrated complex REST APIs, client-side state handling, and reusable components using React.js and Tailwind CSS.',
    ],
    skills: [
      'Salla',
      'Zid',
      'React.js',
      'Redux',
      'Redux Toolkit',
      'React Query',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'jQuery',
      'TailwindCSS',
      'Bootstrap',
      'Material UI',
      'Styled Components',
      'SASS',
      'Responsive Web Design',
      'Git & GitHub',
      'Postman',
      'Figma',
      'OOP',
      'REST APIs',
      'JSON',
      'OpenAI API',
      'Leadership',
      'Agile Mindset',
      'Scrum (Jira, Sprint)',
      'Problem Solving',
      'Team Collaboration',
      'Effective Communication',
      'Time Management',
      'Continuous Learning',
      'Creativity',
      'Decision Making',
    ],
    badge: 'Current Role',
  },
  {
    period: 'Issued Apr 2026',
    title: 'Computer Science Instructor Certification – Grade 6 (Semester 1)',
    organization: 'iSchool',
    location: 'Cairo, Egypt / Online',
    type: 'Certification',
    description: 'Awarded by iSchool for successfully completing the Computer Science Instructor course for Grade 6 (Semester 1). This certification reflects deep knowledge of computer science fundamentals, teaching methodologies, and STEM education for young learners.',
    achievements: [
      'Mastered computer science pedagogy, curriculum instruction, algorithmic thinking, and STEM principles for students.',
      'Accredited by STEM.org, International AI Driving License (IAIDL), Education Alliance Finland, and kidSAFE Certified.',
      'Completed comprehensive training designed to empower instructors to deliver world-class CS and programming sessions.',
    ],
    skills: ['Programming', 'STEM Education', 'Teaching Methodologies', 'Computer Science Fundamentals', 'Curriculum Delivery'],
    credentialUrl: 'https://www.linkedin.com/in/mohamed-elfeshawy-45a098246/overlay/Certifications/1413291883/treasury/?profileId=ACoAADzhcYYBhF2yYE8OcwsMN42HVfnA4c9TgZc',
    badge: 'iSchool & STEM.org',
  },
  {
    period: '07/2025 – 12/2025',
    title: 'Front-End Development Intensive Training (6-Month Track)',
    organization: 'Information Technology Institute (ITI) - Mansoura Branch',
    location: 'Mansoura, Egypt',
    type: 'Certification',
    description: 'Completed an intensive 6-month Front-End Development professional track at ITI - Mansoura, focusing on engineering responsive web apps using React.js, Next.js, TypeScript, and REST APIs.',
    achievements: [
      'Mastered React.js, Next.js App Router, TypeScript, Redux Toolkit, and REST API integration with real-world projects.',
      'Applied Agile methods, Scrum sprints, and Git/GitHub for teamwork, code reviews, and problem-solving.',
      'Architected and delivered the multi-portal TABLYA food delivery platform as the graduation project.',
    ],
    skills: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'Agile Methods', 'Git & GitHub'],
    badge: 'ITI Certified',
  },
  {
    period: '03/2025 – 07/2025',
    title: 'Route Academy - Front-End React.js Track',
    organization: 'Route Training Center',
    location: 'Cairo / Online, Egypt',
    type: 'Certification',
    description: 'Intensive professional training in React.js, modern JavaScript (ES6+), Redux state management, component lifecycle, and responsive web application development.',
    achievements: [
      'Built single-page applications with React Router, Redux architecture, and asynchronous API communication.',
      'Implemented clean, modular, and maintainable frontend component hierarchies.',
    ],
    skills: ['React.js', 'Redux', 'JavaScript (ES6+)', 'Bootstrap 5', 'TailwindCSS', 'REST APIs'],
    badge: 'Route Certified',
  },
  {
    period: '07/2024 – 10/2024',
    title: 'Pro Frontend Engineer: ReactJS + TypeScript + Redux',
    organization: 'Advanced Professional Track',
    location: 'Online',
    type: 'Certification',
    description: 'Specialized advanced course focusing on TypeScript strict type safety, Redux Toolkit Query (RTK Query), state normalization, and scalable enterprise patterns.',
    achievements: [
      'Engineered type-safe CRUD applications and caching architectures with RTK Query and Material UI.',
      'Optimized component rendering performance and implemented clean architectural patterns.',
    ],
    skills: ['React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Material UI'],
    badge: 'Pro Certified',
  },
  {
    period: '04/2024 – 06/2024',
    title: 'The Complete JavaScript Course: From Zero to Expert!',
    organization: 'Jonas Schmedtmann (Udemy)',
    location: 'Online',
    type: 'Certification',
    description: 'Comprehensive deep-dive into modern JavaScript (ES6+), asynchronous programming, OOP, DOM architecture, and design patterns.',
    achievements: [
      'Built complex interactive applications including the Smart Bankist Banking Platform and Mapty tracker.',
      'Mastered JavaScript engine mechanics, event loop, scoping, closures, and async/await paradigms.',
    ],
    skills: ['JavaScript (ES6+)', 'OOP', 'Asynchronous JS', 'DOM API', 'Design Patterns'],
    badge: 'Udemy Certified',
  },
  {
    period: '09/2019 – 07/2023',
    title: "Bachelor's Degree in Computer & Information Sciences (Grade: Very Good)",
    organization: 'Faculty of Computer & Information Sciences - Mansoura University',
    location: 'Mansoura, Egypt',
    type: 'Education',
    description: 'Graduated with a grade of "Very Good", acquiring a comprehensive computer science and IT foundation covering data structures, algorithms, database systems, OOP, and software engineering.',
    achievements: [
      'Graduation Grade: Very Good.',
      'Solid analytical, algorithmic, and software engineering foundations.',
      'Built multiple academic and practical software systems applying clean code principles.',
    ],
    skills: ['Computer Science', 'Data Structures', 'Algorithms', 'OOP', 'Database Systems', 'Web Engineering'],
    badge: 'Grade: Very Good',
  },
  {
    period: '07/2022 – 09/2022',
    title: 'Practical Front-End Development Training',
    organization: 'CCIC - Faculty of Computers & Information, Mansoura',
    location: 'Mansoura, Egypt',
    type: 'Certification',
    description: 'Completed a practical Front-End Development training covering HTML, CSS, JavaScript, Bootstrap, and React.js fundamentals with hands-on coding projects.',
    achievements: [
      'Built responsive web interfaces and improved coding fundamentals through hands-on project implementations.',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React.js'],
    badge: 'CCIC Certified',
  },
];

export const PARTNERS_LOGOS = [
  { name: 'ClickUp', image: '/images/clickup logo 1.png' },
  { name: 'Dropbox', image: '/images/dropbox_blue 1.png' },
  { name: 'Parmayan', image: '/images/parmayan.png' },
  { name: 'Elevation', image: '/images/ele.png' },
  { name: 'Stripe', image: '/images/stripe.png' },
];
