import React from "react";

export default function Notify() {
  return (
    <div className="border-t mt-6 pt-4 border-zinc-100 dark:border-zinc-800">
      <p className="label">Me notifier à propos de</p>
      <div className="mt-6 space-y-6">
        <div className="flex items-center gap-x-3">
          <input
            id="push-everything"
            name="push-notifications"
            type="radio"
            className="input-radio"
          />
          <label htmlFor="push-everything" className="label font-normal">
            Tous les nouveaux messages
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="push-email"
            name="push-notifications"
            type="radio"
            className="input-radio"
          />
          <label htmlFor="push-email" className="label font-normal">
            Messages et mentions directes
          </label>
        </div>
        <div className="flex items-center gap-x-3">
          <input
            id="push-nothing"
            name="push-notifications"
            type="radio"
            className="input-radio"
          />
          <label htmlFor="push-nothing" className="label font-normal">
            Aucunes notifications
          </label>
        </div>
      </div>
    </div>
  );
}
