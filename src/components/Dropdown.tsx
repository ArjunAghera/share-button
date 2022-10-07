import React from "react";

interface DropdownProps {
  name: string;
  options: string[];
  selected: string;
  bgColor: "gray" | "white";
  onChange: (event: any) => void;
}

export const Dropdown = ({
  name,
  options,
  selected,
  bgColor,
  onChange,
}: DropdownProps) => {
  const filteredOptions = options.filter((option) => option !== selected);
  const backgroundColor = bgColor === "gray" ? "bg-brandLightGray" : "bg-white";
  return (
    <select
      name={name}
      className={`${backgroundColor} outline-none w-28 `}
      onChange={onChange}
    >
      <option
        value={selected}
        defaultValue={selected}
        className=" outline-none"
      >
        {selected}
      </option>
      {filteredOptions.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
