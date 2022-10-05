import React from "react";
import { DetailedProfileWidget } from "./DetailedProfileWidget";
import { ToggleButton } from "./ToggleButton";

export const ShareTo = () => {
  return (
    <>
      <div className=" flex flex-row py-4">
        <DetailedProfileWidget
          title="Share to web"
          subtitle="Publish and share link with anyone"
        />
        <div className=" ml-36">
          <ToggleButton />
        </div>
      </div>
      <div className="border border-brandLightGray" />
    </>
  );
};
