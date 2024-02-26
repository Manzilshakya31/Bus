import React from "react";

const Menudash = ({ className }: { className?: string }) => {
  return (
    <svg
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.75 19.5V16.3333H29.25V19.5H0.75ZM0.75 11.5833V8.41667H29.25V11.5833H0.75ZM0.75 3.66667V0.5H29.25V3.66667H0.75Z"
        fill="black"
      />
    </svg>
  );
};

export default Menudash;
