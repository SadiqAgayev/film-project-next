"use client";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div
        className="bg-amber-600 text-white rounded-lg p-3 text-2xl font-bold hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          placeholder="Search..."
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp mounted={mounted} />
      {menu.map((m, i) => (
        <MenuItem m={m} key={i} />
      ))}
    </div>
  );
};

export default Header;
