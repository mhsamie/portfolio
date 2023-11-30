import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="lg:text-lg font-semibold">2020</span>
        <span className="font-medium lg:text-base text-sm">I start</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="lg:text-lg font-semibold">2021</span>
        <span className="font-medium lg:text-base text-sm">
          react and tutify
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="lg:text-lg font-semibold">2022</span>
        <span className="font-medium lg:text-base text-sm">chartbox</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="lg:text-lg font-semibold">2023</span>
        <span className="font-medium lg:text-base text-sm">chartbox</span>
      </div>
    </div>
  );
};

export default AboutMe;
