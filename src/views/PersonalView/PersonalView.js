import React from "react";
import { i18n } from "config/C4";

const PersonalView = () => {
  const { personalview } = i18n();
  return (
    <div className="personalView">
      <div className="personalView__content">
        <h1 className="personalView__content--introduction">
          {personalview.introduction.map((part, i) => {
            if (part.type !== "") {
              return <span key={i}>{part.content}</span>;
            } else {
              return <React.Fragment key={i}>{part.content}</React.Fragment>;
            }
          })}
        </h1>
        <p className="personalView__content--copy">{personalview.copy}</p>

        <div className="personalView__content--information">
          <h2>{personalview.personalInformation}</h2>
          <p><span>{personalview.name}:</span> Janneke Maria Coumans</p>
          <p>
            <span>{personalview.phone}:</span> <a href="tel:0622887662">+316 2288 7662</a>
          </p>
          <p>
            <span>{personalview.email}:</span>{" "}
            <a href="mailto:jannekecoumans@gmail.com">
              Jannekecoumans@gmail.com
            </a>
          </p>
          <p>
            <span>{personalview.address}:</span> Pontanusstraat 1C, Nijmegen
          </p>
          <p><span>{personalview.birthdate}:</span> 24-02-1990</p>
        </div>

        <div className="personalView__content--interests">
          <h2>{personalview.hobbys.title}</h2>
          <h3>{personalview.hobbys.title1}</h3>
          <p>{personalview.hobbys.copy1}</p>
          <h3>{personalview.hobbys.title2}</h3>
          <p>{personalview.hobbys.copy2}</p>
        </div>
      </div>
      <div className="personalView__image" />
    </div>
  );
};

export default PersonalView;
