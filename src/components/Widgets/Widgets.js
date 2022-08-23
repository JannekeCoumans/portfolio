import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { settings, SkillWidget, SocialIcons } from "config/C4";
import i18n from "config/i18n";

import logo from 'assets/images/logo.svg';

const Widgets = () => {
  const { widgets } = i18n();
  return (
    <div className="widgets">
      <div className="widgets__logo">
        <img src={logo} alt="Portfolio Janneke Coumans" />
      </div>
      <Link to="/personal" className="widget widget__personal">
        <div className="widget__personal--image" />
        <div className="widget__personal--text">
          <h1>Janneke Coumans</h1>
          <p>Front-end Developer</p>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
      <div className="widget widget__skills">
        <h1>Skills</h1>
        <p>{widgets.skillsCopy}</p>
        <SkillWidget />
      </div>
      <div className="widget widget__social">
        <h1>{widgets.socialLinks}</h1>
        <p>{widgets.socialLinksCopy}</p>
        <SocialIcons />
      </div>
      <div className="widget widget__email">
        <a href={`mailto:${settings.email}`} className="widget__email--icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <div className="widget__email--text">
          <p>
            {widgets.contact.first} <span>{widgets.contact.span}</span> {widgets.contact.last}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
