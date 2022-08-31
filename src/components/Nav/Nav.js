import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faPhoneAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { LanguageSelect, settings } from "config/C4";
import i18n from "config/i18n";
import logo from "assets/images/logo.svg";

const NavItems = ({ mobile, setNavOpen }) => {
  const {
    global: {
      nav: { overview, personal, skillset, work },
    },
  } = i18n();
  return (
    <div className="nav__items">
      <NavLink
        to="/"
        exact
        activeClassName="selected"
        onClick={() => {
          if (mobile) setNavOpen();
        }}
      >
        {overview}
      </NavLink>
      <NavLink
        to="/personal"
        activeClassName="selected"
        onClick={() => {
          if (mobile) setNavOpen();
        }}
      >
        {personal}
      </NavLink>
      <NavLink
        to="/skills"
        activeClassName="selected"
        onClick={() => {
          if (mobile) setNavOpen();
        }}
      >
        {skillset}
      </NavLink>
      <NavLink
        to="/portfolio"
        activeClassName="selected"
        onClick={() => {
          if (mobile) setNavOpen();
        }}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/work"
        activeClassName="selected"
        onClick={() => {
          if (mobile) setNavOpen();
        }}
      >
        {work}
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="selected"
        onClick={() => {
          if (mobile) setNavOpen();
        }}
      >
        Contact
      </NavLink>
    </div>
  );
};

const Nav = () => {
  const { email, phone } = settings;

  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="nav">
      <NavItems />
      <div className="nav__contact">
        <a href={`tel:${phone}`}>
          <FontAwesomeIcon icon={faPhoneAlt} />
        </a>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="nav__language">
        <LanguageSelect />
      </div>
      <div className="nav__mobile">
        <img className="nav__mobile--logo" src={logo} alt="" />
        <button
          type="button"
          className="nav__mobile--button"
          onClick={() => setNavOpen(!navOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`nav__mobile--content ${navOpen ? "open" : "closed"}`}>
          <div className="nav__mobile--header">
            <img className="nav__mobile--logo" src={logo} alt="" />
            <button
              type="button"
              className="nav__mobile--close"
              onClick={() => setNavOpen(!navOpen)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <LanguageSelect />
          <NavItems mobile={true} setNavOpen={setNavOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
