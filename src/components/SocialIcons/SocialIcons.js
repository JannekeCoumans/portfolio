import React from 'react';
import { settings } from 'config/C4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faBehanceSquare, faDribbble } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const { socials } = settings;

  const getIcon = (icon) => {
    if (icon === 'github') {
      return <FontAwesomeIcon icon={faGithub} />
    } else if (icon === 'linkedin') {
      return <FontAwesomeIcon icon={faLinkedin} />
    } else if (icon === 'behance') {
      return <FontAwesomeIcon icon={faBehanceSquare} />
    } else if (icon === 'dribbble') {
      return <FontAwesomeIcon icon={faDribbble} />
    }
  }

  return (
    <div className="socialIcons">
      {socials && socials.filter(s => s.show).map((item, index) => (
        <a 
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer noopener"
          className="socialIcons__icon"
        >
          {getIcon(item.icon)}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons;