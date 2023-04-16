import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Probiders/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/pofile">
            Pofile
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="ml-2 btn btn-primary">
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
