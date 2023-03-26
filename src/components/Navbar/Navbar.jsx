import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      <Link to="/">home</Link>
    </p>
    <p>
      <a href="#wgpt3">what is GPT3</a>
    </p>
    <p>
      <a href="#possibility">possibility</a>
    </p>
    <p>
      <Link to="/features">case studies</Link>
    </p>
    <p>
      <Link to="/blog">library</Link>
    </p>
  </>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
          <Link to="/sign-in">sign in</Link>
        </p>
        <button type="button">
          <Link>sign up</Link>
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="ffffff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="ffffff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <Link to="/">home</Link>
              </p>
              <p>
                <a href="#wgpt3" onClick={() => setToggleMenu(false)}>
                  what is GPT3
                </a>
              </p>
              <p>
                <a href="#possibility" onClick={() => setToggleMenu(false)}>
                  possibility
                </a>
              </p>
              <p>
                <Link to="/features" onClick={() => setToggleMenu(false)}>
                  case studies
                </Link>
              </p>
              <p>
                <Link to="/blog" onClick={() => setToggleMenu(false)}>
                  library
                </Link>
              </p>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>
                  <Link to="/sign-in">sign in</Link>
                </p>
                <button type="button">
                  <Link>sign up</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
