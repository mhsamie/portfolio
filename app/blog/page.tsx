import Blog from "@/components/Blog/Blog";
import Footer from "@/components/footer/Footer";
import React from "react";
export const metadata = {
  title: "Fatemeh Samie | blog",
  description: "Front-end developer | love to bring new Ideas to the world",
};

const page = () => {
  return (
    <>
      <Blog /> <Footer />
    </>
  );
};

export default page;
