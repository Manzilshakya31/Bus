import { useState } from "react";

import Bookmark from "../assets/icons/Bookmark";
import Currentlocation from "../assets/icons/Currentlocation";
import Location from "../assets/icons/Location";
import Recent from "../assets/icons/Recent";
import Menudash from "../assets/icons/menudash";
import React from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex">
      <aside className={` h-lvh top-0 bg-[#F6F6F6]  `}>
        <div className=" gap-[35px] grid-cols-1 flex flex-col justify-center items-center">
          {showSidebar ? (
            <img
              src="src/assets/logo/banner@2x.png"
              alt="Logo"
              className="h-[80px] mt-[70px]"
              onClick={handleClick}
            />
          ) : (
            <button onClick={handleClick}>
              <Menudash className="mt-[80px]" />
            </button>
          )}
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
              {/* <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Options
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div> */}
              {/* <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-1"
                    >
                      Duplicate
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-2"
                    >
                      Archive
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Move
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-4"
                    >
                      Share
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-5"
                    >
                      Add to favorites
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-6"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div> */}
              <Dropdown heading="Inside the valley" />
              <Dropdown heading="Outside the valley" />
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
