import React from "react";
import { ContentHeader, OverViewPortfolio, OverViewSkills } from "config/C4";
import i18n from "config/i18n";

const OverView = () => {
  const { overview: { titles, facts } } = i18n();

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
            <div className="overView__work--item">
              <p className="company">
                <span>TravPRO Mobile</span>
              </p>
              <p className="title">Front-end Developer</p>
              <p className="dates">may 2021 - present</p>
            </div>
            <div className="overView__work--ampersand">
              <p>&</p>
            </div>
            <div className="overView__work--item">
              <p className="company">
                <span>Studio Pixels & Code</span>
              </p>
              <p className="title">owner</p>
              <p className="dates">april 2021 - june 2022</p>
            </div>
          </div>
          <OverViewPortfolio />
        </div>
      </div>
    </div>
  );
};

export default OverView;
