import React from "react";
import remove from "../public/x.png";

interface PillProps {
  name: string;
  setIsSelected: (boolean: boolean) => void;
  setSelected: (string: string) => void;
}

export const Pill = ({ name, setIsSelected, setSelected }: PillProps) => {
  const handleRemove = () => {
    setSelected("");
    setIsSelected(false);
  };
  return (
    <div className=" font-inter bg-brandMdGray flex flex-row m-2 p-2 rounded w-fit">
      <p className=" text-brandDark text-sm">{name}</p>
      <img
        src={remove}
        alt=""
        onClick={handleRemove}
        className=" h-2.5 w-2.5 ml-2 mt-1.5 cursor-pointer"
      />
    </div>
  );
};
