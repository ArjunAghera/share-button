import { Input } from "./Input";
import { DetailedProfileWidget } from "./DetailedProfileWidget";
import { Profile } from "../types";

interface SharedToProps {
  handleSearch: (event: any) => void;
  profiles: Array<Profile>;
}

export const SharedTo = ({ handleSearch, profiles }: SharedToProps) => {
  const noFunctionality = () => {};
  return (
    <div>
      <Input
        placeholder="People, emails, groups"
        onClick={handleSearch}
        withDropdown={false}
        onChange={noFunctionality}
        onKeyDown={noFunctionality}
        value=""
      />
      <div>
        {profiles.map((profile) => (
          <div className="pb-4 flex flex-row">
            <DetailedProfileWidget
              title={profile.userName}
              subtitle={profile.detail}
            />
            <p className=" ml-auto mr-4 text-brandDarkGray">{profile.access}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
