import { Link } from "react-router-dom";
import { homePath } from "../paths";
const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={homePath}>Go to the home page</Link>
      </p>
    </div>
  );
};

export default NoMatch;
