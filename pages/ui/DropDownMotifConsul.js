import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { createPopper } from "@popperjs/core";

function DropDownMotifConsul({ setLinkTracker }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownText, setdropDownText] = useState("Choisissez un motif");

  const btnReference = React.createRef();
  const dropDownRef = React.createRef();

  const OpenDropDowPopper = () => {
    createPopper(btnReference, dropDownRef, {
      placement: "bottom",
    });
    setShowDropDown(true);
  };
  const CloseDropDownPopper = () => {
    setShowDropDown(false);
  };
  return (
    <>
      <button
        ref={btnReference}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="w-full bg-white border-2 flex flex-row p-2 items-center"
        onClick={() =>
          showDropDown ? CloseDropDownPopper() : OpenDropDowPopper()
        }>
        <p className="text-base justify-start font-light">{dropDownText}</p>
        <span className="ml-auto">
          <ChevronDownIcon className="h-4 w-4 text-slate-300" />
        </span>
      </button>
      {/* DropDown */}

      <div
        className={
          (showDropDown ? "block " : "hidden ") +
          "w-full z-10 border border-black  flex flex-wrap list-none text-base  bg-white devider-y shadow-lg "
        }>
        <a
          className="text-sm  px-4 font-normal block w-full whitespace-nowrap bg-transparent cursor-pointer hover:bg-blue-700 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            setdropDownText(e.currentTarget.text);
            setShowDropDown(false);
            setLinkTracker(false);
          }}>
          Choisissez un motif
        </a>
        <a
          className="text-sm  px-4 font-normal block w-full whitespace-nowrap bg-transparent cursor-pointer  hover:bg-blue-700 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            setdropDownText(e.currentTarget.text);
            setShowDropDown(false);
            setLinkTracker(true);
          }}>
          Premiére consultation de cardiologie
        </a>
        <a
          className="text-sm  px-4 font-normal block w-full whitespace-nowrap bg-transparent cursor-pointer  hover:bg-blue-700 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            setdropDownText(e.currentTarget.text);
            setShowDropDown(false);
            setLinkTracker(true);
          }}>
          Consultation de suivi de cardiologie
        </a>
      </div>
    </>
  );
}

export default DropDownMotifConsul;
