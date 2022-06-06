import { PlusIcon } from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/solid";
import ModalRendezVous from "./ModalRendezVous";
import React, { useState } from "react";

function DoctorsCard() {
  const [showModal, setShowModal] = useState(false);
  // function closeModal() {
  //   setShowModal(false);
  // }
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="grid items-center	hover:bg-void-orange hover:bg-opacity-10 grid grid-cols-6 gap-4 p-5 ">
      <div className="col-span-1 flex justify-center">
        <div className="relative">
          <img
            className="w-20 h-20 rounded-full "
            src="https://www.elsan.care/sites/default/files/styles/elsan_map_praticien_image/public/praticien_default.gif?h=4626e670"
            alt=""
          />
          <span className="top-0 -right-4  absolute flex justify-center items-center w-9 h-9 bg-void-orange   dark:border-gray-800 rounded-full">
            <PlusIcon className="h-7 w-7  text-white" />
          </span>
        </div>
      </div>
      <div className="        col-span-3">
        <h2 className="text-2xl font-semibold cursor-pointer no-underline hover:underline">
          Khaled BENFREHA
        </h2>
        <p>Cardiologue</p>
        <p className="text-void-orange font-semibold cursor-pointer no-underline hover:underline">
          clinique saint
        </p>
        <p className="cursor-pointer no-underline hover:underline">
          Tel : 022 1520132
        </p>
      </div>
      <div className="col-span-2 justify-self-center self-center">
        <button
          className="bg-void-orange px-2 py-1 text-base  font-medium  shadow-lg rounded-md text-white text-center inline-flex items-center"
          onClick={() => setShowModal(true)}>
          <div className="pr-1">
            <CalendarIcon className="h-5 w-5 text-white  " />
          </div>
          Rendez-vous
        </button>
      </div>
      {showModal ? (
        <ModalRendezVous handleCloseModal={handleCloseModal} />
      ) : null}
    </div>
  );
}

export default DoctorsCard;
