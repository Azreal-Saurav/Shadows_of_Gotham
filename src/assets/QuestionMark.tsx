
import React from "react";

interface QuestionMarkProps {
  className?: string;
  style?: React.CSSProperties;
}

const QuestionMark: React.FC<QuestionMarkProps> = ({ className = "", style = {} }) => {
  return (
    <svg
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M20 0C12.3 0 6 6.3 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 12.3 19.3 11 21 11C22.7 11 24 12.3 24 14C24 15.7 22.7 17 21 17H20C16.7 17 14 19.7 14 23V30C14 33.3 16.7 36 20 36C23.3 36 26 33.3 26 30C26 26.7 23.3 24 20 24V23C28.3 23 35 16.3 35 8C35 3.6 32.9 0 28.5 0H20Z"
        fill="currentColor"
      />
      <circle cx="20" cy="50" r="10" fill="currentColor" />
    </svg>
  );
};

export default QuestionMark;
