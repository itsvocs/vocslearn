/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function DeleteAccount() {
  return (
    <div
      className="border-t mt-8 border-zinc-100 dark:border-zinc-800 py-12"
      id="information">
      <h2 className="title font-medium text-lg ">Supprimer son compte</h2>
      <p className="paragraphe text-sm mt-1 leading-6">
        Vous ne souhaitez plus utiliser notre service ? Vous pouvez supprimer
        votre compte ici. Cette action n'est pas réversible. Toutes les
        informations liées à ce compte seront supprimées définitivement.
      </p>
      <div className="flex w-full justify-start pt-8 mt-5">
        <button className="btn-destructive flex flex-end">
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}
