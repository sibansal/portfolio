export interface Company {
  id: number;
  name: string;
  logo?: string;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
