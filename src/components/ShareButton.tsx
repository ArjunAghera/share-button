import { useState } from "react";
import { Button } from "./Button";
import { ShareModal } from "./ShareModal";

interface ShareButtonProps {
  color: "dark" | "light";
}

export const ShareButton = ({ color }: ShareButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <>
      <div className="">
        <Button color={color} label="Share" onClick={handleClick} />
      </div>
      {clicked && <ShareModal />}
    </>
  );
};
