import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentHeader, i18n, settings, StorageHandler } from "config/C4";
import {
  faJsSquare,
  faReact,
  faSass,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import AdobeXD from "../../assets/images/adobexd.svg";
import Illustrator from "../../assets/images/illustrator.svg";
import Photoshop from "../../assets/images/photoshop.svg";

const setIcon = (icon) => {
  if (icon === "js") {
    return faJsSquare;
  } else if (icon === "react") {
    return faReact;
  } else if (icon === "sass") {
    return faSass;
  } else if (icon === "node") {
    return faNodeJs;
  } else if (icon === "illustrator") {
    return Illustrator;
  } else if (icon === "photoshop") {
    return Photoshop;
  } else if (icon === "figma") {
    return faFigma;
  } else if (icon === "adobexd") {
    return AdobeXD;
  } else {
    return null;
  }
};

const SkillsView = () => {
  const { skills } = settings;
  const { skillsview } = i18n();
  const [activeLanguage, setActiveLanguage] = useState(null);

  const getLanguage = () => {
    if (!activeLanguage) {
      const language = StorageHandler.get('language');
      if (language) {
        setActiveLanguage(language.code);
      }
  }
  }

  useEffect(() => {
    getLanguage();
  });

  return (
    <div className="skillsView">
      <ContentHeader title={skillsview.title} />
      <div className="skillsView__items">
      {skills &&
        skills.map((skill, i) => {
          const Icon = () => {
            if (skill.fontawesome) {
              return (
                <FontAwesomeIcon
                  icon={setIcon(skill.icon)}
                  className="skillsView__icon"
                />
              );
            } else {
              return (
                <img
                  src={setIcon(skill.icon)}
                  alt={skill.name}
                  className="skillsView__icon"
                />
              );
            }
          };
          return (
            <div key={i} className="skillsView__items--item">
              <div className="icon">
                <Icon />
              </div>
              <div className="info">
                <h4>{skill.name}</h4>
                <div className="skillCircles">
                  {[...Array(skill.level)].map((level, i) => (
                    <div className="fullCircle" key={i} />
                  ))}
                  {[...Array(5 - skill.level)].map((level, i) => (
                    <div className="emptyCircle" key={i} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default SkillsView;
