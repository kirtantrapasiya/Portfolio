import AuctionHubImage from "../Images/photos/AuctionHub.png";
import SocietyImage from "../Images/photos/Project 1/SocietyManagement.jpg";
import Challenge1 from "../Images/photos/Project 1/challenge1.png"

const ProjectData = [
  {
    id: 1,
    title: "Society Management System",
    type: "Housing Society Web Platform",
    image: SocietyImage,
    link: "https://society-management-system-seven.vercel.app/",
    client: "Housing Society",
    techStack: ["React.js", "Firebase", "Express.js", "Node.js", "Tailwind CSS"],
    goals:
      "Build a digital platform for housing societies to manage residents, rooms, funds, maintenance, and events with transparency and efficiency.",
    challenges:
      "Designing role-based access (owner vs secretary), integrating Firebase authentication with secure data storage, and ensuring responsive UI with real-time updates.",
    challengeImages: [
      Challenge1,
      "/images/projects/realtime-updates.png"
    ],
    features: [
      "Owner & secretary role-based authentication",
      "Owner & Owner family management",
      "Renter & Renter family management",
      "Fund & Maintenance management with records",
      "Event creation with notifications",
      "Committee member details & rules upload",
      "Room & resident record management",
      "Secure login with Firebase Authentication",
      "Manage both online and offline maintenance requests, track statuses, and notify users",
      "Track and manage society funds, process transactions, generate financial reports, and integrate with online payment"
    ],
    outcome:
      "Created a fully functional Society Management System that simplifies society operations and eliminate manual paperwork, improves transparency, and connects residents with secretary efficiently."
  },
  {
    id: 2,
    title: "Auction Hub",
    type: "Full-Stack Web Application",
    image: AuctionHubImage,
    link: "www.youtube.com/",
    client: "Small Business",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    goals:
      "Develop a real-time auction platform where users can register, log in securely, and participate in live bidding with instant updates.",
    challenges:
      "Implementing WebSockets for real-time bid updates and ensuring secure authentication while handling multiple concurrent users.",
    challengeImages: [
      "/images/projects/realtime-challenge.png",
      "/images/projects/auth-challenge.png"
    ],
    features: [
      "User registration and secure login system",
      "Real-time bidding with WebSocket updates",
      "Auction countdown timers",
      "Responsive UI design",
      "RESTful APIs for user and auction management"
    ],
    outcome:
      "A scalable real-time auction platform that improved skills in real-time data handling, interactive UIs, and full-stack architecture."
  },
  {
    id: 3,
    title: "E-commerce Store",
    type: "Web Development",
    image: null,
    link: "www.youtube.com/",
    client: "Small Business",
    techStack: ["React", "Firebase", "Stripe"],
    goals:
      "Build a fully functional online store with product listing, cart, checkout, and secure payment integration.",
    challenges:
      "Handling cart state across multiple pages and ensuring secure payment integration.",
    challengeImages: [
      "../Images/photos/cart-challenge.png",
      "../Images/photos/payment-challenge.png"
    ],
    features: [
      "Product listing with filtering and search",
      "Add to cart and checkout flow",
      "Stripe payment integration",
      "Admin panel for product management"
    ],
    outcome:
      "Launched a fully functional online store with smooth UX and secure payments, leading to first sales within a week."
  },  
];

export default ProjectData;
