/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { db } from "@/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Stepper from "../components/Stepper";
import { LuLoader2 } from "react-icons/lu";
import errorMessages from "@/utils/errorMessages";

type FormValues = {
  lastName: string;
  firstName: string;
  classroom: string;
  email: string;
  section: string;
  password: string;
  profil: string;
};

const imagesroles = [
  {
    name: "Élève",
    role: "student",
    src: "/student.png",
    alt: "Image d'un élève/étudiant de vocslearn",
    className: "p-3 scale-105",
  },
  {
    name: "Parent d'élève",
    role: "parent",
    src: "/parent.png",
    alt: "Image d'un parent d'élève de vocslearn",
    className: "p-1 scale-125",
  },
  {
    name: "Profésseur(e)",
    role: "prof",
    src: "/prof.png",
    alt: "Image d'un profésseur de vocslearn",
    className: " p-3 scale-105",
  },
];
const sectionRoles = [
  {
    name: "francophone",
    title: "Francophone",
  },
  {
    name: "anglophone",
    title: "Anglophone",
  },
];
const Franco = [
  "CE1",
  "CE2",
  "CM1",
  "CM2",
  "6e",
  "5e",
  "4e",
  "3e",
  "2nd",
  "1ere",
  "Tle",
];

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [currentStep, setCurrentStep] = useState("profil");
  const [loading, setLoading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isEye, setIsEye] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const { lastName, firstName, classroom, section, email, password } = data;

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Un compte est cré e dans le firebase auth
      const user = userCredential.user;

      // Ajoutez les détails de l'utilisateur à Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        classroom: classroom,
        section: section,
        email: user.email,
        // Autres données utilisateur que vous souhaitez stocker
      });

      router.push("/dashboard");
      setLoading(false); // Redirigez vers la page de tableau de bord après l'inscription réussie
    } catch (error: any) {
      const message = errorMessages(error.code);

      setIsErr(true);
      seterrMsg(message);
      setLoading(false);
      console.error("Une erreur est survenue lors de la connexion: " + message);
    }
  };

  const resetInput = () => {
    reset(); // Renitialisation des valeurs de tous les champs.
    setCurrentStep("profil"); // Renialisation du UseState à sa valeur initale.
  };

  const validatePassword = (value: string) => {
    if (!value) {
      return "Le mot de passe est requis";
    }
    if (value.length < 8) {
      return "Le mot de passe doit contenir au moins 8 caractères";
    }
    if (!/[a-z]/.test(value) || !/[A-Z]/.test(value)) {
      return "Le mot de passe doit contenir au moins une lettre majuscule et une lettre minuscule";
    }
    if (!/[0-9]/.test(value)) {
      return "Le mot de passe doit contenir au moins un chiffre";
    }
    if (!/[@$!%*?&]/.test(value)) {
      return "Le mot de passe doit contenir au moins un caractère spécial";
    }
    return true;
  };

  const currentMsgEmail = "Cet adresse e-mail a déja un compte.";
  const newMsgEmail = (
    <span>
      Cet adresse e-mail a déja un compte.{" "}
      <Link
        href="/signin"
        className="link-underline text-xs hover:opacity-80 transition-opacity">
        Se connecter ?
      </Link>
    </span>
  );
  return (
    <>
      <div className="flex  flex-1 flex-col justify-center px-6 py-12 pt-24 lg:px-8">
        <h2 className="title text-4xl text-center">Inscription</h2>
        <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg ">
          <div
            className={`justify-center items-center space-x-3 text-sm ${
              currentStep !== "profil" ? "flex" : "hidden"
            }`}>
            <img
              src="/studentProfil.png"
              alt=""
              className="w-10 h-10 scale-110"
            />
            <span className="paragraphe">
              Tu es un{" "}
              <span className="font-medium">
                {imagesroles.find((s) => s.role === watch("profil"))?.name}
              </span>{" "}
              <span
                className={` ${
                  currentStep === "information" ? "not-sr-only" : "sr-only"
                }`}>
                en classe de{" "}
                <span className="font-medium">
                  {Franco.find((s) => s === watch("classroom"))}.
                </span>
              </span>
            </span>
            <button
              type="button"
              onClick={resetInput}
              className="text-red hover:text-red/80 transition-opacity font-semibold underline ">
              Modifier
            </button>
          </div>
          <div
            className={`mt-6 ${currentStep === "profil" ? "block" : "hidden"}`}>
            <p className="text-primary dark:text-colorBrut text-center pb-8">
              Je souhaite m'inscrire en tant que:
            </p>
            <div className="grid grid-cols-3 gap-6">
              {imagesroles.map((i, k) => (
                <label
                  key={k}
                  htmlFor={i.name}
                  className="rounded-full overflow-hidden relative bg-primary/5 dark:bg-primaryDark/10 cursor-pointer scale-100 hover:scale-105 transition-all hover:border-2 border-primary/10 dark:border-primaryDark/20">
                  <img
                    src={i.src}
                    alt={i.alt}
                    className={`w-full ${i.className}`}
                  />
                  <input
                    id={i.name}
                    type="radio"
                    value={i.role}
                    className="hidden"
                    {...register("profil", {
                      onChange: (e) => setCurrentStep("section"),
                      required: true,
                    })}
                  />
                </label>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {imagesroles.map((i, k) => (
                <label htmlFor={i.name} key={k} className="label text-center">
                  {i.name}
                </label>
              ))}
            </div>
          </div>
          <div
            className={`mt-6 ${
              currentStep === "section" ? "block" : "hidden"
            }`}>
            <p className="text-primary dark:text-colorBrut text-center pb-4">
              Dans quel système scolaire es tu?
            </p>
            <div className="grid grid-cols-1 gap-y-4 pt-5 px-10">
              {sectionRoles.map((i, k) => (
                <label
                  key={k}
                  htmlFor={i.name}
                  className="uppercases text-center py-2 label rounded bg-primary/5 dark:bg-primaryDark/10 cursor-pointer scale-100 hover:scale-105 transition-all ">
                  {i.title}
                  <input
                    id={i.name}
                    type="radio"
                    value={i.name}
                    className="hidden"
                    {...register("section", {
                      onChange: (e) => setCurrentStep("classroom"),
                      required: true,
                    })}
                  />
                </label>
              ))}
            </div>
          </div>
          <div
            className={`mt-6 ${
              currentStep === "classroom" ? "block" : "hidden"
            }`}>
            <p className="text-primary dark:text-colorBrut text-center pb-4">
              Dans quelle classe es tu?
            </p>
            <div className="grid grid-cols-4 gap-8 pt-5 px-10">
              {Franco.map((i) => (
                <label
                  key={i}
                  htmlFor={i}
                  className="uppercases text-center py-2 label rounded bg-primary/5 dark:bg-primaryDark/10 cursor-pointer scale-100 hover:scale-105 transition-all ">
                  {i}
                  <input
                    id={i}
                    type="radio"
                    value={i}
                    className="hidden"
                    {...register("classroom", {
                      onChange: (e) => setCurrentStep("information"),
                      required: "Ce champ est réquis.",
                    })}
                  />
                </label>
              ))}
            </div>
          </div>
          <div
            className={`mt-6 space-y-6  sm:mx-auto sm:w-full sm:max-w-sm ${
              currentStep === "information" ? "block" : "hidden"
            }`}>
            {isErr && (
              <p className="msg-error text-center mt-8">
                {errMsg === currentMsgEmail ? newMsgEmail : errMsg}
              </p>
            )}
            <div className="grid sm:grid-cols-2 gap-y-6 sm:gap-x-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Nom
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    {...register("firstName", {
                      required: "Ce champ est réquis.",
                      minLength: {
                        value: 3,
                        message: "Le nom doit avoir plus de 3 caractères.",
                      },
                    })}
                    className={`input ${
                      errors.firstName ? "input-error" : "input-default"
                    }`}
                  />
                  <p className="msg-error">{errors.firstName?.message}</p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Prénom
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    {...register("lastName", {
                      required: "Ce champ est réquis.",
                      minLength: {
                        value: 3,
                        message: "Le Prénom doit avoir plus de 3 caractères",
                      },
                    })}
                    className={`input ${
                      errors.lastName ? "input-error" : "input-default"
                    }`}
                  />

                  <p className="msg-error">{errors.lastName?.message}</p>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Ce champ est réquis.",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Adresse e-mail invalide.",
                    },
                  })}
                  className={`input ${
                    errors.email || isErr ? "input-error" : "input-default"
                  }`}
                />
                <p className="msg-error">{errors.email?.message}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="label">
                  Mot de passe
                </label>
              </div>
              <div className="mt-1.5 relative">
                <input
                  id="password"
                  type={isEye ? "text" : "password"}
                  {...register("password", { validate: validatePassword })}
                  className={`input ${
                    errors.password || isErr ? "input-error" : "input-default"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => {
                    isEye ? setIsEye(false) : setIsEye(true);
                  }}
                  className="absolute right-2 top-2">
                  <AiOutlineEye
                    className={`stroke-2 text-xl mt-px text-primary dark:text-primaryDark ${
                      isEye ? "hidden" : "flex"
                    }`}
                  />
                  <AiOutlineEyeInvisible
                    className={`stroke-2 text-xl mt-px text-primary dark:text-primaryDark ${
                      !isEye ? "hidden" : "flex"
                    }`}
                  />
                </button>
                <p className="msg-error"> {errors.password?.message} </p>
              </div>
              <div className="text-end mt-2">
                <Link href="/forgot-password" className="link link-ghost">
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading ? true : false}
                className={`btn w-full ${
                  loading ? "btn-loading animate-pulse" : "btn-primary"
                }`}>
                {loading ? (
                  <span className=" flex items-center">
                    <LuLoader2 className="mr-2 animate-spin text-base" />{" "}
                    Chargement...
                  </span>
                ) : (
                  "Créer mon compte"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer className="absolute bottom-10  w-full text-center text-sm text-color dark:text-colorDark">
        Déjá un compte ? {"  "}
        <Link href="/signin" className="link-blue font-semibold">
          Connecte toi !
        </Link>
      </footer>
    </>
  );
}
