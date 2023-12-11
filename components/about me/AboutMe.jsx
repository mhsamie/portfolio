const AboutMe = () => {
  return (
    <div className="w-full max-w-[1366px] my-20 text-white">
      <div className="my-10">
        <span className="lg:px-5 text-xl text-center lg:text-start max-w-[1366px] xl:px-0 w-full lg:text-5xl font-black text-white mt-10 mb-5 lg:mt-20">
          WHO I AM
        </span>
      </div>
      <div class="w-full grid grid-flow-col grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 gap-4">
        <div class="p-5 py-8 lg:row-span-2 text-justify  lg:col-span-2 bg-slate-600 bg-opacity-20 rounded-2xl w-full">
          As a enthusiastic front-end developer with two years of experience, I
          have honed my skills in crafting seamless web experiences. By
          utilizing specialized front end tools, I can effortlessly craft
          responsive user interfaces and functional user experiences that are
          both visually appealing and highly functional. I am always eager to
          learn new technologies and improve my skills, and I am excited to
          bring my ideas to life also a team player who enjoys collaborating
          with others to create amazing products. I believe that the best way to
          learn is by doing, and I am constantly working on new projects to
          challenge myself and expand my knowledge.
        </div>
        <div class="p-5 col-span-1  bg-slate-600 bg-opacity-20 rounded-2xl ">
          B
        </div>
        <div class="p-5 col-span-1 col-start-3  bg-slate-600 bg-opacity-20 rounded-2xl w-full">
          C
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
