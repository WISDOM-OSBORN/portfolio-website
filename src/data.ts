export interface PersonalInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  twitter: string;
  linkedin: string;
  about: string;
  profileImage: string;
  cvUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  repo?: string;
  image?: string;
  tech: string[];
  features: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Wisdom Osborn Abuyah",
  tagline: "Biomedical Engineer | AI, Data and Health Technology",
  email: "abuyahwisdom@gmail.com",
  phone: "+233248939749",
  github: "https://github.com/WISDOM-OSBORN",
  twitter: "https://x.com/wixzyyy",
  linkedin: "https://linkedin.com/in/wisdom-abuyah",
  about:
    "From deep learning for malaria-species identification to DataCern, an open-source tool that transforms CSV files and questions into data reports, I build practical systems that make complex problems easier to solve. As a co-founder of Wifra Labs, I also take products from idea to deployment—defining the problem, structuring the data, building the product, and shipping it.",
  profileImage: "https://4lkqqgfjmsbokkj1.public.blob.vercel-storage.com/profile.jpg",
  cvUrl: "https://4lkqqgfjmsbokkj1.public.blob.vercel-storage.com/Wisdom_Osborn_Abuyah_CV.pdf",
};

export const projects: Project[] = [
  {
    id: "datacern",
    title: "DataCern",
    type: "Data tool | Open source",
    description:
      "Upload a CSV or PDF, ask a question in plain English, and get a written report with charts. Key figures such as totals and outliers are calculated in code, not written by the AI model. Reports export to Markdown, PDF or PowerPoint.",
    tech: ["Python", "Streamlit", "LLM APIs"],
    link: "https://datacern.streamlit.app/",
    repo: "https://github.com/WISDOM-OSBORN/datacern",
    features: [
      "Numbers calculated in code",
      "Data cleaning with preview",
      "PDF and PowerPoint export",
      "Open source (MIT)",
    ],
  },
  {
    id: "malaria-classifier",
    title: "Malaria Species Classifier",
    type: "Deep learning | Research",
    description:
      "Identifies the malaria parasite species (P. falciparum, P. ovale and P. malariae) from thin blood smear images. Built as my final year project; the paper is submitted to Computer Methods and Programs in Biomedicine.",
    tech: ["Python", "TensorFlow", "U-Net++", "Hugging Face"],
    link: "https://huggingface.co/spaces/finalyearprojectonmalaria/Malaria_Species_classifier",
    image: "https://4lkqqgfjmsbokkj1.public.blob.vercel-storage.com/malaria-classifier.PNG",
    features: [
      "Segmentation with U-Net++",
      "Classifies three species",
      "Try it online",
    ],
  },
  {
    id: "pennirent",
    title: "PenniRent",
    type: "Startup product | Wifra Labs",
    description:
      "A rental marketplace for properties, tools and equipment. I lead the technical side as co-founder and CTO. It includes PenniPal, an assistant that takes search requests in plain language and protects users' personal information.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://pennirent.com/",
    image: "https://4lkqqgfjmsbokkj1.public.blob.vercel-storage.com/pennirent.png",
    features: [
      "Search and matching",
      "AI assistant (PenniPal)",
      "Payments",
      "Verified owners",
    ],
  },
  {
    id: "virtual-hub",
    title: "Virtual Hub",
    type: "Platform | University-industry collaboration",
    description:
      "A platform that connects researchers, students and industry partners. Industry posts challenges and the platform suggests matching research teams. It also handles proposal review, verification and an admin dashboard.",
    tech: ["AI matching", "Vector search", "Admin analytics"],
    link: "https://virtualhub.vercel.app/",
    image: "https://4lkqqgfjmsbokkj1.public.blob.vercel-storage.com/virtualhub.png",
    features: [
      "Matching challenges to researchers",
      "Proposal workflow",
      "Research verification",
      "Admin analytics",
    ],
  },
  {
    id: "john20-deals",
    title: "John20 Deals",
    type: "E-commerce",
    description:
      "An online shop for refurbished phones and laptops in Accra, with trade-ins, repair booking and WhatsApp checkout.",
    tech: ["React", "TypeScript", "Supabase"],
    link: "https://john20deals.com/",
    image: "https://4lkqqgfjmsbokkj1.public.blob.vercel-storage.com/john20deals.png",
    features: [
      "WhatsApp checkout",
      "Device trade-ins",
      "Repair booking",
      "Admin analytics",
    ],
  },
];
