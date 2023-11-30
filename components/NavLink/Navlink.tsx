"use client";
import Link from "next/link";
//@ts-ignore
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ label, path }: any) {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Link
      className={`${
        path.includes(activeSegment)
          ? "border-[#be78f5] text-[#be78f5]"
          : "text-white border-transparent"
      } py-2 
    font-semibold bg-transparent duration-100 text-nowrap hover:border-primary border-b-2 hover:text-[#be78f5]`}
      href={path}
    >
      {label}
    </Link>
  );
}
