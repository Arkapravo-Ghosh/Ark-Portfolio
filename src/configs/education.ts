export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  startYear: number;
  endYear: number | "Expected";
  gpa?: string;
  specializations?: string[];
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: "uem",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (IoT, Cybersecurity, Blockchain)",
    institution: "University of Engineering and Management",
    location: "Kolkata, West Bengal, India",
    startYear: 2022,
    endYear: 2026,
    gpa: "7.44",
    specializations: ["IoT", "Cybersecurity", "Blockchain"],
    achievements: [
      "Active member of technical clubs and communities",
      "Speaker at GDSC DevOps events",
      "Participated in multiple hackathons",
    ],
  },
];
