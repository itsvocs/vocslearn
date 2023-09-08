import { useAuthContext } from "@/context/AuthContext";
import React from "react";

export default function PersonalInformation() {
  const { user } = useAuthContext();
  return (
    <div
      className="border-t mt-8 border-zinc-100 dark:border-zinc-800 py-12"
      id="information">
      <h2 className="title font-medium text-lg">Informations Personnelles</h2>
      <p className="paragraphe text-sm mt-1 leading-6">
        Ces informations modiefirons le contenu de vos pages.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="label">
            Nom
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="input-default"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="label">
            Prénom
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="input-default"
            />
          </div>
        </div>

        <div className="sm:col-span-4 hidden">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="input-default"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="genre" className="label">
            Genre
          </label>
          <div className="mt-2">
            <select
              id="genre"
              name="genre"
              autoComplete="country-name"
              className="input-default">
              <option>Neutre</option>
              <option>Homme</option>
              <option>Femme</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="age" className="label">
            Âge
          </label>
          <div className="mt-2">
            <input
              id="age"
              name="age"
              type="number"
              className="input-default"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="label">
            Street address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="input-default"
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="label">
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="input-default"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="label">
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="input-default"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="label">
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="input-default"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end pt-8">
        <button className="btn-primary flex flex-end">Enregitrer</button>
      </div>
    </div>
  );
}
