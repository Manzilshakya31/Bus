import React from "react";
import BusTable from "./BusTable";

const PopBox = () => {
  return (
    <div className="w-[570px] bg-white">
      <span className="flex flex-col justify-center">
        <p className="text-center text-[24px]">KUMARIPATI BUS STOP</p>
        <BusTable />
      </span>
    </div>
  );
};

export default PopBox;
