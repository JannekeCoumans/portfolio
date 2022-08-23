import React from "react";
import { settings } from "config/C4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PieChart } from "react-minimal-pie-chart";

import {
  faJsSquare,
  faReact,
  faSass,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import AdobeXD from "../../assets/images/adobexd-orange.svg";
import Illustrator from "../../assets/images/illustrator-orange.svg";
import Photoshop from "../../assets/images/photoshop-orange.svg";

const SkillWidget = () => {
  const { skills } = settings;

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
    }
  };

  return (
    <div className="skillWidget">
      {skills &&
        skills.map((skill, i) => {
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
          if (skill.widget) {
            return (
              <div key={i} className="skillWidget__item">
                <PieChart
                  key={i}
                  data={[{ value: skill.level, color: "#23695D" }]}
                  totalValue={5}
                  lineWidth={15}
                  startAngle={280}
                  animate={true}
                  animationDuration={1000}
                  background="#ACC9BC"
                />
                <Icon />
              </div>
            );
          }

          return null;
        })}
    </div>
  );
};

export default SkillWidget;
