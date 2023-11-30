"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socilaMedia = [
    { title: "instagram", link: "#" },
    { title: "linkedin", link: "https://www.linkedin.com/in/fatemeh-samie/" },
    { title: "github", link: "https://github.com/mhsamie" },
    { title: "medium", link: "https://medium.com/@samiefatemeh99" },
    { title: "youtube", link: "https://www.youtube.com/@The_buggers" },
  ];
  return (
    <footer
      id="social"
      className="max-w-[1366px] px-5 lg:px-10 xl:px-0 flex justify-between w-full py-4 "
    >
      <Link href={"/"}>
        <Image
          src={"/logo-no-background.png"}
          alt="logo"
          width={64}
          height={30}
        />
      </Link>
      <div className="flex gap-2 items-center">
        {socilaMedia.map((s) => (
          <Link href={s.link}>
            <Image
              src={`/${s.title}.svg`}
              alt={s.title}
              width={32}
              height={32}
              className="w-6 h-6 lg:w-8 lg:h-8"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
