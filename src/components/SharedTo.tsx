import { Input } from "./Input";
import { DetailedProfileWidget } from "./DetailedProfileWidget";
import { Profile } from "../types";

interface SharedToProps {
  handleSearch: (event: any) => void;
  profiles: Array<Profile>;
}

export const SharedTo = ({ handleSearch, profiles }: SharedToProps) => {
  const handleChange = () => {};
  return (
    <div>
      <Input
        placeholder="People, emails, groups"
        onClick={handleSearch}
        withDropdown={false}
        onChange={handleChange}
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
