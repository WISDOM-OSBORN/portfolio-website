export const personalInfo = {
  name: "Wisdom Osborn Abuyah",
  tagline: "Web3 Learning & Building | ML & AI",
  email: "abuyahwisdomosborn@gmail.com",
  phone: "+233248939749",
  github: "https://github.com/WISDOM-OSBORN",
  twitter: "https://x.com/wixzyyy",
  linkedin: "https://www.linkedin.com/in/wisdom-osborn-abuyah",
  about: "I'm a Full-Stack Developer specializing in modern web development, Machine Learning, and AI. Passionate about building responsive, high-performance applications that merge sleek design with seamless functionality. Dedicated to delivering scalable, user-centric solutions that drive business success.",
  profileImage: "https://pfitpzocsiqdariepmfw.supabase.co/storage/v1/object/public/images/profile.jpg" // Upload your image to the public/ folder and name it profile.jpg, or paste a Supabase URL here
};

export const projects = [
  {
    id: "be-the-light",
    title: "Be the Light \u2013 Premium Boutique",
    type: "Luxury E-Commerce & AI",
    description: "A full-stack, luxury e-commerce platform tailored for a modern clothing boutique. Features an AI-Powered 'Maison Concierge' virtual personal shopper powered by Google Gemini AI, offering styling advice and product recommendations.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini AI SDK"],
    link: "https://bethelightcollection.netlify.app/#/",
    image: "https://pfitpzocsiqdariepmfw.supabase.co/storage/v1/object/public/images/be-the-light.PNG", // Upload to public/ folder as be-the-light.png
    features: [
      "Dynamic Storefront & Lookbooks",
      "AI-Powered 'Maison Concierge'",
      "Secure Authentication",
      "Admin Dashboard for Inventory"
    ]
  },
  {
    id: "pennigadget",
    title: "PenniGadget",
    type: "E-Commerce Platform",
    description: "A complete e-commerce platform featuring a full shopping flow, custom admin dashboard, real-time reviews, and dark mode support. Includes WhatsApp order integration and secure payments.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts"],
    link: "https://pennigadget.netlify.app/",
    image: "https://pfitpzocsiqdariepmfw.supabase.co/storage/v1/object/public/images/pennigadget.PNG", // Upload to public/ folder as pennigadget.png
    features: [
      "Full E-Commerce Flow",
      "Custom Admin Dashboard",
      "Real-time Reviews",
      "Dark Mode Support"
    ]
  },
  {
    id: "lagoon-view",
    title: "Lagoon View Hotel System",
    type: "Full-Stack Booking Platform",
    description: "A hotel booking and management platform with a public-facing booking system and a secure Admin Dashboard for staff to manage inventory and approve requests in real-time.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    link: "https://lagoonview.netlify.app/",
    image: "https://pfitpzocsiqdariepmfw.supabase.co/storage/v1/object/public/images/lagoon-view.PNG", // Upload to public/ folder as lagoon-view.png
    features: [
      "Public Booking System",
      "Secure Admin Dashboard",
      "Real-time Approvals",
      "WhatsApp Integration"
    ]
  },
  {
    id: "malaria-classifier",
    title: "Malaria Species Classifier",
    type: "Deep Learning / ML",
    description: "A deep learning project that determines the specific species causing Malaria. Detects and classifies the various classes of the parasite using advanced computer vision models.",
    tech: ["Python", "Flask", "Tailwind CSS", "Hugging Face"],
    link: "https://huggingface.co/spaces/finalyearprojectonmalaria/Malaria_Species_classifier",
    image: "https://pfitpzocsiqdariepmfw.supabase.co/storage/v1/object/public/images/malaria-classifier.PNG", // Upload to public/ folder as malaria-classifier.png
    features: [
      "Parasite Classification",
      "Deep Learning Model",
      "Interactive Web Interface",
      "Hugging Face Deployment"
    ]
  }
];
