import Image from "next/image";

const AboutMe = () => {
  const imageURLs = [
    {
      href: "https://babeljs.io/",
      src: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
      alt: "babel",
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      href: "https://getbootstrap.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      alt: "bootstrap",
    },
    {
      href: "https://www.w3schools.com/css/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
    },
    {
      href: "https://www.figma.com/",
      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      alt: "figma",
    },
    {
      href: "https://git-scm.com/",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: "git",
    },
    {
      href: "https://www.w3.org/html/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
    },
    {
      href: "https://www.invisionapp.com/",
      src: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
      alt: "invision",
    },
    {
      href: "https://www.mongodb.com/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "mongodb",
    },
    {
      href: "https://nextjs.org/",
      src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      alt: "nextjs",
    },
    {
      href: "https://reactjs.org/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
    },
    {
      href: "https://redux.js.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      alt: "redux",
    },
    {
      href: "https://tailwindcss.com/",
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      alt: "tailwind",
    },
    {
      href: "https://www.typescriptlang.org/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      alt: "typescript",
    },
    {
      href: "https://webpack.js.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
      alt: "webpack",
    },
    {
      href: "https://www.adobe.com/products/xd.html",
      src: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
      alt: "xd",
    },
  ];
  return (
    <div className=" p-5 w-full max-w-[1366px] my-20 text-white">
      <div className="my-10">
        <span className="lg:px-8 p-5 text-xl text-center lg:text-start max-w-[1366px] xl:px-0 w-full lg:text-5xl font-black text-white mt-10 mb-5 lg:mt-20">
          WHO AM I
        </span>
      </div>
      <div className="w-full flex flex-col lg:grid grid-flow-col  lg:grid-rows-2 lg:grid-cols-3 gap-4 gap-y-2">
        <div className="p-5 py-8 pr-8 flex justify-center w-full h-full items-center lg:row-span-2 col-span-1 text-justify  lg:col-span-2 bg-slate-600 bg-opacity-20 rounded-2xl ">
          <div className=" flex gap-4 flex-col">
            <span className="text-sm neon-red">&lt;!DOCTYPE html&gt; </span>
            <span className="text-sm neon-red pl-6">
              &lt;html lang="en"&gt;
            </span>
            <span className="text-sm neon-white pl-9">
              {" "}
              &lt;meta charset="UTF-8"&gt;
            </span>
            <span className="text-sm neon-green pl-10">
              &lt;title&gt;About Me &lt;/title&gt;
            </span>{" "}
            <span className="text-sm neon-white pl-12">
              &lt;meta name="viewport"
              content="width=device-width,initial-scale=1"&gt;
            </span>
            <span className="text-sm neon-purp pl-16">
              {" "}
              &lt;link rel="stylesheet" href="./me.css"&gt;
            </span>
            <span className="text-sm neon-red pl-24">&lt;body&gt;</span>
            <span>
              <span className="text-sm neon-white pl-24 pr-2">
                &lt;h1 class="text-xl font-bold"&gt;
              </span>
              <span className="text-xl font-bold">About ME</span>
              <span className="text-sm neon-white pl-2">&lt;/h1&gt;</span>
            </span>
            <span className="text-sm neon-red pl-24">
              &lt;p class=" text-sm lg:text-base font-medium leading-[32px]"&gt;
            </span>
            <p className="pl-24 text-base lg:text-lg font-medium leading-10 ">
              As a enthusiastic front-end developer with two years of
              experience, I have honed my skills in crafting seamless web
              experiences. By utilizing specialized front end tools, I can
              effortlessly craft responsive user interfaces and functional user
              experiences that are both visually appealing and highly
              functional. I am always eager to learn new technologies and
              improve my skills, and I am excited to bring my ideas to life also
              a team player who enjoys collaborating with others to create
              amazing products. I believe that the best way to learn is by
              doing, and I am constantly working on new projects to challenge
              myself and expand my knowledge.
            </p>{" "}
            <span className="text-sm neon-red pl-24">&lt;/p&gt;</span>{" "}
            <span></span>
            <span className="text-sm neon-white pl-20">
              {" "}
              &lt;script src="nextJsPortfolio.js"&gt; &lt;/script&gt;
            </span>{" "}
            <span className="text-sm neon-red pl-12">&lt;/body&gt;</span>
            <div className="text-sm neon-red pl-0">&lt;/html&gt;</div>
          </div>
        </div>
        <div className="p-5 col-span-1 bg-slate-600 bg-opacity-20 rounded-2xl ">
          <span className="inline-block font-bold mb-4">Technologies</span>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
            {imageURLs.map((items) => (
              <a
                key={items.alt}
                className=" border  items-center bg-zinc-600  border-gray-800 shadow-xl px-4 py-[6px] rounded-full flex gap-2"
                href={items.href}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={items.src}
                  className=" rounded"
                  alt={items.alt}
                  width="28"
                  height="28"
                />
                <span className="text-sm block text-center w-full text-gray-200">
                  {items.alt}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="p-5 flex gap-5 col-span-1  h-auto  bg-slate-600 bg-opacity-20 rounded-2xl w-full">
          <div className="relative w-1 max-h-[475px] lg:h-full bg-white  ">
            <div className="bg-purple-400 absolute rounded-full w-3 h-3 top-2 -left-[5px]"></div>
            <div className="bg-purple-400 absolute rounded-full w-3 h-3 top-[103px] lg:top-[124px] md:top-[85px] xl:top-[85px] -left-[5px]"></div>
            <div className="bg-purple-400 absolute rounded-full w-3 h-3 top-[200px] lg:top-[239px] md:top-[160px] xl:top-[179px] -left-[5px]"></div>
            <div className="bg-purple-400 absolute rounded-full w-3 h-3 top-[316px] lg:top-[355px] md:top-[235px] xl:top-[275px] -left-[5px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="font-bold">2020</span>
              <span className="text-gray-300 font-medium text-justify  text-sm">
                I've started learning Front-end development by taking courses
                and practicing algorithms and data structure.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">2021</span>
              <span className="text-gray-300 font-medium text-justify text-sm">
                Took my initial learnings to HTML, CSS, JS mini projects, also
                My react.js journey starts here and I got my very first Job.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">2022</span>
              <span className="text-gray-300 font-medium text-justify  text-sm">
                During my first job, not only I'd learned tailwindCSS, Vue.js
                and Nuxt.js, but also, My react experties find its way to
                Next.js.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold">2023</span>
              <span className="text-gray-300 font-medium text-justify  text-sm">
                In my previous job I managed my skills in Next.js V13 and V14
                and developed multi tools and websites with Next.js, React.js,
                Alpine.js, tailwindCSS, bootstarp 5 , Sass, and so on.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
