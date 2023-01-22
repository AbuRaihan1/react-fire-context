import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content d-flex justify-between">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
        <div>
          <Link to="/home" className="btn btn-ghost normal-case text-l">
            Home
          </Link>
          <Link to="/register" className="btn btn-ghost normal-case text-l">
            Register
          </Link>
          <Link to="/login" className="btn btn-ghost normal-case text-l">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
