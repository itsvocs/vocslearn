"use client";
import TitleBar from "../components/overview/TitleBar";
import { useAuthContext } from "@/context/AuthContext";
import withAuth from "@/components/withAuth";
import Cours from "../components/overview/Cours";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Overview = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
    console.log(`Ceci est dans la page ovverview et voici le user`, user);
  });

  return (
    <main className="relative isolate overflow-hidden">
      <TitleBar />
      <Cours />
    </main>
  );
};

export default withAuth(Overview);
