import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { LanguageSelect, settings } from "config/C4";
import i18n from "config/i18n";

const Nav = () => {
  const { email, phone } = settings;
  const { global: { nav: { overview, personal, skillset, work } }} = i18n();
  return (
    <nav className="nav">
      <div className="nav__items">
        <NavLink to="/" exact activeClassName="selected">
          {overview}
        </NavLink>
        <NavLink to="/personal" activeClassName="selected">
          {personal}
        </NavLink>
        <NavLink to="/skills" activeClassName="selected">
          {skillset}
        </NavLink>
        <NavLink to="/portfolio" activeClassName="selected">
          Portfolio
        </NavLink>
        <NavLink to="/work" activeClassName="selected">
          {work}
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          Contact
        </NavLink>
      </div>
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
    </nav>
  );
};

export default Nav;
