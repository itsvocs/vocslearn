/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { HiChevronRight } from "react-icons/hi";

export default function Breadcrumb() {
  return (
    <nav className="flex">
      <ol className="flex items-center space-x-2">
        <li>
          <div>
            <Link href="/overview" className="paragraphe">
              <img
                src="/img/overview.png"
                alt="home"
                className="shrink-0 w-5 h-5"
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-sm">
            <HiChevronRight className="shrink-0 w-5 h-6 paragraphe" />
            <Link href="/overview" className="paragraphe pl-1">
              Terminale
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center text-sm">
            <HiChevronRight className="shrink-0 w-5 h-6 paragraphe" />
            <Link href="/overview" className="paragraphe pl-1">
              Mathématique
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
