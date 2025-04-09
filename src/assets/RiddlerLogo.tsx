
import React from "react";

const RiddlerLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 5C25.1 5 5 25.1 5 50C5 74.9 25.1 95 50 95C74.9 95 95 74.9 95 50C95 25.1 74.9 5 50 5ZM50 85C30.7 85 15 69.3 15 50C15 30.7 30.7 15 50 15C69.3 15 85 30.7 85 50C85 69.3 69.3 85 50 85Z"
        fill="currentColor"
      />
      <path
        d="M50 25C46.7 25 44 27.7 44 31V50C44 53.3 46.7 56 50 56C53.3 56 56 53.3 56 50V31C56 27.7 53.3 25 50 25Z"
        fill="currentColor"
      />
      <circle cx="50" cy="70" r="6" fill="currentColor" />
    </svg>
  );
};

export default RiddlerLogo;
