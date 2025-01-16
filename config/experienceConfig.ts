export interface Experience {
  id: number;
  companyLogo: string;
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

export const experienceConfig: Experience[] = [
  {
    id: 1,
    companyLogo: "/experienceSection/citi.svg",
    companyName: "Citibank",
    role: "Media designer",
    duration: "Nov 2023 – Present",
    description: `I create a design for the Instagram account, where I prepare posts and videos to engage the community and share updates. Additionally, I create flyers for print and produce promotional videos.`,
  },
  {
    id: 2,
    companyLogo: "/experienceSection/citi.svg",
    companyName: "Citibank",
    role: "Freelance",
    duration: "Aug 2022 - Sep 2023",
    description: `I completed a series of freelance projects, successfully receiving great feedback and appreciation. I actively worked in the field of media design for social media, including photography, videography, retouching, graphic design, animation,  3D and visualization for various companies such as Axioma Schule, Diakonia, and Mad'e.`,
  },
  {
    id: 3,
    companyLogo: "/experienceSection/fpl.svg",
    companyName: "Florida Power & Light",
    role: "The Center of Electronic Educational Resources",
    duration: "Jan 2021 - Feb 2022",
    description: `Creating Educational Videos: I developed engaging and informative videos for a solid geometry course, utilizing 3D animation to illustrate complex concepts and make them easier to understand for students. I worked closely with a team of designers and educators to ensure the animations aligned with the course content, educational goals, and the target audience's needs.`,
  },
  // Add more experiences as needed
];
