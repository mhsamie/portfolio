"use client";
import Image from "next/image";
import "./hero.css";
import { motion } from "framer-motion";

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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper ">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="text-[#be78f5]" variants={textVariants}>
            Fatemeh Samie
          </motion.h1>
          <motion.h2 variants={textVariants} className="text-white">
            Front-end developer
          </motion.h2>
          <motion.span variants={textVariants} className="text-gray-400">
            Love to bring new ideas into the world .
          </motion.span>
          <motion.div variants={textVariants} className="buttons ">
            <motion.button className="cursor-pointer" variants={textVariants}>
              See the Latest Works
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <div className="flex justify-center items-center lg:hidden">
          <Image
            width={100}
            height={100}
            unoptimized
            src="/me.jpeg"
            alt=""
            className="rounded-full w-72 h-72 md:w-96 md:h-96 "
          />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-end developer content creator
      </motion.div>
      <div className="imageContainer hidden lg:block rounded-full">
        <div className="border-2 h-20  w-20 left-10 border-purple-500 lg:h-[150px] rounded-full absolute  -top-10  lg:w-[150px]"></div>
        <div className=" border-2 border-white right-10 w-96 h-96 lg:h-[600px] md:w-[450px] md:h-[450px] rounded-full absolute  lg:w-[600px]"></div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          src="/me.jpeg"
          alt=""
          className="rounded-full"
        />
        <div className="-left-10 md:left-[50%] lg:right-24 bg-purple-500 h-10 w-10  lg:h-[100px] rounded-full absolute bottom-40 lg:w-[100px]"></div>
      </div>
    </div>
  );
};

export default Hero;
