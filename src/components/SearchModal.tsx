import React, { useState } from "react";
import { Input } from "./Input";
import { SmallProfileWidget } from "./SmallProfileWidget";
import { Profile } from "../types";
import { Dropdown } from "./Dropdown";
import { AccessLevel } from "../data/accessLevel";
import { Pill } from "./Pill";

interface SearchModalProps {
  profiles: Array<Profile>;
}

export const SearchModal = ({ profiles }: SearchModalProps) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const isGroup = true;
  const isPerson = true;
  const handleClick = () => {};
  const options = [
    AccessLevel.ALL,
    AccessLevel.EDITOR,
    AccessLevel.VIEWER,
    AccessLevel.NONE,
  ];
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleSelectProfile = (name: string) => {
    if (selected !== "") {
      alert("You have already selected " + selected);
    } else {
      setSelected(name);
      setIsSelected(true);
    }
  };
  console.log(selected);
  const searchedProfile = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const personProfiles = searchedProfile.filter(
    (profile) => profile.type === "person"
  );
  const groupProfiles = searchedProfile.filter(
    (profile) => profile.type === "group"
  );
  return (
    <div className=" text-brandDark pb-4 overflow-y-scroll h-96 scroll font-brandDeafult">
      {!isSelected ? (
        <Input
          placeholder="Search emails, names, or groups"
          onClick={handleClick}
          withDropdown={true}
          onChange={handleChange}
          value={inputValue}
        />
      ) : (
        <div className="w-full my-4 flex justify-start items-center bg-brandLightGray">
          <Pill
            name={selected}
            setIsSelected={setIsSelected}
            setSelected={setSelected}
          />
          <div className=" ml-auto mr-6">
            <Dropdown
              name="access"
              options={options}
              selected={AccessLevel.NONE}
              bgColor="gray"
            />
            <button className="px-2 py-0.5 ml-4 bg-white border border-brandDarkGray text-brandDark rounded-md">
              Invite
            </button>
          </div>
        </div>
      )}
      {isPerson && (
        <div className=" ml-4 pt-4 pb-2">
          <p className=" pl-2 font-medium">Select a person</p>
          {personProfiles.map((profile) => (
            <div onClick={() => handleSelectProfile(profile.name)}>
              <SmallProfileWidget title={profile.name} />
            </div>
          ))}
        </div>
      )}
      {isGroup && (
        <div className=" ml-4 pt-4 pb-2">
          <p className=" pl-2 font-medium">Select a group</p>
          {groupProfiles.map((share) => (
            <SmallProfileWidget title={share.name} />
          ))}
        </div>
      )}
    </div>
  );
};
