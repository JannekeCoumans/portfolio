import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { settings } from "config/C4";
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

const OverViewSkills = () => {
  const { skills } = settings;

  return (
    <div className="overView__skills">
      {skills &&
        skills
          .filter((s) => {
            return s.overview === true;
          })
          .map((skill, i) => {
            const Icon = () => {
              if (skill.fontawesome) {
                return (
                  <FontAwesomeIcon
                    icon={setIcon(skill.icon)}
                    className="skillWidget__icon"
                  />
                );
              } else {
                return (
                  <img
                    src={setIcon(skill.icon)}
                    alt={skill.name}
                    className="skillWidget__icon"
                  />
                );
              }
            };
            return (
              <div key={i} className="overView__skills--item">
                <div className="icon">
                  <Icon />
                </div>
                <div className="info">
                    <p>{skill.name}</p>
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
  );
};

export default OverViewSkills;
