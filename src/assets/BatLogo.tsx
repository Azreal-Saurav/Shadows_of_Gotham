
import React from "react";

const BatLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 0C50 0 55 10 65 10C75 10 80 0 80 0C80 0 85 15 95 20C105 25 100 35 100 35C100 35 90 30 80 35C70 40 65 45 50 60C35 45 30 40 20 35C10 30 0 35 0 35C0 35 -5 25 5 20C15 15 20 0 20 0C20 0 25 10 35 10C45 10 50 0 50 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BatLogo;
