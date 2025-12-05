export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  linkedinUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Subhajit Hait",
    role: "Software Developer",
    company: "Avinya NeuroTech",
    image: "/subhajithait.jpeg",
    content:
      "I had the pleasure of working with Arkapravo Ghosh at Revmaxx, and he proved to be an excellent backend developer with strong DevOps skills. He has an impressive ability to learn quickly - you can assign him any task, and he will pick it up fast and deliver reliably. Arkapravo is proactive, adaptable, and consistently produces quality work, making him a valuable addition to any engineering team.",
    linkedinUrl: "https://www.linkedin.com/in/subho004",
  },
  {
    id: "2",
    name: "Soumyadip Ghosal",
    role: "Founder & CEO",
    company: "RevMaxx",
    image: "/soumyadipghosal.jpeg",
    content:
      "Highly recommend Arkapravo! Strong backend skills, reliable, and a great team player. A valuable asset to any tech company. He consistently delivered high-quality work and was a strong problem solver.",
    linkedinUrl: "https://www.linkedin.com/in/soumyadip-ghosal-820660126",
  },
  {
    id: "3",
    name: "Aishwarya Barik",
    role: "Your friendly neighborhood tech guy",
    company: "RevMaxx",
    image: "/aishwaryabarik.jpeg",
    content:
      "I had the pleasure of working with Arkapravo at RevMaxx. His technical expertise, problem-solving skills, and collaborative spirit were truly impressive. He consistently delivered innovative solutions and contributed significantly to our team's success.",
    linkedinUrl: "https://www.linkedin.com/in/aishwarya-barik-221324192",
  },
  {
    id: "4",
    name: "Saptarshi Basu",
    role: "Product Designer",
    company: "Spicenet",
    image: "/saptarshibasu.jpeg",
    content:
      "I highly recommend Arkapravo Ghosh, who interned with us as a front-end developer at Connect AI. In just two months, he showcased impressive skills and a great work ethic. Arkapravo quickly grasped new frameworks for speedy development, gave us regular updates and checks, and actively sought clarification when needed. He was a joy to work with and will be a fantastic addition to any team.",
    linkedinUrl: "https://www.linkedin.com/in/saptarshibasu15",
  },
  {
    id: "5",
    name: "Prasun Das",
    role: "Software Engineer - II (Full Stack & DevOps)",
    company: "Phlo Systems Ltd.",
    image: "/prasundas.jpeg",
    content:
      "I've had the pleasure of collaborating with Arkapravo Ghosh, and I am delighted to provide a heartfelt recommendation. Arkapravo is a highly motivated developer who consistently places a strong focus on completing tasks with dedication and precision. What distinguishes Arkapravo is his unwavering commitment to overcoming challenges and ensuring the successful completion of any project. His reliability, attention to detail, and dedication to delivering high-quality work are truly commendable. If you're seeking someone who will go above and beyond to get the job done effectively, Arkapravo is the individual to rely on. I wholeheartedly recommend Arkapravo Ghosh for any professional endeavor. He is an outstanding professional with a bright future ahead. Arkapravo's commitment to excellence and his results-driven approach make him a valuable asset to any team or project.",
    linkedinUrl: "https://www.linkedin.com/in/prasun--das",
  },
];
