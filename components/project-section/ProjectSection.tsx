"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ProjectSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <section className="w-full my-10">
      <motion.div
        viewport={{ once: true }}
        className="w-full"
        // whileInView={variants}
        initial="initial"
        ref={ref}
        whileInView={"animate"}
      >
        <motion.div
          className="absolute w-full flex justify-end items-center right-0"
          variants={variants}
        >
          <p className="min-w-[300px] px-2 italic text-sm lg:text-base  text-gray-200">
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <div className=" w-full lg:w-[450px] h-px bg-white"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
