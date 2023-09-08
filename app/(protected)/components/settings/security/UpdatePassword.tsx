import React from "react";

export default function UpdatePassword() {
  return (
    <>
      <h2 className="title font-medium text-lg ">Changer de mot de passe</h2>
      <p className="paragraphe text-sm mt-1 leading-6">
        Mettez à jour votre mot de passe associé à votre compte.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="password" className="label">
            Mot de passe actuel
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              className="input-default"
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="newPassword" className="label">
            Nouveau mot de passe
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="input-default"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="confirmPassword" className="label">
            Confirmer le mot de passe
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="input-default"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start pt-8 mt-5">
        <button className="btn-primary flex flex-end">Enregistrer</button>
      </div>
    </>
  );
}
