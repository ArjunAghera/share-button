import React from "react";
import questionIcon from "../public/question.png";
import copyLinkIcon from "../public/copyLink.png";

interface WidgetFooterProps {
  withCopyLink?: boolean;
}

export const WidgetFooter = ({ withCopyLink }: WidgetFooterProps) => {
  return (
    <div className=" bg-brandLightGray font-brandDeafult flex flex-row justify-between py-1.5 px-6 mt-2 border-t border-brandMdGray">
      <div className=" flex flex-row items-center cursor-pointer">
        <img src={questionIcon} alt="" className="h-3.5 w-3.5 mr-2" />
        <p className=" text-brandDarkGray">learn about sharing</p>
      </div>
      {withCopyLink && (
        <div className=" flex flex-row items-center cursor-pointer">
          <img src={copyLinkIcon} alt="" className="h-3.5 w-3.5 mr-2" />
          <p className=" text-brandDark">Copy link</p>
        </div>
      )}
    </div>
  );
};
