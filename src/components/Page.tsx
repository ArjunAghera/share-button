import React from "react";
import { ShareButton } from "./ShareButton";
import { ToggleButton } from "./ToggleButton";

export const Page = () => {
  return (
    <div>
      <h1 className=" font-light text-4xl text-brandDark pt-14 pl-24 font-brandDefault">
        Click on Share button
      </h1>
      <div className=" pt-8 pl-24">
        <ShareButton color="dark" />
      </div>
    </div>
  );
};
