"use client";
import ProjectCard from "@/components/project-viewer/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  return (
    <div id="projects">
      <motion.div className="lg:px-5 text-xl text-center lg:text-start max-w-[1366px] xl:px-0 w-full lg:text-5xl font-black text-white my-10 lg:mt-20">
        <span>See The Latest Work</span>
      </motion.div>
      <div className="my-15 lg:px-5 xl:px-0 w-full xl:justify-center max-w-[1366px]  flex flex-col gap-10">
        <ProjectCard
          src="/tutify.png"
          alt="tutify"
          title="tutify"
          discription="Tutifu is a educational website which teacher and student can book an online session to learn and master any subject they offer. In tutify there is multiple subjects to learn and there is varoius filleds to teach and earn money."
        />
        <ProjectCard
          src="/lyfecycle.png"
          alt="lifecycle"
          title="LifeCycle"
          discription="Lyfecycle is a gym and exercise company website. Lyfecycle is great for any fitness level. Our great community
          provides a powerful combination of support, motivation and healthy
          competition to help you improve on your performance."
        />
        <ProjectCard
          src="/exchnager.png"
          alt="exchanger"
          discription="the aim of this project is to exchange crypto currencies to any coin you want in a easy and suitable way. In exchanger I use Next 13 and tailwindCss combined with typescript to create a beautiful User interface and optimized user experience very fast and useful."
          title="Crypto Exchanger"
        />
        <ProjectCard
          link="https://zarinpalsampel.vercel.app/"
          src="/zarinpal.png"
          alt="zarinpal"
          title="Zarinpal clone"
          discription="Zarinpal, the country's first pioneer payment assistant, has provided a variety of services in the field of electronic payment for businesses by using new style and standards in providing internet payment gateway services. With the aim of playing a constructive role in increasing the share of e-commerce in the national gross product and helping the growth and development of businesses.
          I clone the design successfully using HTML  and Pure CSS and a bit of JacsScript."
        />
      </div>
    </div>
  );
};

export default Projects;
