import React, { useEffect, useState } from "react";
import {
  ContentHeader,
  OverViewPortfolio,
  OverViewSkills,
  StorageHandler,
  WorkData,
} from "config/C4";
import i18n from "config/i18n";

const OverView = () => {
  const [activeLanguage, setActiveLanguage] = useState(null);
  const {
    overview: { titles, facts },
  } = i18n();

  const getLanguage = () => {
    const language = StorageHandler.get("language");
    if (!activeLanguage) {
      setActiveLanguage(language.code);
    }
  };

  useEffect(() => {
    getLanguage();
  });

  return (
    <div className="overView">
      <div className="overView__container">
        <div className="overView__column">
          <ContentHeader title={facts.title} link="/personal" arrow />
          <div className="overView__personal">
            <div className="overView__personal--column">
              <p>{facts.firstName}</p>
              <h1>Janneke</h1>
            </div>
            <div className="overView__personal--column">
              <p>{facts.lastName}</p>
              <h1>Coumans</h1>
            </div>
            <div className="overView__personal--column">
              <p>{facts.city}</p>
              <h1>Nijmegen</h1>
            </div>
            <div className="overView__personal--column">
              <p>{facts.birthday}</p>
              <h1>feb 24 '90</h1>
            </div>
          </div>

          <ContentHeader title={titles.skills} link="/skills" arrow />
          <OverViewSkills />
        </div>
        <div className="overView__column">
          <ContentHeader title={titles.jobs} link="/work" arrow />
          <div className="overView__work">
            {WorkData.slice(0, 2).map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="overView__work--item">
                    <p className="company">
                      <span>{item.company}</span>
                    </p>
                    <p className="title">{item.function[activeLanguage]}</p>
                    <p className="dates">{item.timing[activeLanguage]}</p>
                  </div>
                  {i === 0 && (
                    <div className="overView__work--ampersand">
                      <p>&</p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <OverViewPortfolio />
        </div>
      </div>
    </div>
  );
};

export default OverView;
