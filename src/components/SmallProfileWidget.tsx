import React from "react";
import { Avatar } from "./Avatar";

type SmallProfileWidgetProps = {
  title: string;
};

export const SmallProfileWidget = ({ title }: SmallProfileWidgetProps) => {
  return (
    <div className="font-inter flex flex-row">
      <Avatar character={title.charAt(0)} size="small" rounded="md" />
      <div className="text-brandDark pl-2 cursor-pointer">
        <h4 className="text-lg pt-1">{title}</h4>
      </div>
    </div>
  );
};
