import React, { FC, ReactNode } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import { page } from "./Navbar";
import { pages } from "./Navbar";

const SideBarMenu: FC<{
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showSidebar, setShowSidebar }) => {
  const closer = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div>
      <div
        className={`${
          showSidebar ? "fixed" : "hidden"
        } lg:hidden w-full h-screen top-0 left-0 animimate z-[10000000000] opacity-5 bg-[#14142b]`}
        onClick={closer}
      ></div>
      <div
        className={`bg-[#31313A] p-5 fixed z-[100000000000]  w-10/12 top-0 right-0 h-screen rounded-tl-lg rounded-bl-lg overflow-hidden
     overflow-y-auto ease-in-out duration-300 lg:hidden   ${
       showSidebar ? "translate-x-0 " : "translate-x-full"
     }`}
      >
        <div className="w-full  flex justify-between items-center flex-row-reverse">
          <Image
            src="/close.svg"
            alt="close"
            width={32}
            height={32}
            className="lg:hidden cursor-pointer"
            onClick={closer}
          />

          <Link className="text-2xl text-primary font-extrabold" href={"/"}>
            <Image
              src={"/logo-no-background.png"}
              alt="logo"
              width={64}
              height={30}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-6 text-white text-center mt-10">
          {pages.map((p: page): ReactNode => {
            return (
              <Link
                key={p.path}
                className="hover:text-[#be78f5] text-white"
                href={p.path}
                onClick={closer}
              >
                {p.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={closer}
            className="mt-6 text-[#be78f5] py-2 bg-transparent border-2 border-[#be78f5] rounded-lg px-8 font-semibold lg:py-2 duration-300 hover:bg-[#be78f5] hover:text-[#212121] "
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
