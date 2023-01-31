import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation = () => {
  const router = useRouter();
  const pathSlug = router.asPath;

  const nav = [
    { name: "Calculator", link: "/", class: "rounded-r-none" },
    { name: "Converter", link: "/converter", class: "rounded-l-none" },
  ];
  return (
    <div className="flex items-center h-[40px] p-4 mt-4 w-full justify-center">
      {nav?.map((item, idx) => (
        <Link href={item.link} passHref key={idx} className="w-full">
          <button
            className={`py-3 w-full ${
              pathSlug === item.link ? "bg-[#0060E5] font-bold" : "bg-[#2D3440]"
            }`}
          >
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
