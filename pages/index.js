import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/solid";
import DoctorsCard from "./ui/doctorsCard";

// 7FA4C6

export default function Home() {
  const [open, setOpen] = useState(1);
  const options = {
    activeTab:
      "inline-block px-9 py-2 text-xl text-white bg-void-blue  border-t border-x-0 rounded-t-lg dark:bg-void-blue dark:text-white ",
    inActiveTab:
      "inline-block px-9 py-2 text-xl text-black bg-white border-t border-x rounded-t-lg hover:text-white  hover:bg-void-blue ",
  };
  return (
    <div className="flex flex-col justify-center items-center	pt-20">
      <h1 className="font-bold text-void-blue text-4xl">
        Prendre RDV avec un(e) spécialiste à proximité de France
      </h1>
      <h2 className="text-2xl	">
        Trouver un spécialiste au sein des cliniques ELSAN
      </h2>
      <div className="w-1/2">
        <div className="pt-8 justify-start ">
          <ul
            className="flex flex-wrap text-sm font-medium text-center text-black    dark:text-black"
            data-tabs-toggle="#tabContent"
            role="tablist">
            <li className="mr-1" role="presentation">
              <button
                href="#"
                aria-current="page"
                data-tabs-target="#doctorsCard"
                role="tab"
                aria-controls="doctorsCard"
                aria-selected="false"
                onClick={() => setOpen(1)}
                // className="inline-block px-9 py-2 text-xl text-white bg-void-blue rounded-t-lg active dark:bg-void-blue dark:text-white"
                className={open == 1 ? options.activeTab : options.inActiveTab}>
                Specialistes
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                id="dashboard-tab"
                aria-current="page"
                data-tabs-target="#dashboard"
                role="tab"
                aria-controls="Dashboard"
                aria-selected="false"
                onClick={() => setOpen(2)}
                // className="inline-block px-9 py-2 text-xl rounded-t-lg  hover:text-white  hover:bg-void-blue dark:border-black dark:hover:bg-void-blue dark:hover:text-white"
                className={open == 2 ? options.activeTab : options.inActiveTab}>
                Dashboard
              </button>
            </li>
          </ul>
        </div>
        <div id="tabContent" className="border-t-4 border-void-blue">
          <div
            className={open == 1 ? "shadow-md w-full  divide-y " : "hidden"}
            id="doctorsCard"
            role="tabpanel"
            aria-labelledby="doctorsCard">
            <DoctorsCard />
            <DoctorsCard />
          </div>
          <div
            className={open == 2 ? "" : "hidden"}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="Dashboard">
            <h1>dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
