// import React from "react";
import React from "react";
import Navbar from "./Navbar/navbar";
import PopBox from "./components/PopBox";

const Index = () => {
  return (
    <div className="flex">
      <div>
        <Navbar />
      </div>
      <div className="mt-[350px] flex justify-center w-full">
        <PopBox />
      </div>

      {/* <p>yo</p> */}
    </div>
  );
};

export default Index;
