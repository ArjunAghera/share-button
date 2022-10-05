import React from "react";

type AvatarProps = {
  character: string;
  size: "large" | "small";
  rounded: "full" | "md";
};

export const Avatar = ({ character, size, rounded }: AvatarProps) => {
  const large = "h-8 w-8 text-lg";
  const small = "h-6 w-6 text-md";
  const roundedFull = "rounded-full";
  const roundedMd = "rounded-md";
  return (
    <p
      className={` items-center bg-brandDarkGray text-center text-white font-medium mt-2 ml-4 ${
        size === "large" ? large : small
      } ${rounded === "full" ? roundedFull : roundedMd} `}
    >
      {character}
    </p>
  );
};
