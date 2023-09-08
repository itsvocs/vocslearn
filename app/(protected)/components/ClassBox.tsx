/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { classNames, classrooms } from "./navbar";
import { HiChevronUpDown } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { mal } from "./overview/Cours";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

function ClassBox() {
  const { user } = useAuthContext();
  return (
    <Menu as="div" className=" relative">
      <div>
        <Menu.Button className="btn-outline w-[200px] h-[35px] justify-between font-medium">
          <span className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
            <img
              className="aspect-square h-full w-full"
              alt="Alicia Koch"
              src="https://avatar.vercel.sh/personal.png"
            />
          </span>
          {classrooms.find((s) => s.spitz === user?.classroom)?.title}
          <HiChevronUpDown
            className="ml-auto h-4 w-4 shrink-0 opacity-50"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="frag-menu">
          <div>
            <div className="flex items-center px-3">
              <CiSearch className="h-5 w-5 shrink-0 opacity-50" />
              <input
                type="text"
                placeholder="Chercher..."
                className="flex h-10 w-full border-none focus:ring-0 rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-color dark:placeholder:text-colorDark disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="py-2 space-y-1 max-h-[240px] overflow-y-auto overflow-x-hidden">
            {mal.map((i, k) => (
              <Menu.Item key={k}>
                {({ active }) => (
                  <Link
                    href="/overview"
                    className={classNames(
                      active ? "bg-zinc-100 dark:bg-zinc-800" : "",
                      "block px-4 py-2 text-sm text-primary dark:text-white rounded mx-2"
                    )}>
                    <div className="flex items-center space-x-2">
                      <span>
                        <img src={i.icon} alt={i.name} className="h-4 w-4" />
                      </span>
                      <span>{i.name}</span>
                    </div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-zinc-100 dark:bg-zinc-800" : " ",
                    "block px-4 py-2 text-sm text-black dark:text-colorBrut rounded mx-2"
                  )}>
                  Modifier ma classe
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ClassBox;
