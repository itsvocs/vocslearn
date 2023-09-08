// components/withAuth.tsx

import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/firebase/config";
// import LoadingSpinner from './LoadingSpinner'; // Créez un composant de chargement personnalisé

interface WithAuthProps {
  user: User | null;
}

const withAuth = (WrappedComponent: React.ComponentType<WithAuthProps>) => {
  const WithAuth = (props: WithAuthProps) => {
    const router = useRouter();
    const pathname = usePathname();
    // const auth = getAuth();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push(`/signin?redirect=${encodeURIComponent(pathname)}`); // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
        }
      });

      return () => unsubscribe();
    }, [pathname, router]);

    return <WrappedComponent {...props} />;
  };

  // Attribuez un nom d'affichage au composant
  WithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithAuth;
};

export default withAuth;
