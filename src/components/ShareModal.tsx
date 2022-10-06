import React, { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";
import { SharedTo } from "./SharedTo";
import { ShareTo } from "./ShareTo";
import api from "../api";
import { Profile } from "../types";
import { WidgetFooter } from "./WidgetFooter";

export const ShareModal = () => {
  const [profiles, setProfiles] = useState<Array<Profile>>([]);
  const [isSearchModel, setIsSearchModel] = useState(false);

  const withCopyLink = isSearchModel ? false : true;
  const handleSearch = () => {
    setIsSearchModel(true);
  };

  const fecthData = async () => {
    const response = await api.get("/profiles");
    const data = await response.data;
    setProfiles(data);
  };

  useEffect(() => {
    fecthData();
  }, [isSearchModel]);

  const noAccessProfiles = profiles.filter(
    (profile) => profile.access === "No access"
  );

  const hasAccessProfiles = profiles.filter(
    (profile) => profile.access !== "No access"
  );

  return (
    <div className="w-1/3 shadow-xl rounded-lg border border-brandLightGray">
      {!isSearchModel ? (
        <>
          <ShareTo />
          <SharedTo handleSearch={handleSearch} profiles={hasAccessProfiles} />
        </>
      ) : (
        <SearchModal
          profiles={noAccessProfiles}
          setIsSearchModel={setIsSearchModel}
        />
      )}
      <WidgetFooter withCopyLink={withCopyLink} />
    </div>
  );
};
