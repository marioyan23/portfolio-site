export interface AboutContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export const aboutConfig: AboutContent = {
  title: "About Me",
  imageSrc: "/aboutSection/girl-about.svg", // For girl change to /aboutSection/girl-about.svg
  imageAlt: "About Me Illustration",
  paragraphs: [
    `I'm a passionate designer with a Bachelor's degree in Applied Informatics and additional qualifications as a 3D modeler and animation designer. I strive to create captivating designs and bring ideas to life. Precision down to the pixel and creative problem-solving are essential to my approach.`,

    `My journey in design began in 2019 when I finished create an app design for my Bachelor's thesis in Applied Informatics and Mathematics at Saint Petersburg State University. This experience sparked my passion for design, and in 2020, I pursued further qualifications at Peter the Great St. Petersburg Polytechnic University, specializing as an animation and 3D designer. I continued to learn independently, completing courses in After Effects, Illustrator, Cinema 4D, Photoshop, and Figma.`,

    `When I'm not fully immersed in design projects, you can often find me participating in design marathons, which I truly enjoy. I also run a blog and work as a freelance photographer where I share insights about design and glimpses of my life. You can find me on YouTube and Instagram.`,
  ],
};
