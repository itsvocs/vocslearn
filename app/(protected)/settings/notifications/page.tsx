import React from "react";
import Notify from "../../components/settings/notifications/Notify";
import EmailNotification from "../../components/settings/notifications/EmailNotification";
import NotificationPush from "../../components/settings/notifications/NotificationPush";

export default function page() {
  return (
    <div className="px-4 lg:py-8 py-6 lg:flex-auto lg:p-0 ">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none flex flex-col ">
        <h2 className="title font-medium text-lg ">Notifications</h2>{" "}
        <p className="paragraphe text-sm mt-1 leading-6">
          Configurez la façon dont vous recevez les notifications.
        </p>
        <Notify />
        <EmailNotification />
        <NotificationPush />
        <div className="flex w-full justify-start pt-8 mt-5">
          <button className="btn-primary flex flex-end">Enregistrer</button>
        </div>
      </div>
    </div>
  );
}
