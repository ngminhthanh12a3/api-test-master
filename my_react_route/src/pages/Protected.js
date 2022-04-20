import { Link, Outlet } from "react-router-dom";
const Protected = () => {
  return (
    <div>
      <h1>Protected Pages</h1>
      <nav>
        <Link to="/">Device Infomations</Link>|{" "}
      </nav>
      <Outlet />
    </div>
  );
};

export default Protected;
