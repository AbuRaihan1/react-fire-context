import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content d-flex justify-between">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Navbar
        </Link>
        <div>
          <Link to="/home" className="btn btn-ghost normal-case text-l">
            Home
          </Link>
          <Link to="/orders" className="btn btn-ghost normal-case text-l">
            Orders
          </Link>
          <Link to="/register" className="btn btn-ghost normal-case text-l">
            Register
          </Link>

          <Link>{user?.email}</Link>
          {user?.email ? (
            <Link onClick={handleLogOut} className="mx-3">
              {" "}
              <button className="btn btn-sm">Log out</button>
            </Link>
          ) : (
            <Link to="/login" className="mx-3">
              <button className="btn btn-sm">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
