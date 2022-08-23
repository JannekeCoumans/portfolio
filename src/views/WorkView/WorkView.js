import React, { useEffect, useState } from "react";
import { ContentHeader, i18n, StorageHandler, WorkData } from "config/C4";

const WorkView = () => {
  const { workview } = i18n();
  const [activeLanguage, setActiveLanguage] = useState(null);

  const getLanguage = () => {
    const language = StorageHandler.get('language');
    if (!activeLanguage) {
      setActiveLanguage(language.code);
    }
  }

  useEffect(() => {
    getLanguage();
  });

  return (
    <div className="workView">
      <div className="workView__intro">
        <ContentHeader title={workview.title} />
        <p>{workview.copy}</p>
      </div>
      <div className="workView__content">
        {WorkData.map((item, i) => {
          return (
            <div className="workView__content--item" key={i}>
              <h3>{item.company}</h3>
              <p className="function">{item.function[activeLanguage]}</p>
              <p className="timing">{item.timing[activeLanguage]}</p>
              <p className="description">{item.description[activeLanguage]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkView;
