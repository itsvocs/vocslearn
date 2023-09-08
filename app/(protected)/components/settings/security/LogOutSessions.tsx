import React from "react";

export default function LogOutSession() {
  return (
    <div
      className="border-t mt-8 border-zinc-100 dark:border-zinc-800 py-12"
      id="information">
      <h2 className="title font-medium text-lg ">
        Se déconnecter des autres sessions
      </h2>
      <p className="paragraphe text-sm mt-1 leading-6">
        Veuillez saisir votre mot de passe pour confirmer que vous souhaitez
        vous déconnecter de vos autres sessions sur tous vos appareils.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="passwordSession" className="label">
            Mot de passe
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="passwordSession"
              id="passwordSession"
              className="input-default"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start pt-8 mt-5">
        <button className="btn-primary flex flex-end">
          Se déconnecter de tous les appareils
        </button>
      </div>
    </div>
  );
}
