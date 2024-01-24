import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top "
      style={{ backgroundColor: "#5c5be5" }}
    >
      <div className="container">
        <Link className="navbar-brand text-white" to="#">
          spendWise
        </Link>

        <div className="navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {!userId && (
              <li className={`nav-item ${isActiveLink("/") && "active"}`}>
                <Link
                  to="/"
                  className={`nav-link text-white ${
                    isActiveLink("/") ? "border-bottom border-2" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
            )}
            <li className={`nav-item ${isActiveLink("/Features") && "active"}`}>
              <Link
                to="/Features"
                className={`nav-link text-white ${
                  isActiveLink("/Features") ? "border-bottom border-2" : ""
                }`}
              >
                Features
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink("/About-Me") && "active"}`}>
              <Link
                to="/About-Me"
                className={`nav-link text-white ${
                  isActiveLink("/About-Me") ? "border-bottom border-2" : ""
                }`}
              >
                About Me
              </Link>
            </li>
            {userId ? (
              <>
                <li
                  className={`nav-item ${isActiveLink("/Sign-up") && "active"}`}
                >
                  <Link
                    to="/dashboard"
                    className={`nav-link text-white ${
                      isActiveLink("/dashboard") ? "border-bottom border-2" : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className={`nav-item`}>
                  <button
                    className={`btn btn-sm m-2 logout-button`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li
                  className={`nav-item ${isActiveLink("/Login") && "active"}`}
                >
                  <Link
                    to="/Login"
                    className={`nav-link text-white ${
                      isActiveLink("/Login") ? "border-bottom border-2" : ""
                    }`}
                  >
                    Login
                  </Link>
                </li>
                <li
                  className={`nav-item ${isActiveLink("/Sign-up") && "active"}`}
                >
                  <Link
                    to="/Sign-up"
                    className={`nav-link text-white ${
                      isActiveLink("/Sign-up") ? "border-bottom border-2" : ""
                    }`}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
