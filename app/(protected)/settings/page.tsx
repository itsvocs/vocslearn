"use client";
import { useAuthContext } from "@/context/AuthContext";
import withAuth from "@/components/withAuth";
import Information from "../components/settings/general/Information";
import { SlideBar } from "../components/settings/SlideBar";

const Settings = () => {
  const { user } = useAuthContext();

  return <Information />;
};

export default withAuth(Settings);
