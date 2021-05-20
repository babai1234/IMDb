import { FunctionComponent } from "react";

const Test: FunctionComponent<{
  username: string;
  profilePic: string;
  admin?: boolean;
}> = ({ admin, profilePic, username }) => {
  return <div>Test</div>;
};

export default Test;
