import { useState } from "react";
import { Button } from "./Button";
import { ShareModal } from "./ShareModal";

export const ShareButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <>
      <div>
        <Button color="dark" label="Share" onClick={handleClick} />
      </div>
      {clicked && <ShareModal />}
    </>
  );
};
