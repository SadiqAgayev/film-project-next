"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const tabs = [
    {
      name: "En Populyar",
      url: "popular",
    },
    {
      name: "En Son",
      url: "latest",
    },
    {
      name: "Yaxinda Gelecekler",
      url: "upcoming",
    },
  ];
  const getQuery = useSearchParams().get("genre");
  return (
    <div className="p-5 my-5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === getQuery
              ? "underline underline-offset-8 text-amber-600"
              : ""
          }`}
          key={i}
          href={`?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
