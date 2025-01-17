export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
  link?: string;
}

export const projectsConfig: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Figma Portfolio",
    description: `Recently, I developed an interest in web design as well. I already have basic skills in this area and am currently undergoing additional training to improve them. I aim to create user-friendly and visually appealing interfaces, design responsive layouts, apply UX/UI principles effectively, work with tools like Figma or Adobe XD, and deepen my understanding of HTML, CSS, and web development processes. These are my first works, including some training projects.`,
    imageLight: "/projectSection/project1_new.png",
    imageDark: "/projectSection/project1_new.png",
    reverse: false,
    link: "/figma",
  },
  {
    id: 2,
    number: "02",
    title: "3D and 2D design",
    description: `I fell in love with 3D in 2019, and since then, I have been creating 3D models, animations, and visualizations using various software. Over time, I’ve had the opportunity to work with tools like Autodesk 3ds Max, Autodesk Maya, Cinema 4D, Blender, ZBrush, Octane Render, Arnold Render, Eevee Render, Marvelous Designer, and more.
I’ve completed tasks for advertising, educational content, 3D printing, and personal projects. I’m always excited to work in this field and look forward to new projects where I can bring ideas to life.`,
    imageLight: "/projectSection/project2_new.png",
    imageDark: "/projectSection/project2_new.png",
    reverse: true,
    link: "/",
  },
  {
    id: 3,
    number: "03",
    title: "Media designer",
    description: `Managing content on social media, developing a unique brand style, and conveying the existing identity are important tasks for a media designer. I am always ready to assist in creating a unique style and design.
 Also I can prepare materials for printing and create video and photo content for you and your social media!`,
    imageLight: "/projectSection/project3_new.png",
    imageDark: "/projectSection/project3_new.png",
    reverse: false,
    link: "/",
  },
  // Add more projects as needed
];
