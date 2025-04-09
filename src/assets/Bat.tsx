
import React from "react";

interface BatProps {
  className?: string;
  style?: React.CSSProperties;
}

const Bat: React.FC<BatProps> = ({ className = "", style = {} }) => {
  return (
    <svg
      width="50"
      height="30"
      viewBox="0 0 50 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M25 0C25 0 27.5 5 32.5 5C37.5 5 40 0 40 0C40 0 42.5 7.5 47.5 10C52.5 12.5 50 17.5 50 17.5C50 17.5 45 15 40 17.5C35 20 32.5 22.5 25 30C17.5 22.5 15 20 10 17.5C5 15 0 17.5 0 17.5C0 17.5 -2.5 12.5 2.5 10C7.5 7.5 10 0 10 0C10 0 12.5 5 17.5 5C22.5 5 25 0 25 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Bat;
