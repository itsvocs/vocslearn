/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import withAuth from "@/components/withAuth";
import Link from "next/link";
const mal = [
  {
    moduleId: 1,
    leconTotal: 23,
    credit: 85,
    moduleName:
      "RELATIONS ET OPÉRATIONS FONDAMENTALES DANS L’ENSEMBLE DES NOMBRES RÉELS",
    chapitres: [
      {
        id: "I",
        name: "ARITHMETIQUE.",
        lecons: [
          "Division euclidienne dans ℕ",
          "Divisibilité dans ℤ",
          "Nombres premiers",
          "PGCD et PPCM de deux entiers",
          "Nombres premiers entre eux",
          " Ensemble ℤ/𝑛ℤ ",
        ],
      },
      {
        id: "II",
        name: "FONCTIONS NUMÉRIQUES D’UNE VARIABLE RÉELLE.",
        lecons: [
          "Fonction continue sur un intervalle",
          "Fonction continue et strictement monotone",
          "Représentations graphiques",
        ],
      },
      {
        id: "III",
        name: "SUITES NUMERIQUES",
        lecons: [
          " Raisonnement par récurrence sur IN.",
          "Suites monotones",
          " Etude de la convergence de certaines suites définies par 𝑈𝑛+1 = 𝑓(𝑈𝑛)",
        ],
      },
      {
        id: "IV",
        name: "PRIMITIVES D’UNE FONCTION CONTINUE SUR UN INTERVALLE",
        lecons: [
          "Primitives d’une fonction",
          "Suites monotones",
          " Etude de la convergence de certaines suites définies par 𝑈𝑛+1 = 𝑓(𝑈𝑛)",
        ],
      },
      {
        id: "V",
        name: "PRIMITIVES D’UNE FONCTION CONTINUE SUR UN INTERVALLE",
        lecons: [
          "Equations et inéquations dans lesquelles intervient ln",
          "Limites faisant intervenir ln ;",
          "Dérivées des fonctions définies à l’aide de ln",
          "Primitives des fonctions 𝑢/𝑢",
          " Etude de quelques fonctions faisant intervenir ln.",
        ],
      },
      {
        id: "VI",
        name: "FONCTION EXPONENTIELLE NEPERIENNE",
        lecons: [
          "équations et inéquations dans lesquelles intervient exp",
          " Limites",
          "Dérivée de 𝑒^𝑢, primitives de 𝑢′𝑒^𝑢",
          "Etude de quelques fonctions définies à l’aide de exp",
        ],
      },
      {
        id: "VII",
        name: "FONCTIONS :𝒙 ⟼ 𝒂^𝒙 et 𝒙 ⟼ 𝒙^𝒂",
        lecons: [
          "Logarithme de base 𝑎, 𝑎 > 0.",
          " Fonction 𝑒𝑥𝑝(𝑎), 𝑎 > 0.",
          " Fonctions du type 𝑥 ⟼ 𝑥^𝑎",
        ],
      },
      {
        id: "VIII",
        name: "CALCUL DES INTEGRALES",
        lecons: [
          "Présentation Propriétés",
          "Inégalité de la moyenne ; valeur moyenne",
          "Méthodes de calculs des intégrales :",
          "Application : Calculs d’aires ; calculs de volumes.",
          "Valeurs approchées d’une intégrale : méthode des rectangles.",
          "",
        ],
      },
      {
        id: "IX",
        name: "EQUATIONS DIFFERENTIELLES",
        lecons: [
          "Présentation et vocabulaire (degré, ordre d’une équation différentielle) ;",
          "Equation 𝑓′ = 𝑎𝑓 ;",
          "Equation 𝑎𝑓′′ + 𝑏𝑓 ′ + 𝑐𝑓 = 0 où a, b et c sont des réels",
          "Equation 𝑎𝑓′′ + 𝑏𝑓′ + 𝑐𝑓 = 𝑑'où 𝑑 est une constante.",
          "Valeurs approchées d’une intégrale : méthode des rectangles.",
          "",
        ],
      },
    ],
    color: "bg-blue-500",
    image: "/img/maths/pi.png",
  },
  {
    moduleId: 2,
    leconTotal: 23,
    credit: 25,
    moduleName: "ORGANISATION ET GESTION DES DONNÉES",
    chapitres: [
      {
        id: "I",
        name: "STATISTIQUES.",
        lecons: [" Tableaux à double entrées :", "Ajustements linéaires"],
      },
      {
        id: "II",
        name: "PROBABILITES.",
        lecons: [
          "Expériences aléatoires",
          "Probabilité d’un évènement",
          "Variables aléatoires : ",
          "Epreuves de Bernouilli ",
        ],
      },
      {
        id: "III",
        name: "THEORIE DES GRAPHES",
        lecons: [
          "Les graphes :",
          "Matrice d’adjacente d’un graphe :",
          "Graphe connexe ;",
          "Sous-graphe ;",
        ],
      },
    ],
    color: "bg-blue-500",
    image: "/img/maths/gamma.png",
  },
  {
    moduleId: 3,
    leconTotal: 23,
    credit: 60,
    moduleName: "CONFIGURATIONS ET TRANSFORMATIONS ÉLÉMENTAIRES DU PLAN",
    chapitres: [
      {
        id: "I",
        name: "GENERALITES SUR LES APPLICATIONS AFFINES PLANES ",
        lecons: [
          "Définition ; application linéaire associée.",
          "Expressions analytiques",
          "Composée et propriétés ;",
          "Cas des rotations et des réflexions planes.",
          " Cas des symétries glissées",
        ],
      },
      {
        id: "II",
        name: "NOMBRES COMPLEXES.",
        lecons: [
          "Expériences aléatoires",
          "Probabilité d’un évènement",
          "Variables aléatoires : ",
          "Epreuves de Bernouilli ",
        ],
      },
      {
        id: "III",
        name: "THEORIE DES GRAPHES",
        lecons: [
          "Les graphes :",
          "Matrice d’adjacente d’un graphe :",
          "Graphe connexe ;",
          "Sous-graphe ;",
        ],
      },
    ],
    color: "bg-blue-500",
    image: "/img/maths/beta.png",
  },
];
const CourPage = () => {
  return (
    <div className="paragraphe py-8">
      <h2 className="py-5 title text-lg md:text-xl uppercase">Mathématiques</h2>

      {mal.map((i, k) => (
        <div key={k}>
          {/* Titres principaux  */}
          <>
            <h4 className="mt-5 paragraphe font-semibold text-sm text-secondary dark:text-secondaryDark">
              Module {i.moduleId}
            </h4>
            <h2 className="py-3 title text-lg font-semibold">{i.moduleName}</h2>
          </>

          {i.chapitres.map((i2, k2) => (
            <div key={k2}>
              {/* Chapitres  */}
              <>
                <h3 className="mt-8  text-sm md:text-lg font-medium uppercase">
                  <span className="pr-5">{i2.id}</span>
                  <span>{i2.name}</span>
                </h3>
              </>

              {/* Les lecons  */}
              <div className="py-4">
                <ul className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 w-full px-2 sm:px-0">
                  {i2.lecons.map((i3, k3) => (
                    <Link href="/maths" key={k3}>
                      <li className="hover:scale-[1.02] scale-100 transition-all hover:shadow-sm cursor-pointer group overflow-hidden w-full rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <div className="border-b border-b-zinc-300/5 bg-zinc-50 dark:bg-zinc-950 p-6 truncate overflow-hidden whitespace-nowrap hover:whitespace-normal hover:overflow-visible">
                          <span className="title text-sm font-medium leading-6">
                            {i3}
                          </span>
                        </div>
                        <dl className="-my-2.5 px-6 py-4 text-sm leading-6">
                          <div className="flex justify-between gap-x-4 py-2.5">
                            <dt className="paragraphe">Parties importantes</dt>
                            <dd className="info info-zinc">10</dd>
                          </div>
                          <div className="flex justify-between gap-x-6 py-2.5 border-t border-zinc-100 dark:border-zinc-800">
                            <dt className="paragraphe">Maitrisés</dt>
                            <dd className="flex items-center gap-2 pt-1">
                              {/* <div className="text-primary dark:text-colorBrut text-xs">
                             0 / 18
                           </div> */}
                              <div className="info info-zinc">06 </div>
                            </dd>
                          </div>
                          <div className="flex justify-between gap-x-6 py-2.5 ">
                            <span className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 relative">
                              <div
                                className={`absolute left-0 top-0 h-full transition-all rounded-full dark:bg-zinc-300 bg-zinc-700`}
                                style={{ width: `0%` }}></div>
                            </span>
                          </div>
                        </dl>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default withAuth(CourPage);
