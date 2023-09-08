"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiMiniBars2 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mal } from "./overview/Cours";
import ClassBox from "./ClassBox";
import { IoClose } from "react-icons/io5";
import { PiHouseDuotone } from "react-icons/pi";
import { signOutUser } from "@/firebase/auth";
export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const navigate = [
  {
    name: "Appercu",
    icon: "/img/overview.png",
    iconBlue: "/img/overview-blue.png",
    path: "/overview",
  },
  {
    name: "Tableau de bord",
    icon: "/img/dashboard.png",
    iconBlue: "/img/dashboard-blue.png",
    path: "/dashboard",
  },
  {
    name: "Explorer",
    icon: "/img/explorer.png",
    iconBlue: "/img/explorer-blue.png",
    path: "/explore",
  },
  {
    name: "Calendrier",
    icon: "/img/calendar.png",
    iconBlue: "/img/calendar-blue.png",
    path: "/calendar",
  },

  {
    name: "Chat",
    icon: "/img/chat.png",
    iconBlue: "/img/chat-blue.png",
    path: "/chat",
  },
];

export const classrooms = [
  {
    title: "Terminale",
    spitz: "Tle",
  },
  {
    title: "Prémière",
    spitz: "1ere",
  },
  {
    title: "Seconde",
    spitz: "2nd",
  },
  {
    title: "Troisième",
    spitz: "3e",
  },
];

const nav_profile = [
  {
    name: "Profile",
    link: "/profile",
    icon: "/icons/profil.png",
  },
  {
    name: "Enrégistrés",
    link: "/speicher",
    icon: "/icons/bookmark.png",
  },

  {
    name: "Signaler un probleme",
    link: "/problem",
    icon: "/icons/problem.png",
  },
  {
    name: "Paramètres",
    link: "/settings",
    icon: "/icons/settings.png",
  },
  {
    name: "Changer l'apparence",
    link: "/settings",
    icon: "/icons/mode-sombre.png",
  },
];
export default function Navbar() {
  const { user } = useAuthContext();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b flex h-16 border-zinc-100 dark:border-zinc-800">
        <div className="mx-div  items-center justify-between">
          {/* Le panel de classe et de cours  */}
          <div className="flex flex-1 gap-x-6 ">
            <button
              className="lg:hidden p-2 -m-2 paragraphe"
              onClick={() => setOpen(true)}>
              <HiMiniBars2 className="h-6 w-6" />
            </button>
            <div className="hidden sm:block">
              <ClassBox />
            </div>
          </div>

          {/* les liens de navigation */}
          <nav>
            <nav className="hidden lg:flex gap-x-20 text-sm text-color dark:text-color font-[450] leading-6">
              {navigate.map((i, k) => (
                <Link
                  key={k}
                  href={i.path}
                  className={`hover:text-black dark:hover:text-colorBrut flex scale group ${
                    pathname === i.path ? "text-black dark:text-colorBrut" : ""
                  }`}>
                  <img
                    src={pathname === i.path ? i.iconBlue : i.icon}
                    alt={i.name}
                    className="w-6 h-6 mr-2 transition-transform scale-100 group-hover:scale-110"
                  />
                  {/* <span> {i.name}</span> */}
                </Link>
              ))}
            </nav>
          </nav>

          {/* le menu utilisateur  */}
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <button type="button" className="block">
              <span className="sr-only">View notifications</span>
              <img
                src="/icons/rings.png"
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/avatar/girl.png"
                    alt=""
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
                <Menu.Items className="frag-menu w-56">
                  <Menu.Item>
                    <div className="py-3 px-4 text-sm flex flex-col space-y-1.5">
                      <span className="text-primary dark:text-colorBrut leading-none">
                        {user?.firstName + " " + user?.lastName}
                      </span>
                      <span className="paragrahe truncate text-xs leading-none">
                        {user?.email}
                      </span>
                    </div>
                  </Menu.Item>
                  {nav_profile.map((i, k) => (
                    <Menu.Item key={k}>
                      {({ active }) => (
                        <Link
                          href={i.link}
                          className={classNames(
                            active ? "bg-zinc-100 dark:bg-zinc-800" : "",
                            "flex items-center space-x-2 px-4 py-3 text-sm text-primary dark:text-colorBrut"
                          )}>
                          <img src={i.icon} alt={i.name} className="w-5 h-5" />{" "}
                          <span> {i.name}</span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={async () => {
                          await signOutUser();
                          window.location.reload();
                        }}
                        className={classNames(
                          active ? "bg-zinc-100 dark:bg-zinc-800" : "",
                          "flex items-center justify-center space-x-2 px-4 py-4 text-sm text-primary dark:text-colorBrut"
                        )}>
                        <span> Se déconnecter</span>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </header>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="-translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="-translate-x-0"
                  leaveTo="-translate-x-full">
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <div className="absolute w-16 left-full top-0 flex justify-center pt-4 pr-4">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5 paragraphe outline-none border-none focus:ring-0"
                          onClick={() => setOpen(false)}>
                          <IoClose className="h-6 w-6 " aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex gap-y-5 h-full flex-col overflow-y-scroll bg-white dark:bg-black pb-6 pt-3 shadow-xl">
                      <div className="flex justify-start sm:hidden px-4 sm:px-6">
                        <ClassBox />
                      </div>
                      <nav className="relative mt-6 flex-1 px-4 sm:px-6 flex ">
                        <ul className="flex-1 space-y-6">
                          {navigate.map((i, k) => (
                            <li key={k} className="">
                              <Link
                                key={k}
                                href={i.path}
                                className={`hover:text-black dark:hover:text-colorBrut flex ${
                                  pathname === i.path
                                    ? "text-secondary dark:text-secondaryDark font-semibold"
                                    : "text-color"
                                }`}>
                                <img
                                  src={
                                    pathname === i.path ? i.iconBlue : i.icon
                                  }
                                  alt={i.name}
                                  className="w-6 h-6 mr-3 transition-all"
                                />
                                <span>{i.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
