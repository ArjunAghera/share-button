import React from "react";

type AvatarProps = {
  character: string;
  size: "large" | "small";
  rounded: "full" | "md";
};

export const Avatar = ({ character, size, rounded }: AvatarProps) => {
  const large = "h-8 w-8 text-lg mt-2 pt-0.5";
  const small = "h-6 w-6 text-md mt-1.5";
  const roundedFull = "rounded-full";
  const roundedMd = "rounded-md";
  return (
    <p
      className={` items-center bg-brandDarkGray text-center text-white font-medium font-inter ml-4 ${
        size === "large" ? large : small
      } ${rounded === "full" ? roundedFull : roundedMd} `}
    >
      {character}
    </p>
  );
};
