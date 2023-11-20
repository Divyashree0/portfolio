import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [locpath, setlocpath] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setlocpath(location.pathname);
  }, [location]);
  const hamburger = (value) => {
    setNavbar(value);
  };
  return (
    <div className="navbar">
      <div className="logo">Divya</div>
      <div className="container">
        <ul className="nav-links">
          {locpath === "/" ? "" : <Link to="/">Home</Link>}
          {locpath === "/about" ? "" : <Link to="/about">About</Link>}
          {locpath === "/education" ? "" : <Link to="/education">Education</Link>}
          {locpath === "/skills" ? "" : <Link to="/skills">Skills</Link>}
          {locpath === "/contact" ? "" : <Link to="/contact">Contact</Link>}
          {locpath === "/more_info" ? (
            ""
          ) : (
            <Link to="/more_info">More_Info</Link>
          )}
        </ul>
        <li className="hamburger">
          <span className="icon" onClick={() => hamburger(true)}>
            <button onClick={() => hamburger(true)}>&#9776;</button>
          </span>
        </li>
      </div>
      {navbar ? (
        <>
          <div id="mysidebar" className="sidebar">
            <span className="closebtn" onClick={() => hamburger(false)}>
              &times;
            </span>
            <ul>
              {locpath === "/" ? (
                ""
              ) : (
                <li>
                  <Link to="/" onClick={() => hamburger(false)}>
                    Home
                  </Link>
                </li>
              )}
              {locpath === "/about" ? (
                ""
              ) : (
                <li>
                  <Link to="/about" onClick={() => hamburger(false)}>
                    About
                  </Link>
                </li>
              )}
              {locpath === "/education" ? (
                ""
              ) : (
                <li>
                  <Link to="/education" onClick={() => hamburger(false)}>
                    Education
                  </Link>
                </li>
              )}
              {locpath === "/skills" ? (
                ""
              ) : (
                <li>
                  <Link to="/skills" onClick={() => hamburger(false)}>
                    Skills
                  </Link>
                </li>
              )}
              {locpath === "/contact" ? (
                ""
              ) : (
                <li>
                  <Link to="/contact" onClick={() => hamburger(false)}>
                    Contact
                  </Link>
                </li>
              )}
              {locpath === "/more_info" ? (
                ""
              ) : (
                <li>
                  <Link to="more_info" onClick={() => hamburger(false)}>
                    More_Info
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
export default Navbar;
