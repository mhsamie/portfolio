"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="hidden lg:block w-12 h-12 rounded-full border border-purple-300 fixed z-50 "
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};

export default Cursor;
