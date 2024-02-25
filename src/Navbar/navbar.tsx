// @ts-ignore
import React, { useState } from "react";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    function toggleSidebar(){
        setShowSidebar(!showSidebar);
    }

  return (
    <aside id="default-sidebar" className={showSidebar ? "siderbar active" : "sidebar"} aria-label="Sidebar">
        <div className = "logo">
            <img src="src/assets/logo/heron.png" alt="logo"/>
        </div>
        <button className= "toogleBtn" onClick= {toggleSidebar}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.75 28.5V25.3333H33.25V28.5H4.75ZM4.75 20.5833V17.4167H33.25V20.5833H4.75ZM4.75 12.6667V9.5H33.25V12.6667H4.75Z" fill="black"/>
        </svg>
        </button>
      {/*<div className=" top-0 w-[35vw] bg-blue-600 text-white fixed h-full ">*/}
          <div className = "navLink">
              {showSidebar ? (
                  <>
                      <li><a href="#"><img src="src/assets/sidebar/direction.png" alt="Direction" /></a></li>
                      <li><a href="#"><img src="src/assets/sidebar/bookmark.png" alt="Bookmark" /></a></li>
                      <li><a href="#"><img src="src/assets/sidebar/recent.png" alt="Recent" /></a></li>
                      <li><a href="#"><img src="src/assets/sidebar/placeholder.png" alt="Current location" /></a></li>
                  </>
              ) : (
                  <>

                      <li><a href="#"><img src="src/assets/sidebar/direction.png" alt="Direction" /><span>Direction</span></a></li>
                      <li><a href="#"><img src="src/assets/sidebar/bookmark.png" alt="Bookmark" /><span>Bookmark</span></a></li>
                      <li><a href="#"><img src="src/assets/sidebar/recent.png" alt="Recent" /><span>Recent</span></a></li>
                      <li><a href="#"><img src="src/assets/sidebar/placeholder.png" alt="Current location" /><span>Current Location</span></a></li>
                  </>
              )}

          </div>
        {/*<h2 className="mt-20 text-4xl font-semibold text-white">*/}

      {/*</div>*/}
    </aside>
  );
};



export default Navbar;
