import React, { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";
import { SharedTo } from "./SharedTo";
import { ShareTo } from "./ShareTo";
import api from "../api";
import { Profile } from "../types";

type ShareModalProps = {
  setClicked: (active: boolean) => void;
};

export const ShareModal = ({ setClicked }: ShareModalProps) => {
  const [profiles, setProfiles] = useState<Array<Profile>>([]);
  const [isSearchModel, setIsSearchModel] = useState(false);
  const handleSearch = () => {
    setIsSearchModel(true);
  };
  const fecthData = async () => {
    const response = await api("/profiles");
    const data = await response.data;
    setProfiles(data);
  };
  useEffect(() => {
    fecthData();
  }, []);
  const noAccessProfiles = profiles.filter(
    (profile) => profile.access === "No access"
  );
  const hasAccessProfiles = profiles.filter(
    (profile) => profile.access !== "No access"
  );
  console.log(noAccessProfiles);
  console.log(hasAccessProfiles);
  return (
    <div className="w-1/3 max-h-96 shadow-xl rounded-lg border border-brandLightGray">
      {!isSearchModel ? (
        <>
          <ShareTo />
          <SharedTo handleSearch={handleSearch} profiles={hasAccessProfiles} />
        </>
      ) : (
        <SearchModal profiles={noAccessProfiles} />
      )}
    </div>
  );
};
