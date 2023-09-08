import React from "react";
import Card from "../Card";

export const mal = [
  {
    name: "Mathématique",
    icon: "/img/cours/tle.png",
    nb_chapters: 14,
    nb_succes: 5,
    status: "Continuer",
    color: "bg-blue-500",
  },
  {
    name: "SVT",
    icon: "/img/cours/svt-tle.png",
    nb_chapters: 14,
    nb_succes: 0,
    status: "Commencer",
    color: "bg-sky-500",
  },
  {
    name: "Physique",
    icon: "/img/cours/physic-tle.png",
    nb_chapters: 10,
    nb_succes: 3,
    status: "Continuer",
    color: "bg-pink-500",
  },
  {
    name: "Philosophie",
    icon: "/img/cours/philo.png",
    nb_chapters: 12,
    nb_succes: 1,
    status: "Continuer",
    color: "bg-green-500",
  },
  {
    name: "Langue",
    icon: "/img/cours/langues-tle.png",
    nb_chapters: 9,
    nb_succes: 9,
    status: "Terminé",
    color: "bg-zinc-500",
  },
  {
    name: "Chime",
    icon: "/img/cours/chimic-tle.png",
    nb_chapters: 10,
    nb_succes: 8,
    status: "Continuer",
    color: "bg-purple-500",
  },
  {
    name: "Histoire",
    icon: "/img/cours/histoire.png",
    nb_chapters: 18,
    nb_succes: 10,
    status: "Continuer",
    color: "bg-teal-500",
  },
  {
    name: "Géographie",
    icon: "/img/cours/geo-tle.png",
    nb_chapters: 11,
    nb_succes: 11,
    status: "Terminé",
    color: "bg-amber-500",
  },
  {
    name: "ECM",
    icon: "/img/cours/ecm.png",
    nb_chapters: 11,
    nb_succes: 0,
    status: "Commencer",
    color: "bg-lime-700",
  },
  {
    name: "Allemand",
    icon: "/img/cours/langue.png",
    nb_chapters: 14,
    nb_succes: 5,
    status: "Continuer",
    color: "bg-indigo-600",
  },
];
export default function Cours() {
  return (
    <div className="mx-div">
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 w-full px-2 sm:px-0">
        {mal.map((i, k) => (
          <Card
            key={k}
            name={i.name}
            icon={i.icon}
            chapiter={i.nb_chapters}
            succes={i.nb_succes}
            status={i.status}
            color={i.color}
          />
        ))}
      </ul>
    </div>
  );
}
