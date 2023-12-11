"use client";
import NavLink from "../NavLink/Navlink";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ReactNode, useCallback, useEffect, useState } from "react";
import Image from "next/image";
// import LocaleSwitcher from "../local-swicher/LocalSwicher";
// import ThemeSwicher from "../theme-swicher/ThemeSwicher";

export type page = { path: string; label: string };

const SideBarMenu = dynamic(() => import("./SideBarMenu"), {
  ssr: false,
});
export const pages: page[] = [
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/#about",
    label: "About ME",
  },
  {
    path: "/#projects",
    label: "projects",
  },
  {
    path: "/#social",
    label: "Social media",
  },
];
const Header = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window?.pageYOffset);
  }, []);

  useEffect(() => {
    window?.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky w-full px-5 lg:px-10 ${
          scrollY > 0 && "bg-[#212121] duration-300"
        }    z-[10001] -top-1 `}
      >
        <div className={` w-full mx-auto py-4  ${scrollY > 0 && "shadow-lg"}`}>
          <div className="max-w-[1366px] justify-between mx-auto items-center flex">
            <div className="flex flex-row items-center gap-4 ">
              <div className="text-3xl text-[#be78f5] font-extrabold">
                <Link href={"/"}>
                  <Image
                    src={"/logo-no-background.png"}
                    alt="logo"
                    width={64}
                    height={30}
                  />
                </Link>
              </div>
              {/* <LocaleSwitcher /> */}
              {/* <ThemeSwicher /> */}
            </div>
            <div>
              <Image
                src={`/menu-icon.svg`}
                alt="menu"
                width={40}
                height={40}
                className="lg:hidden cursor-pointer"
                onClick={() => setShowSidebar((prev) => !prev)}
              />

              <div className="hidden lg:flex items-center flex-row gap-8 font-semibold text-nowrap">
                {pages?.map((p: page): ReactNode => {
                  return <NavLink key={p.path} {...p} />;
                })}
                <Link
                  href="/#contact"
                  className="bg-transparent border-2 border-[#be78f5] rounded-lg px-8 py-1 lg:py-2 duration-300 hover:bg-[#be78f5] text-[#be78f5] hover:text-[#212121]"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SideBarMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
