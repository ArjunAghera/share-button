import React from "react";
import { ShareTo } from "./ShareTo";

type ShareModalProps = {
  setClicked: (active: boolean) => void;
};

export const ShareModal = ({ setClicked }: ShareModalProps) => {
  return (
    <div className="w-1/3 max-h-96 shadow-xl rounded-lg border pt-1 border-brandLightGray">
      <ShareTo />
    </div>
  );
};
