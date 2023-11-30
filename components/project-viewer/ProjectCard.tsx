import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  link,
  src,
  alt,
  title,
  discription,
}: {
  link?: string;
  title: string;
  discription: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 w-full text-white">
      <div className="w-[342px] md:w-[380px] xl:w-[480px] border-2 relative border-gray-50 rounded-3xl  overflow-hidden">
        <div className=" w-full h-10 flex justify-between items-center px-4 border-b-2 border-gray-50 ">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-red-600"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-600"></div>
          </div>

          {link && (
            <Link href={link} className="cursor-pointer text-sm text-white">
              Go to project -&gt;
            </Link>
          )}
        </div>
        <div className="h-full w-full object-cover ">
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-[420px] lg:w-full">
        <div className="font-bold text-lg text-center  lg:text-start ">
          <span>{title}</span>
        </div>
        <div className=" text-center lg:text-start">
          <span>{discription}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
