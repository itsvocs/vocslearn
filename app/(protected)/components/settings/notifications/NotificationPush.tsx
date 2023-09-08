/* eslint-disable react/no-unescaped-entities */
"use client";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";

const emailNotification = [
  {
    title: "Intéraction sur votre contenu.",
    text: "Recevoir des notifications lorqu'un utilisateur aime, commente ou intéragis sur votre contenu.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Intéraction sur des cours vous concernant",
    text: "Recevoir des notifications lorqu'un utilisateur poste ou intéragis avec un cours/exercices ou poste qui vous relis ou votre classe.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Demande de suivis",
    text: "Recevoir des notifications lorqu'un utilisateur suit votre compte ou votre classe.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Mention",
    text: "Recevoir des notifications lorqu'un utilisateur vous mentionne sur un poste.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Message et discussion (privé)",
    text: "Recevoir des notifications lorqu'un utilisateur vous envoie un message.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Message et discussion (classe)",
    text: "Recevoir des notifications lorqu'un utilisateur envoie un message dans votre groupe ou votre classe.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Notes et partages",
    text: "Recevoir des notifications lorqu'un éleve de votre classe partage une nouvelle note ou un nouvel contenu.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Rappels",
    text: "Recevoir des notifications si vous avez plus de 5 notifications nons lus..",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "Rappels d'examens",
    text: "Recevoir des notifications par rapport à vos evenements examents et vos évaluations",
    defaultChecked: true,
    notEditable: true,
  },
];
export default function NotificationPush() {
  const [enabled, setEnabled] = useState(emailNotification);

  // Fonction pour mettre à jour la valeur de defaultChecked
  const handleToggleDefaultChecked = (k: number) => {
    // Créez une copie de l'array pour éviter la mutation directe de l'état
    const updatedNotifications = [...enabled];
    // Inversez la valeur de defaultChecked pour l'élément spécifié
    updatedNotifications[k].defaultChecked =
      !updatedNotifications[k].defaultChecked;
    // Mettez à jour l'état avec la nouvelle copie modifiée
    setEnabled(updatedNotifications);
  };
  return (
    <div className=" border-t mt-8 pt-8 border-zinc-100 dark:border-zinc-800">
      <h2 className="title font-medium text-base ">Notifications Push</h2>
      <div className="mt-6 space-y-6">
        {emailNotification.map((i, k) => (
          <div
            key={k}
            className="flex items-center gap-x-3 w-full sm:justify-between max-w-xl ">
            <div>
              <button
                onClick={() => handleToggleDefaultChecked(k)}
                className="label text-xs sm:text-sm text-left">
                {i.title}
              </button>
              <p className="paragraphe text-xs sm:text-sm">{i.text}</p>
            </div>
            <Switch
              disabled={i.notEditable}
              checked={i.defaultChecked}
              onChange={() => handleToggleDefaultChecked(k)}
              className={`${
                enabled[k].defaultChecked
                  ? "bg-zinc-900 dark:bg-colorBrut"
                  : "dark:bg-zinc-800 bg-zinc-200"
              } input-checkbox-box  ${
                i.notEditable ? "opacity-10 cursor-not-allowed" : "opacity-100"
              }`}>
              <span
                aria-hidden="true"
                className={`${
                  enabled[k].defaultChecked ? "translate-x-4" : "translate-x-0"
                } input-checkbox-span`}
              />
            </Switch>
          </div>
        ))}
      </div>
    </div>
  );
}
