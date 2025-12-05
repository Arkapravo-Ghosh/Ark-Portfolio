export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
  username: string;
}

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Arkapravo-Ghosh",
    icon: "github",
    username: "Arkapravo-Ghosh",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arkapravo-ghosh/",
    icon: "linkedin",
    username: "arkapravo-ghosh",
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    url: "https://twitter.com/ArkapravoGhosh1",
    icon: "twitter",
    username: "ArkapravoGhosh1",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/arkapravo.g.1234/",
    icon: "facebook",
    username: "arkapravo.g.1234",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/arkapravoghosh1/",
    icon: "instagram",
    username: "arkapravoghosh1",
  },
  // {
  //   id: "orcid",
  //   name: "ORCID",
  //   url: "https://orcid.org/0009-0004-2994-1872",
  //   icon: "orcid",
  //   username: "0009-0004-2994-1872",
  // },
];

export const primarySocials = socials.filter(
  (s) => s.id === "github" || s.id === "linkedin"
);
