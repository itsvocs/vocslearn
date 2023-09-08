/* eslint-disable react/no-unescaped-entities */
import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import LightCard from "../../LightCard";
import DarkCard from "../../DarkCard";

export default function Theme() {
  const { user } = useAuthContext();
  return (
    <div
      className="border-t mt-8 border-zinc-100 dark:border-zinc-800 py-12"
      id="information">
      <h2 className="title font-medium text-lg">Apparence</h2>
      <p className="paragraphe text-sm mt-1 leading-6">
        Personnalisez l'apparence de l'application. Basculez automatiquement
        entre les thèmes de jour et de nuit.
      </p>

      <div className="grid w-full justify-center sm:max-w-xl grid-cols-2 gap-2 sm:gap-8 pt-5">
        <LightCard />
        <DarkCard />
      </div>
      <div className="w-full flex justify-center sm:justify-start pt-8">
        <button className="btn-outline">Synchroniser avec le systeme</button>
      </div>
    </div>
  );
}
