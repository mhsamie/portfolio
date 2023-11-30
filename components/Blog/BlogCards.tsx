import Image from "next/image";
import React from "react";

const BlogCards = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="lg:p-5 p-2 flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-10 w-full border border-gray-200 rounded-xl">
      <svg
        viewBox="0 0 1043.63 592.71"
        className="w-full bg-white rounded p-2 lg:w-[280px] q r"
      >
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
          </g>
        </g>
      </svg>
      {/* <Image
        className="bg-white w-full lg:w-[380px]"
        src={`/mediumlogo.svg`}
        alt="medium"
        width={380}
        height={280}
      /> */}
      <div className="flex-col flex gap-2 w-full lg:w-3/4">
        <span className="lg:text-lg font-semibold lg:font-Bold ">{title}</span>
        <span className="lg:font-medium lg:textbase text-sm">{desc}</span>
      </div>
    </div>
  );
};

export default BlogCards;
