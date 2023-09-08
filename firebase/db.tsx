import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";
import { User } from "firebase/auth"; // Importez le type User

export interface UserData {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  classroom: string;
  // Assurez-vous que cette propriété est présente
  // Autres propriétés si nécessaire
}

// Fonction pour récupérer les informations de l'utilisateur depuis Firestore
export const getUserData = async (userId: string): Promise<UserData | null> => {
  const userRef = doc(db, "users", userId);

  try {
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data() as UserData; // Effectuez une opération de type ici
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur :",
      error
    );
    return null;
  }
};
