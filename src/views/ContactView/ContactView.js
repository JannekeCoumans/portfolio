import React from "react";
import { ContentHeader, i18n, settings } from "config/C4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactView = () => {
  const { contactview } = i18n();
  return (
    <div className="contactView">
      <div className="contactView__grid">
        <div className="contactView__grid--content">
          <ContentHeader title={contactview.title} />
          <p>
            {contactview.copy1}
            <a href={`mailto:${settings.email}`}>{settings.email}</a>.
          </p>
          <p>
            {contactview.copy2}
            <a href={`tel:${settings.phone}`}>{settings.phone}</a>.
          </p>

          <div className="socialLinks">
            <a href={`mailto:${settings.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={`tel:${settings.phone}`}>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </a>
            <a
              href="https://github.com/JannekeCoumans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/janneke-coumans/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="contactView__grid--image" />
      </div>
    </div>
  );
};

export default ContactView;
