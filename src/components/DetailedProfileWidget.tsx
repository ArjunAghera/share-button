import React from "react";
import web from "../public/web.png";

type DetailedProfileWidgetProps = {
  title: string;
  subtitle: string;
};

export const DetailedProfileWidget = ({
  title,
  subtitle,
}: DetailedProfileWidgetProps) => {
  return (
    <>
      <p className=" h-8 w-8 rounded-full items-center bg-brandDarkGray text-center text-white font-medium text-lg mt-2 ml-4">
        {title.charAt(0)}
      </p>
      <div className="text-brandDark pl-4">
        <h4 className="text-lg">{title}</h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </>
  );
};
