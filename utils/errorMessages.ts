// errorMessages.ts

const errorMessages = (errorCode: string): string => {
  switch (errorCode) {
    case "auth/user-not-found":
      return "L'adresse e-mail n'existe pas.";
    case "auth/wrong-password":
      return "Mot de passe incorrect.";
    case "auth/email-already-in-use":
      return "Cet adresse e-mail a déja un compte.";
    case "auth/weak-password":
      return "Le mot de passe est trop faible. Il doit comporter au moins 6 caractères.";
    case "auth/invalid-email":
      return "L'adresse e-mail n'est pas valide.";
    case "auth/app-deleted":
      return "L'application n'est plus disponible.";
    case "auth/app-not-authorized":
      return "L'application n'est pas autorisée à utiliser Firebase.";
    case "auth/argument-error":
      return "Erreur d'argument inattendue.";
    case "auth/invalid-api-key":
      return "La clé API Firebase n'est pas valide.";
    case "auth/invalid-user-token":
      return "Le jeton utilisateur n'est pas valide.";
    case "auth/network-request-failed":
      return "Échec de la requête réseau.";
    case "auth/operation-not-allowed":
      return "Cette opération n'est pas autorisée.";
    case "auth/requires-recent-login":
      return "Une nouvelle connexion est requise pour cette opération.";
    case "auth/too-many-requests":
      return "Trop de tentatives de connexion. Veuillez réessayer plus tard.";
    case "auth/unauthorized-domain":
      return "Ce domaine n'est pas autorisé.";
    case "auth/user-disabled":
      return "Ce compte utilisateur est désactivé.";
    case "auth/user-token-expired":
      return "Le jeton utilisateur a expiré.";
    case "auth/web-storage-unsupported":
      return "Le stockage Web n'est pas pris en charge.";
    default:
      return "Une erreur est survenue. Veuillez réessayer.";
  }
};

export default errorMessages;
