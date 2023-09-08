/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

type Component = {
  name: string;
  icon: string;
  chapiter: number;
  succes: number;
  status: string;
  color: string;
};
export default function Card({
  name,
  icon,
  chapiter,
  succes,
  status,
  color,
}: Component) {
  const pourc = (succes / chapiter) * 100;

  return (
    <Link href="/maths">
      <li className="hover:scale-105 scale-100 transition-all hover:shadow-sm cursor-pointer group overflow-hidden w-full rounded-xl border border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-x-4 border-b border-b-zinc-300/5 bg-zinc-50 dark:bg-zinc-950 p-6">
          <div className="h-12 w-12 flex-none rounded-lg bg-white dark:bg-black object-cover ring-1 ring-zinc-300/5 flex justify-center items-center">
            <img src={icon} alt={name} className="h-6 w-6" />
          </div>
          <div className="text-sm text-black dark:text-colorBrut leading-6 font-medium">
            {name}
          </div>
          <div className="relative ml-auto">
            <button className="block text-color dark:text-colorDark -m-2.5 p-2.5">
              <HiDotsHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
        <dl className="-my-2.5 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-2.5">
            <dt className="paragraphe">Chapitres</dt>
            <dd className="info info-zinc">{chapiter}</dd>
          </div>
          <div className="flex justify-between gap-x-6 py-2.5 border-t border-zinc-100 dark:border-zinc-800">
            <dt className="paragraphe">Terminés</dt>
            <dd className="flex items-center gap-2 pt-1">
              {/* <div className="text-primary dark:text-colorBrut text-xs">
              0 / 18
            </div> */}
              <div className="info info-zinc">{succes} </div>
            </dd>
          </div>
          <div className="flex justify-between gap-x-6 py-2.5 ">
            <span className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 relative">
              <div
                className={`absolute left-0 top-0 h-full transition-all rounded-full dark:bg-zinc-300 bg-zinc-700`}
                style={{ width: `${pourc}%` }}></div>
            </span>
          </div>
        </dl>
      </li>
    </Link>
  );
}
