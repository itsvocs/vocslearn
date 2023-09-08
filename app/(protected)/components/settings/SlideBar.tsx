/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navigations = [
  {
    name: "Génerale",
    icon: "/icons/user.png",
    iconBlue: "/icons/user-blue.png",
    link: "/settings",
  },
  {
    name: "Connexion et sécurité",
    icon: "/icons/security.png",
    iconBlue: "/icons/security-blue.png",
    link: "/settings/security",
  },
  {
    name: "Notifications",
    icon: "/icons/rings.png",
    iconBlue: "/icons/rings-blue.png",
    link: "/settings/notifications",
  },
  {
    name: "Formule",
    icon: "/icons/plan.png",
    iconBlue: "/icons/plan-blue.png",
    link: "/settings/formule",
  },
  {
    name: "Factures",
    icon: "/icons/billing.png",
    iconBlue: "/icons/billing-blue.png",
    link: "/settings/billing",
  },
  {
    name: "Ma classe",
    icon: "/icons/users.png",
    iconBlue: "/icons/users-blue.png",
    link: "/classroom",
  },
  {
    name: "Aide",
    icon: "/icons/help.png",
    iconBlue: "/icons/help.png",
    link: "/help",
  },
];
export const SlideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex overflow-x-auto border-b border-zinc-100 dark:border-zinc-800 py-4 lg:block lg:w-64 w-full lg:flex-none lg:border-0 lg:py-8">
      <nav className="flex-none">
        <ul className="flex gap-x-3 gap-y-3 whitespace-nowrap lg:flex-col">
          {navigations.map((i, k) => (
            <li key={k}>
              <Link
                href={i.link}
                className={`flex gap-x-3 py-2 pl-2 pr-3 text-sm leading-6 transition-all  ${
                  pathname === i.link
                    ? "text-secondary dark:text-secondaryDark "
                    : "text-color dark:text-colorDark hover:text-primary  dark:hover:text-colorBrut"
                }`}>
                <img
                  src={pathname === i.link ? i.iconBlue : i.icon}
                  alt={i.name}
                  className="w-6 h-6 flex-shrink-0"
                />
                <span>{i.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
