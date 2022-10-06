import React from "react";
import web from "../public/web.png";
import { Avatar } from "./Avatar";

type DetailedProfileWidgetProps = {
  title: string;
  subtitle: string;
};

export const DetailedProfileWidget = ({
  title,
  subtitle,
}: DetailedProfileWidgetProps) => {
  return (
    <div className=" flex flex-row">
      <Avatar character={title.charAt(0)} size="large" rounded="full" />
      <div className="text-brandDark pl-4">
        <h4 className="text-lg">{title}</h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};
