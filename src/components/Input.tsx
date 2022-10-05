import React from "react";

type InputProps = {
  placeholder: string;
};

export const Input = ({ placeholder }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-brandDarkGray rounded-md w-full h-10 ml-4 pl-4"
      />
    </div>
  );
};
