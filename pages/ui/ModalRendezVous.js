import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";
import DropDownMotifConsul from "./DropDownMotifConsul";
import CalendarRendezVs from "./CalendarRendezVs";

function ModalRendezVous({ handleCloseModal }) {
  const [linkTracker, setLinkTracker] = useState(false);
  return (
    <>
      <div className="justify-center items-center flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-7/12 h-5/6	flex  ">
          <div className=" p-6 relative border-white border-[20px] shadow-lg relative flex flex-col overflow-y-auto  w-full bg-void-grey outline-none focus:outline-none">
            <div className="">
              <h2 className="text-2xl pt-10 text-void-blue-text font-bold text-center">
                Prenez rendez-vous avec le Dr Khaled Benfreha
              </h2>
              <button
                className="rounded-full absolute right-2 shadow-lg top-2 bg-white h-10 w-10 flex "
                onClick={handleCloseModal}>
                <span className="">
                  <XIcon className="h-10 w-10 text-void-orange  font-thin" />
                </span>
              </button>
            </div>

            <div className="flex flex-row pt-10 items-center ">
              <CheckCircleIcon className="h-10 w-10 text-green-600 m-0" />
              <p className="text-void-blue-text font-bold text-sm">
                Lieu de consultation
              </p>
            </div>
            <p className="text-void-blue-text text-sm pt-2 leading-relaxed pb-1">
              Centre de diagnostic de cardiologie <br /> 8 Rue du Grand Mouton,
              36000 Châteauroux
            </p>
            <button className="text-blue-700 bg-transparent w-40 py-2 font-semibold text-sm hover:text-blue-800 ">
              CHANGER DE LIEU
            </button>
            {/* divider */}
            <div className=" w-full border-b-2 " />
            {/* divider */}
            {linkTracker ? (
              <>
                <div className="flex flex-row  items-center ">
                  <CheckCircleIcon className="h-10 w-10 text-green-600 m-0" />
                  <p className="text-void-blue-text font-bold text-sm">
                    Lieu de consultation
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row items-center pt-4">
                  <div className="rounded-full w-7 h-7 bg-blue-600 text-white flex items-center justify-center text-sm font-semibold mr-2">
                    2
                  </div>
                  <p className="text-void-blue-text font-bold text-sm">
                    Motif de consultation
                  </p>
                </div>
              </>
            )}

            <div className="pt-2 pb-4">
              <DropDownMotifConsul setLinkTracker={setLinkTracker} />
            </div>
            {linkTracker ? (
              <>
                {/* divider */}
                <div className=" w-full border-b-2 " />
                {/* divider */}
                <div className="flex flex-row items-center pt-4 pb-4">
                  <div className="rounded-full w-7 h-7 bg-blue-600 text-white flex items-center justify-center text-sm font-semibold mr-2">
                    3
                  </div>
                  <p className="text-void-blue-text font-bold text-sm">
                    Motif de consultation
                  </p>
                </div>
                <CalendarRendezVs />
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default ModalRendezVous;

// <button
//                 className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={handleCloseModal}>
//                 Save Changes
//               </button>
