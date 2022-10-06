import React from "react";

type DropdownProps = {
  name: string;
  options: string[];
  selected: string;
  bgColor: "gray" | "white";
};

export const Dropdown = ({
  name,
  options,
  selected,
  bgColor,
}: DropdownProps) => {
  const filteredOptions = options.filter((option) => option !== selected);
  const backgroundColor = bgColor === "gray" ? "bg-brandLightGray" : "bg-white";
  return (
    <select name={name} className={backgroundColor}>
      <option value={selected} selected>
        {selected}
      </option>
      {filteredOptions.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
