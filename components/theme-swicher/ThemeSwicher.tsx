"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowDown from "@/public/images/icons/svg/ArrowDown";

const ThemeSwicher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [showDrop, setShowDrop] = useState<boolean>(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
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
          className="  flex flex-row items-center gap-3 justify-center  "
        >
          {currentTheme === "dark" ? (
            <Image
              alt="sun"
              width={22}
              height={22}
              src={"/images/icons/svg/sun.svg"}
            />
          ) : (
            <Image
              src={"/images/icons/svg/moon.svg"}
              alt="moon"
              width={22}
              height={22}
              className="cursor-pointer"
              onClick={() => setShowDrop((prev) => !prev)}
            />
          )}
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
          } z-modalOver absolute top-7 -left-4 rounded-lg shadow-xl text-center
        text-sm overflow-hidden flex flex-col gap-1 bg-primary-bg text-white`}
        >
          <div
            className={`${
              theme === "dark"
                ? "bg-[#54ffa40f] text-primary border-primary"
                : "border-transparent"
            } py-1.5 px-4 hover:text-primary cursor-pointer hover:bg-[#54ffa40f] hover:border-primary  border rounded-lg`}
            onClick={() => setTheme("dark")}
          >
            Dark
          </div>
          <div
            className={`${
              theme === "light"
                ? "bg-[#54ffa40f] border-primary text-primary"
                : "border-transparent"
            } py-1.5 px-4 hover:text-primary cursor-pointer hover:bg-[#54ffa40f] hover:border-primary  border rounded-lg`}
            onClick={() => setTheme("light")}
          >
            Light
          </div>
          <div
            className={`${
              theme === "system"
                ? "bg-[#54ffa40f] border-primary text-primary"
                : "border-transparent"
            } py-1.5 px-4 hover:text-primary cursor-pointer hover:bg-[#54ffa40f] hover:border-primary  border rounded-lg`}
            onClick={() => setTheme("system")}
          >
            System
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwicher;
