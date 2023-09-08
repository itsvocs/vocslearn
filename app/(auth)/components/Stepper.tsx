import React from "react";
const step = [
  {
    name: "profil",
    num: 1,
  },
  {
    name: "section",
    num: 2,
  },
  {
    name: "classroom",
    num: 3,
  },
  {
    name: "information",
    num: 4,
  },
];
export default function Stepper({ currentStep, setCurrentStep }: any) {
  return (
    <div className="pt-6">
      <nav className="flex items-center justify-center">
        <p className="paragraphe font-medium text-sm pr-6">
          Étape {step.find((s) => s.name === currentStep)?.num} sur 4
        </p>
        <ol className=" flex items-center space-x-3">
          {step.map((i, k) => (
            <li key={k}>
              <span className="relative flex items-center justify-center">
                <span
                  className={`absolute w-5 h-5 p-px flex transition-opacity ease-in-out ${
                    i.name === currentStep ? "opacity-100" : "opacity-0"
                  }`}>
                  <span className="w-full h-full rounded-full bg-secondaryDark/25"></span>
                </span>
                <span
                  className={`stepper-button ${
                    i.num <=
                    (step.find((s) => s.name === currentStep)?.num || 0)
                      ? "bg-secondary"
                      : "bg-primary/10 dark:bg-primary"
                  } `}></span>
              </span>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
