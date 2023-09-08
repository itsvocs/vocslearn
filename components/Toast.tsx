/* eslint-disable @next/next/no-img-element */
import React from "react";
import toast from "react-hot-toast";
import {
  HiOutlineCheckCircle,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { IoClose } from "react-icons/io5";
type FormValues = {
  t: string;
  type: string;
  message: string;
  title: string;
  visibility: boolean;
};

const icons = [
  {
    type: "error",
    icon: <HiOutlineInformationCircle className="w-6 h-6 text-red" />,
  },
  {
    type: "success",
    icon: <HiOutlineCheckCircle className="w-6 h-6 text-green-500" />,
  },
];
function Toast({ t, type, message, title, visibility }: FormValues) {
  return (
    <div className="pointer-events-none fixed inset-0 flex items-end px-4 sm:items-start  ">
      <div className="flex w-full flex-col items-center sm:items-end">
        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-xl border dark:border-none border-opacity-60 ">
          <div className="p-4">
            <div className="flex items-start">
              {/* Icone  */}
              <div className="flex-shrink-0">
                {icons.find((i) => i.type === type)?.icon}
              </div>

              {/* Le message */}
              <div className="ml-3 w-0 flex-1 pt-0.5 text-sm">
                <p className="text-primary dark:text-primaryDark font-medium">
                  {title}
                </p>
                <p className="mt-1 text-primary/80 dark:text-primaryDark/70">
                  {message}
                </p>
              </div>

              <div className="flex-shrink-0 flex ml-4">
                <button
                  onClick={() => toast.remove(t)}
                  className="inline-flex text-lg rounded-md text-primary/80 dark:text-primaryDark/70">
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
