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
          <>
            <DetailedProfileWidget
              title={profile.name}
              subtitle={profile.detail}
            />
          </>
        ))}
      </div>
    </div>
  );
};
