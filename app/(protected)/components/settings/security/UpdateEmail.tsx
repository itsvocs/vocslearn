/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function UpdateEmail() {
  return (
    <div
      className="border-t mt-8 border-zinc-100 dark:border-zinc-800 py-12"
      id="information">
      <h2 className="title font-medium text-lg ">
        Modifier votre adresse email
      </h2>
      <p className="paragraphe text-sm mt-1 leading-6">
        Mettez à jour l'adresse mail lié à votre compte.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="email" className="label">
            Adresse email actuelle
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="input-default"
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="email" className="label">
            Nouvelle adresse email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="input-default"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start pt-8 mt-5">
        <button className="btn-primary flex flex-end">Enregistrer</button>
      </div>
    </div>
  );
}
