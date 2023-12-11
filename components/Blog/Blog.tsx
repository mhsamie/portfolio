import React from "react";
import BlogCards from "./BlogCards";
import Link from "next/link";

const Blog = () => {
  const AllArticles = [
    {
      link: "https://medium.com/@samiefatemeh99/seo-optimization-why-you-should-optimize-web-vitals-and-lighthouse-scores-for-your-websites-0c66c304c8fd",
      title:
        "SEO OPTIMIZATION: Why You Should Optimize Web Vitals and Lighthouse Scores for Your Websites",
      desc: "In today’s digital age, having a strong online presence is crucial for businesses and individuals alike. Whether you are selling products...",
    },
    {
      link: "https://medium.com/@samiefatemeh99/alpine-js-a-lightweight-framework-for-big-projects-or-simple-tasks-830aefd88f93",
      title:
        "Alpine.js: A Lightweight Framework for Big Projects or Simple Tasks?",
      desc: "During my last experience coding fin-tech tools for traders, I decided to give Alpine.js a chance to help me code those tools instead of using vanilla JavaScript. Here are some notes I wanted to share about this wonderful experience I had with Alpine.js and the joy it brought to me…",
    },
    {
      link: "https://medium.com/@samiefatemeh99/drag-and-drop-functionality-with-react-js-9b1294238225",
      title: "Drag and Drop functionality with react.js",
      desc: "the article explores how to implement drag and drop functionality with react js and tailwindCSS to enhance user experience in react applications. …",
    },
    {
      link: "https://medium.com/@samiefatemeh99/how-to-be-productive-and-ways-to-prevent-burnout-a9ac0149cc35",
      title: "How to be productive and ways to prevent burnout",
      desc: "The modern world we live in requires us to move fast, indeed the ability of all human bodies and mental capability to process and do the specific action in the minimum time is not equal. …",
    },
    {
      link: "https://medium.com/@samiefatemeh99/seo-in-next-js-v13-app-directory-9e7e920da815",
      title: "SEO in Next.js v13 App directory",
      desc: "recently, Next team stabilized the app directory. in the new version of Next, the approach of applying meta tags with the purpose of good SEO and optimizing for Google bots has changed. In the previous version,...",
    },
  ];
  return (
    <div className="max-w-[1366px] text-white flex flex-col gap-4 px-4 lg:px-10 xl:px-0 my-10 md:px-5">
      {AllArticles.map((a) => (
        <Link
          className="text-white hover:text-purple-400"
          href={a.link}
          target="_blank"
          key={a.title}
        >
          <BlogCards title={a.title} desc={a.desc} />
        </Link>
      ))}
    </div>
  );
};

export default Blog;
