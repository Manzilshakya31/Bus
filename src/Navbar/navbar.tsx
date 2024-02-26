// import React, { useState } from "react";

import { useState } from "react";
import Bookmark from "../assets/icons/Bookmark";
import Currentlocation from "../assets/icons/Currentlocation";
import Location from "../assets/icons/Location";
import Recent from "../assets/icons/Recent";
import Menudash from "../assets/icons/menudash";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex">
      <aside className={` h-lvh top-0 bg-[#F6F6F6]  `}>
        <div className=" gap-[35px] grid-cols-1 flex flex-col justify-center items-center">
          <button onClick={handleClick}>
            <Menudash className="mt-[80px]" />
          </button>
          {showSidebar ? (
            <div className="grid gap-[35px] grid-cols-1 w-[336px] ml-[69px]">
              <span className="flex text-center items-center gap-4">
                <Location />
                Location
              </span>
              <span className="flex text-center items-center gap-4 pl-1">
                <Bookmark />
                Bookmark
              </span>{" "}
              <span className="flex text-center items-center gap-4">
                <Recent />
                Recent
              </span>{" "}
              <span className="flex text-center items-center gap-4 pl-1">
                <Currentlocation />
                Current location
              </span>
            </div>
          ) : (
            <div className="w-[100px] flex justify-center">
              <div className="grid gap-[35px] grid-cols-1">
                <Location />
                <Bookmark className="pl-1" />
                <Recent />
                <Currentlocation className="pl-1" />
              </div>
            </div>
          )}
        </div>
      </aside>
      <div>
        {/* <button className="cursor-pointer" onClick={handleClick}>
          {" "}
          toggle
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
