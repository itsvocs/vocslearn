/* eslint-disable @next/next/no-img-element */
"use client";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuLoader2 } from "react-icons/lu";
import errorMessages from "@/utils/errorMessages";
import { auth } from "@/firebase/config";

type FormValues = {
  email: string;
  password: string;
};

export default function Page() {
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
    console.log(`Ceci est dans la page signin et voici le user`, user);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isEye, setIsEye] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    const { email, password } = data;

    // remove space before und after the String
    const trimEmail = email.trim();
    try {
      await signInWithEmailAndPassword(auth, trimEmail, password);

      // toast.custom((t) => (
      //   <Toast
      //     t={t.id}
      //     visibility={t.visible}
      //     type="success"
      //     message={`Contant de vous révoir parmi nous 🫣.`}
      //     title="Connexion réussie !"
      //   />
      // ));

      console.log("Le user est normalement connecté");

      router.push("/overview"); // redirect to dashboard

      setLoading(false);
    } catch (error: any) {
      const message = errorMessages(error.code);

      setIsErr(true);
      seterrMsg(message);
      setLoading(false);
      console.error("Une erreur est survenue lors de la connexion: " + message);
    }
  };
  const currentMsgEmail = "L'adresse e-mail n'existe pas.";
  const newMsgEmail = (
    <span>
      L&#39;adresse e-mail n&#39;existe pas.{" "}
      <Link
        href="/signup"
        className="link-underline text-xs hover:opacity-80 transition-opacity">
        Créer un compte ?
      </Link>
    </span>
  );
  const currentMsgPsw = "Mot de passe incorrect.";
  const newMsgPsw = (
    <span>
      Mot de passe incorrect.{" "}
      <Link
        href="/forgot-passwort"
        className="link-underline text-xs hover:opacity-80 transition-opacity">
        Mot de passe oublié ?
      </Link>
    </span>
  );

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <h2 className="title text-4xl text-center">Connexion</h2>
        {isErr && (
          <p className="msg-error text-center mt-8">
            {errMsg === currentMsgEmail
              ? newMsgEmail
              : errMsg === currentMsgPsw
              ? newMsgPsw
              : errMsg}
          </p>
        )}
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label htmlFor="email" className="label">
                Adresse email
              </label>
              <div className="form-inputs">
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
                />{" "}
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
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Ce champ est réquis.",
                  })}
                  className={`input ${
                    errors.password || isErr ? "input-error" : "input-default"
                  }`}
                />
                <p className="msg-error">{errors.password?.message}</p>
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
                  "Se connecter"
                )}
              </button>
            </div>
          </form>

          <div className="mt-16 hidden">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-color dark:border-colorDark opacity-40"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6 ">
                <span className="bg-white dark:bg-black px-6 text-primary dark:text-primaryDark">
                  Ou continuer avec
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-x-5">
              <button className="btn text-black bg-white border border-color border-opacity-20 dark:border-none">
                <FcGoogle className="text-lg" />
              </button>
              <button className="btn text-white bg-black dark:border dark:border-gray-800">
                <FaApple className="text-lg" />
              </button>
              <button className="btn text-white bg-secondary">
                <FaFacebookF className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-10  w-full text-center text-sm text-color dark:text-colorDark">
        Pas de compte? {"  "}
        <Link href="/signup" className="link-blue font-semibold">
          Inscris toi mainténant
        </Link>
      </p>
    </>
  );
}
