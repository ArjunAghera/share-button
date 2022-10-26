import React from 'react';

type ButtonProps = {
  color: 'dark' | 'light' | 'red';
  label: string;
  onClick: () => void;
};

export const Button = ({ color, label, onClick }: ButtonProps) => {
  return (
    <button
      className={`font-inter font-medium px-6 py-2 rounded-md ${
        color === 'dark'
          ? `bg-brandDark text-white`
          : color === 'light'
          ? `bg-brandLightGray border border-brandDark text-brandDark`
          : `bg-red-500 text-white`
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
