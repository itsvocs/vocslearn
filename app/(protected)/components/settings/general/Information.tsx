/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Profile } from "./Profile";
import PersonalInformation from "./PersonalInformation";
import Theme from "./Theme";
import { signOutUser } from "@/firebase/auth";

export default function Information() {
  return (
    <div className="px-4 lg:py-8 py-6 lg:flex-auto lg:p-0 ">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none flex flex-col ">
        <Profile />
        <PersonalInformation />
        <Theme />
        <div
          className="border-t mt-8 border-zinc-100 dark:border-zinc-800 py-12"
          id="information">
          <h2 className="title font-medium text-lg">Se déconnecter </h2>
          <p className="paragraphe text-sm mt-1 leading-6">
            En vous déconnectant, vous perdez l'acces à tout votre contenu
          </p>
          <button
            onClick={async () => {
              await signOutUser();
              window.location.reload();
            }}
            className="hover:underline mt-6 text-secondary">
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}
