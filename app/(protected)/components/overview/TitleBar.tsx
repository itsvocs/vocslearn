/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { PiWechatLogoDuotone } from "react-icons/pi";
const navTitle = [
  {
    name: "Cours",
    isFocused: true,
  },
  {
    name: "Quizs",
    isFocused: false,
  },
  {
    name: "Exercices",
    isFocused: false,
  },
  {
    name: "Anciens sujets",
    isFocused: false,
  },
];
export default function TitleBar() {
  return (
    <header className="pb-4 pt-4 sm:pb-6">
      <div className="mx-auto flex max-w-8xl flex-wrap items-center gap-6 p-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <h1 className="text-base font-semibold leading-7 text-black dark:text-colorBrut">
          Appercu
        </h1>
        <div className="order-last flex w-full gap-x-8 text-sm leading-6 sm:order-none sm:w-auto sm:border-l sm:border-l-zinc-100 sm:dark:border-l-zinc-800 sm:pl-6 sm:leading-7 overflow-x-auto">
          {navTitle.map((i, k) => (
            <Link
              key={k}
              href="/overview"
              className={`hover:text-secondary dark:hover:text-secondaryDark font-medium transition-colors ${
                i.isFocused
                  ? "text-secondary dark:text-secondaryDark font-medium"
                  : "text-color dark:text-colorDark"
              }`}>
              {i.name}
            </Link>
          ))}
        </div>
        <Link href="/overview" className=" sm:btn-primary ml-auto space-x-3">
          <PiWechatLogoDuotone className="hidden sm:flex -ml-1.5 h-5 w-5" />
          <img
            src="/icons/help.png"
            alt="Button d'aide"
            className="sm:hidden h-7 w-7"
          />
          <span className="hidden sm:flex">Démander de l'aide</span>
        </Link>
      </div>
    </header>
  );
}
