import React, { useState } from "react";
import { Input } from "./Input";
import { SmallProfileWidget } from "./SmallProfileWidget";
import { Profile } from "../types";
import { Dropdown } from "./Dropdown";
import { AccessLevel } from "../data/accessLevel";
import { Pill } from "./Pill";
import api from "../api";

interface SearchModalProps {
  profiles: Array<Profile>;
  setIsSearchModel: (boolean: boolean) => void;
}

export const SearchModal = ({
  profiles,
  setIsSearchModel,
}: SearchModalProps) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState<Profile>();
  const [selectedName, setSelectedName] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [accessLevel, setAccessLevel] = useState("No access");

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

  const handleSelectProfile = (profile: Profile) => {
    if (selectedName !== "") {
      alert("You have already selected " + selectedName);
    } else {
      setSelected(profile);
      setSelectedName(profile.userName);
      setIsSelected(true);
    }
  };

  const searchedProfiles = profiles.filter((profile) =>
    profile.userName.toLowerCase().includes(inputValue.toLowerCase())
  );

  const personProfiles = searchedProfiles.filter(
    (profile) => profile?.type === "person"
  );

  const groupProfiles = searchedProfiles.filter(
    (profile) => profile?.type === "group"
  );

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      if (searchedProfiles.length === 1) {
        setSelected(searchedProfiles[0]);
        setSelectedName(searchedProfiles[0].userName);
        setIsSelected(true);
      }
    }
  };

  const handleSelect = (event: any) => {
    setAccessLevel(event.target.value);
  };

  const handleInvite = async () => {
    if (accessLevel === "No access") {
      alert("Change access settings before sending invite!");
    } else {
      const res = await api.put(
        `http://localhost:5000/profiles/${selected?.id}/`,
        {
          id: selected?.id,
          userName: selected?.userName,
          detail: selected?.detail,
          access: accessLevel,
          type: selected?.type,
        }
      );
      setIsSearchModel(false);
    }
  };

  return (
    <div className=" text-brandDark pb-4 overflow-y-scroll max-h-96 scroll font-inter">
      {!isSelected ? (
        <Input
          placeholder="Search emails, names, or groups"
          onClick={handleClick}
          withDropdown={true}
          onChange={handleChange}
          value={inputValue}
          onKeyDown={handleEnter}
          isFocused={true}
        />
      ) : (
        <div className="w-full my-4 flex justify-start items-center bg-brandLightGray">
          <Pill
            name={selectedName}
            setIsSelected={setIsSelected}
            setSelected={setSelectedName}
          />
          <div className=" ml-auto mr-6">
            <Dropdown
              name="access"
              options={options}
              selected={AccessLevel.NONE}
              bgColor="gray"
              onChange={handleSelect}
            />
            <button
              className="px-2 py-0.5 ml-4 bg-white border border-brandDarkGray text-brandDark rounded-md"
              onClick={handleInvite}
            >
              Invite
            </button>
          </div>
        </div>
      )}
      {isPerson && personProfiles.length > 0 && (
        <div className=" ml-4 pt-4 pb-2">
          <p className=" pl-2 font-medium">Select a person</p>
          {personProfiles.map((profile) => (
            <div onClick={() => handleSelectProfile(profile)}>
              <SmallProfileWidget title={profile?.userName} />
            </div>
          ))}
        </div>
      )}
      {isGroup && groupProfiles.length > 0 && (
        <div className=" ml-4 pt-4 pb-2">
          <p className=" pl-2 font-medium">Select a group</p>
          {groupProfiles.map((profile) => (
            <div onClick={() => handleSelectProfile(profile)}>
              <SmallProfileWidget title={profile?.userName} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
