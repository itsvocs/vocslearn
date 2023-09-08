import React from "react";
import UpdatePassword from "../../components/settings/security/UpdatePassword";
import UpdateEmail from "../../components/settings/security/UpdateEmail";
import LogOutSession from "../../components/settings/security/LogOutSessions";
import DeleteAccount from "../../components/settings/security/DeleteAccount";

export default function page() {
  return (
    <div className="px-4 lg:py-8 py-6 lg:flex-auto lg:p-0 ">
      <UpdatePassword />
      <UpdateEmail />
      <LogOutSession />
      <DeleteAccount />
    </div>
  );
}
