export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  {
    id: "intro",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    id: "experience",
    label: "Experience",
    href: "/experience",
  },
  {
    id: "education",
    label: "Education",
    href: "/education",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    id: "resume",
    label: "Resume",
    href: "https://arkapravo.in/ark-resume/Arkapravo_Ghosh_Resume.pdf",
    external: true,
  },
];
