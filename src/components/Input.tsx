import { AccessLevel } from "../data/accessLevel";
import { Dropdown } from "./Dropdown";

interface InputProps {
  placeholder: string;
  onClick: (event: any) => void;
  onChange: (event: any) => void;
  onKeyDown: (event: any) => void;
  value: string;
  withDropdown?: boolean;
  isFocused?: boolean;
}

export const Input = ({
  placeholder,
  onClick,
  withDropdown,
  onChange,
  value,
  isFocused,
  onKeyDown,
}: InputProps) => {
  const noFunctionality = () => {};
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
    <div className="font-inter w-full mb-4 flex justify-center">
      <input
        type="search"
        placeholder={placeholder}
        className={`rounded-l-md w-4/5 h-10 pl-4 ${bgColor} outline-none`}
        value={value || ""}
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
        autoFocus={isFocused}
      />
      {withDropdown && (
        <Dropdown
          name="access"
          options={options}
          selected={AccessLevel.NONE}
          bgColor="gray"
          onChange={noFunctionality}
        />
      )}
      <button className="px-4 py-1 text-lg bg-brandLightGray text-brandDark rounded-r-md">
        Invite
      </button>
    </div>
  );
};
