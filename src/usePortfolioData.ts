import { useState, useEffect } from "react";

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
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
  features: string[];
}

export function usePortfolioData() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setPersonalInfo(data.personalInfo);
        setProjects(data.projects);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { personalInfo, projects, loading, error };
}
