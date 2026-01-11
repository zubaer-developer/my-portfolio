import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
const ProjectsData = [
  {
    id: 1,
    name: "🐾 PawMart - Pet Adoption & Supply Portal",
    shortDescription:
      "PawMart is a comprehensive, community-driven platform designed to connect pet owners, adopters, and suppliers. It facilitates seamless pet adoption and provides a robust marketplace for pet food, accessories, and care products.",
    image: project1,
    technologies: [
      "React",
      "Firebase",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
    ],
    liveLink: "https://pawmart-frontend.vercel.app",
    githubLink: "https://github.com/zubaer-developer/pawmart-frontend.git",
    challenges: [
      "Implementing real-time notifications for adoption requests was complex due to managing multiple user states simultaneously.",
      "Creating a secure payment integration for the marketplace while ensuring smooth user experience.",
      "Optimizing image uploads and storage for pet profiles without compromising load times.",
      "Building a robust search and filter system for both pets and products with multiple parameters.",
    ],
    futurePlans: [
      "Add AI-powered pet matching system to suggest ideal pets based on user lifestyle.",
      "Implement a mobile app version using React Native for better accessibility.",
      "Add veterinary consultation booking feature with video call support.",
      "Create a community forum for pet owners to share experiences and advice.",
      "Integrate GPS tracking for lost pet alerts in the local area.",
    ],
    features: [
      "User authentication with Firebase",
      "Pet adoption listing and management",
      "Pet supplies marketplace",
      "Admin dashboard with analytics",
      "Responsive design for all devices",
    ],
  },
  {
    id: 2,
    name: "🩸 Blood Donation Application",
    shortDescription:
      "A user-friendly platform that connects blood donors with those in need of blood, promoting a seamless and efficient donation process.",
    image: project2,
    technologies: [
      "React",
      "Firebase",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
    ],
    liveLink: "https://blood-donation-app-client-inky.vercel.app",
    githubLink:
      "https://github.com/zubaer-developer/blood-donation-app-client.git",
    challenges: [
      "Ensuring data privacy and security for sensitive medical information of donors.",
      "Building an efficient matching algorithm to connect donors with recipients based on blood type and location.",
      "Creating a reliable notification system for urgent blood requests.",
      "Handling concurrent requests when multiple users respond to the same blood request.",
    ],
    futurePlans: [
      "Implement SMS and WhatsApp notifications for urgent requests.",
      "Add blood bank inventory management system.",
      "Create a reward system to encourage regular donors.",
      "Integrate with hospital systems for automatic request posting.",
      "Add health tracking features for donors to monitor their donation history.",
    ],
    features: [
      "Donor registration and profile management",
      "Blood request posting system",
      "Search donors by blood group and location",
      "Dashboard with donation statistics",
      "Role-based access control",
    ],
  },
  {
    id: 3,
    name: "📱 HeroApp: Productive Apps Showcase",
    shortDescription:
      "HeroApp is a modern, responsive web application designed to showcase a collection of productive mobile applications. The platform allows users to browse trending apps, view detailed information, install (simulate via local storage), and manage their installed apps.",
    image: project3,
    technologies: [
      "React (Vite)",
      "React Router DOM",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "Local Storage",
    ],
    liveLink: "https://stupendous-figolla-af4807.netlify.app/",
    githubLink: "https://github.com/zubaer-developer/hero-apps-by-zubaer.git",
    challenges: [
      "Managing complex state for installed apps across multiple components without a state management library.",
      "Implementing smooth animations and transitions while maintaining performance.",
      "Creating an intuitive UI/UX that mimics real app store experience.",
      "Handling local storage efficiently to persist user data across sessions.",
    ],
    futurePlans: [
      "Add user authentication for personalized app recommendations.",
      "Implement a rating and review system for apps.",
      "Create app categories with advanced filtering options.",
      "Add dark mode toggle for better user experience.",
      "Implement PWA features for offline access.",
    ],
    features: [
      "Browse trending and popular apps",
      "Detailed app information pages",
      "Simulated app installation",
      "Installed apps management",
      "Responsive and modern UI",
    ],
  },
];

export default ProjectsData;
