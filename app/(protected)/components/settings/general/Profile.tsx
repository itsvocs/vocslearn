/* eslint-disable @next/next/no-img-element */
import { useAuthContext } from "@/context/AuthContext";
import React from "react";

export const Profile = () => {
  const { user } = useAuthContext();
  return (
    <>
      <h2 className="title font-medium text-lg ">Profile</h2>
      <p className="paragraphe text-sm mt-1 leading-6">
        Ces informations seront affichées publiquement, alors faites attention à
        ce que vous partagez.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full">
          <label htmlFor="photo" className="label">
            Photo
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <img
              src="/avatar/girl.png"
              className="h-12 w-12 rounded-full"
              aria-hidden="true"
              alt="Photo de profil"
            />
            <button type="button" className="btn-primary">
              Change
            </button>
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="cover-photo" className="label">
            Photo de couverture
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-200 dark:border-zinc-800 px-6 py-10">
            <div className="text-center">
              <img
                src="/icons/image.png"
                className="mx-auto h-12 w-12"
                aria-hidden="true"
                alt="photo de couverture"
              />
              <div className="mt-4 flex label">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white dark:bg-black font-semibold text-secondary dark:text-secondaryDark focus-within:outline-none focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 paragraphe">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="username" className="label">
            Pseudo
          </label>
          <div className="mt-2 relative">
            <span className="absolute top-2.5 left-2 paragraphe text-sm">
              @
            </span>
            <input
              type="text"
              id="username"
              className="input-default pl-6"
              placeholder="janesmith"
            />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="about" className="label">
            À propos
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="input-default"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 paragraphe">
            Write a few sentences about yourself.
          </p>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="etablissement" className="label">
            Établissement
          </label>
          <div className="mt-2">
            <select
              id="etablissement"
              name="about"
              className="input-default"
              defaultValue={""}
            />
          </div>
          <p className="mt-3 text-sm leading-6 paragraphe">
            Entrez le nom de votre Établissement.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end pt-8 mt-8">
        <button className="btn-primary flex flex-end">Enregistrer</button>
      </div>
    </>
  );
};
