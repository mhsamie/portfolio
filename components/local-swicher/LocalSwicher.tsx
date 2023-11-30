"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ArrowDown from "@/public/ArrowDown";

export default function LocaleSwitcher() {
  const path = usePathname();
  const [showDrop, setShowDrop] = useState<boolean>(false);

  return (
    <>
      <div
        className={`${
          showDrop ? "fixed" : "hidden "
        }  w-screen h-screen top-0 left-0 anim z-modalOverlay `}
        onClick={() => setShowDrop(false)}
      ></div>
      <div className="relative group cursor-pointer top-1">
        <div
          onClick={() => setShowDrop((prev) => !prev)}
          className="border-x  flex flex-row items-center gap-2 justify-center px-3 border-primary-dark"
        >
          <Image
            alt="trnsl"
            width={24}
            height={24}
            src={"/images/icons/svg/translate.svg"}
          />
          <ArrowDown
            className={`group cursor-pointer transition-all duration-300 ${
              showDrop ? "rotate-180" : ""
            }`}
            colorStyles={
              "fill-white stroke-[#649681] group-hover:stroke-primary"
            }
            width="16"
            height="16"
          />
        </div>
        <div
          className={`${
            !showDrop && "hidden"
          } z-modalOver absolute top-6 -left-1 rounded-lg shadow-xl text-center
        text-sm overflow-hidden flex flex-col gap-1 bg-primary-bg text-white`}
        >
          <Link
            href={path || "/"}
            locale="en"
            className="py-1.5 px-4 hover:text-primary  hover:bg-[#54ffa40f] hover:border-primary border-transparent border rounded-lg"
          >
            English
          </Link>

          <Link
            href={path || "/"}
            locale="de"
            className="py-1 px-4 hover:text-primary  hover:bg-[#54ffa40f] hover:border-primary border-transparent border rounded-lg"
          >
            Dutch
          </Link>
        </div>
      </div>
    </>
  );
}
