import React from "react";

const Currentlocation = ({ className }: { className?: string }) => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.5 9.54545C12.4864 9.54545 10.0455 11.9864 10.0455 15C10.0455 18.0136 12.4864 20.4545 15.5 20.4545C18.5136 20.4545 20.9545 18.0136 20.9545 15C20.9545 11.9864 18.5136 9.54545 15.5 9.54545ZM27.6909 13.6364C27.382 10.8711 26.142 8.29301 24.1745 6.32549C22.207 4.35798 19.6289 3.11797 16.8636 2.80909V0H14.1364V2.80909C11.3711 3.11797 8.79301 4.35798 6.82549 6.32549C4.85798 8.29301 3.61797 10.8711 3.30909 13.6364H0.5V16.3636H3.30909C3.61797 19.1289 4.85798 21.707 6.82549 23.6745C8.79301 25.642 11.3711 26.882 14.1364 27.1909V30H16.8636V27.1909C19.6289 26.882 22.207 25.642 24.1745 23.6745C26.142 21.707 27.382 19.1289 27.6909 16.3636H30.5V13.6364H27.6909ZM15.5 24.5455C10.2227 24.5455 5.95455 20.2773 5.95455 15C5.95455 9.72273 10.2227 5.45455 15.5 5.45455C20.7773 5.45455 25.0455 9.72273 25.0455 15C25.0455 20.2773 20.7773 24.5455 15.5 24.5455Z"
        fill="#666666"
      />
    </svg>
  );
};

export default Currentlocation;
