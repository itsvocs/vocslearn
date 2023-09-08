/* eslint-disable react/no-unescaped-entities */
"use client";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";

const emailNotification = [
  {
    title: "E-mails de communication",
    text: "Recevez des e-mails sur l'activité de votre compte.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "E-mails de marketing",
    text: "Recevez des e-mails sur les nouveaux produits, les fonctionnalités et bien plus encore.",
    defaultChecked: false,
    notEditable: false,
  },
  {
    title: "E-mail sociales",
    text: "Recevez des e-mails pour les demandes d'amis, les suivis et bien plus encore.",
    defaultChecked: false,
    notEditable: false,
  },
  {
    title: "E-mails d'information",
    text: "Recevez des e-mails informatives sur votre compte, vos cours et votre évolution.",
    defaultChecked: true,
    notEditable: false,
  },
  {
    title: "E-mails de sécurité",
    text: "Recevez des e-mails sur l'activité et la sécurité de votre compte.",
    defaultChecked: true,
    notEditable: true,
  },
];
export default function EmailNotification() {
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
    <div className="border-t mt-8 pt-8 border-zinc-100 dark:border-zinc-800">
      <h2 className="title font-medium text-base ">Notifications Email</h2>
      <div className="mt-6 space-y-6">
        {emailNotification.map((i, k) => (
          <div
            key={k}
            className="flex items-center gap-x-3 w-full justify-between max-w-xl ">
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
