import { useState } from "react";
import { AccessLevel } from "../data/accessLevel";
import { Dropdown } from "./Dropdown";

type InputProps = {
  placeholder: string;
  onClick: (event: any) => void;
  onChange: (event: any) => void;
  value: string;
  withDropdown?: boolean;
};

export const Input = ({
  placeholder,
  onClick,
  withDropdown,
  onChange,
  value,
}: InputProps) => {
  const bgColor = withDropdown
    ? "bg-brandLightGray border-0"
    : "bg-white border border-brandDarkGray ";
  const options = [
    AccessLevel.ALL,
    AccessLevel.EDITOR,
    AccessLevel.VIEWER,
    AccessLevel.NONE,
  ];
  return (
    <div className="w-full my-4 flex justify-center">
      <input
        type="search"
        placeholder={placeholder}
        className={`rounded-l-md w-4/5 h-10 pl-4 ${bgColor}`}
        value={value || ""}
        onChange={onChange}
        onClick={onClick}
      />
      {withDropdown && (
        <Dropdown
          name="access"
          options={options}
          selected={AccessLevel.NONE}
          bgColor="gray"
        />
      )}
      <button className="px-4 py-1 text-lg bg-brandLightGray text-brandDark rounded-r-md">
        Invite
      </button>
    </div>
  );
};
