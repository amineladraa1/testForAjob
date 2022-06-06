import React, { useEffect, useState } from "react";
import * as dayjs from "dayjs";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/solid";

function CalendarRendezVs() {
  const days = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  const month = dayjs().month();
  const today = dayjs().date();
  const [todaySt, setTodaySt] = useState(dayjs().set("year", "2022"));
  const [startWeek, setStartWeek] = useState(todaySt.startOf("isoWeek"));

  const weekDays = Array.from(new Array(7).keys()).map((index) => {
    return startWeek.add(index, "day");
  });

  const handleClickForward = () => {
    setTodaySt(todaySt.startOf("isoWeek").add(7, "day"));
    setStartWeek(todaySt.startOf("isoWeek").add(7, "day"));
    console.log(today);
  };
  const handleClickBackward = () => {
    setTodaySt(todaySt.subtract(7, "days"));
    setStartWeek(todaySt.subtract(7, "days"));
  };

  return (
    <>
      <div className="w-full  shadow-lg bg-white rounded-md mt-2 ">
        <div className="grid grid-cols-9 flex-1 gap-1 p-4 items-center overflow-hidden ">
          <div className="justify-center">
            <button
              //this compare the first day of week date with the changing date
              disabled={today === todaySt.date() ? true : false}
              className="w-full flex items-center justify-center"
              onClick={handleClickBackward}>
              <span>
                <ChevronLeftIcon className="w-7 h-7 text-void-blue font-md  " />
              </span>
            </button>
          </div>
          {weekDays.map((day) => {
            return (
              <>
                <div className=" flex flex-col justify-center">
                  <p className="text-center font-bold text-void-blue-text text-sm">
                    {days[day.day()]}
                  </p>
                  <p className="text-center  text-void-blue-text text-sm">
                    {day.date() + " " + day.format("MMMM")}
                  </p>
                </div>
              </>
            );
          })}

          <div className="justify-center">
            <span className="cursor-pointer">
              <button
                className="w-full flex items-center justify-center "
                onClick={handleClickForward}>
                <ChevronRightIcon className="w-7 h-7 text-void-blue font-md" />
              </button>
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="h-40 w-11/12 rounded-t-lg bg-void-grey grid items-center justify-center  ">
            <div className="bg-white rounded-lg w-[500px] h-12 divide-black divide-x  shadow-lg  flex flex-row items-center justify-center ">
              <p className="text-xs font-bold px-2">
                Pas de disponibilité cette semaine
              </p>
              <button className="flex flex-row text-blue-600 px-2 text-sm font-bold hover:text-blue-500 ">
                <EyeIcon className="h-5 w-5 " />
                Prochain RDV le 25 juillet 2022
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalendarRendezVs;
