import { auth } from "@/firebase/config";

export default function Home() {
  const user = auth.currentUser;

  console.log(`Ceci est dans la page et voici le user`, user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World !
    </main>
  );
}
