/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import withAuth from "@/components/withAuth";
import { useAuthContext } from "@/context/AuthContext";
import { signOutUser } from "@/firebase/auth";
import { auth } from "@/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth"; // Importez le type User
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface DashboardProps {
  user: User | null;
}

const Dashboard = (props: DashboardProps) => {
  const { user } = useAuthContext();
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
    console.log(`Ceci est dans la page dashboard et voici le user`, user);
  });

  return (
    <>
      <h1>Tableau de Bord {user?.firstName}</h1>
      <button
        className="border rounded-md mx-2 py-1 cursor-pointer  border-black px-4"
        onClick={async () => {
          await signOutUser();
          window.location.reload();
        }}>
        Sign Out
      </button>
    </>
  );
};

export default withAuth(Dashboard);
