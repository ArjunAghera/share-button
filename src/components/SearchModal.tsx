import React, { useState } from "react";
import { Input } from "./Input";
import { sharedTo } from "../data/sharedTo";
import { SmallProfileWidget } from "./SmallProfileWidget";

export const SearchModal = () => {
  const isGroup = true;
  const isPerson = true;
  const handleClick = () => {};
  const shares = sharedTo.sharedTo;
  return (
    <div className=" text-brandDark pb-4">
      <Input
        placeholder="Search emails, names, or groups"
        onClick={handleClick}
        withDropdown={true}
      />
      {isPerson && (
        <div className=" ml-4 pt-4 pb-2">
          <p className=" pl-2 font-medium">Select a person</p>
          {shares.map((share) => (
            <SmallProfileWidget title={share.name} />
          ))}
        </div>
      )}
      {isGroup && (
        <div className=" ml-4 pt-4 pb-2">
          <p className=" pl-2 font-medium">Select a group</p>
          {shares.map((share) => (
            <SmallProfileWidget title={share.name} />
          ))}
        </div>
      )}
    </div>
  );
};
