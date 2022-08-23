import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import { StorageHandler } from "config/C4";

const LanguageSelect = () => {
  const [activeLanguage, setActiveLanguage] = useState(
    StorageHandler.get("language") || { code: "NL", name: "Nederlands" }
  );
  const [languageSelectIsActive, setLanguageSelectIsActive] = useState(false);

  const checkLanguage = () => {
    const language = StorageHandler.get("language");
    if (!language) {
      const languageObject = {
        code: "NL",
        name: "Nederlands",
      };
      setActiveLanguage(languageObject);
      StorageHandler.set("language", languageObject);
    }
  };

  useEffect(() => {
    checkLanguage();
  });

  const toggleLanguageSelect = () => {
    setLanguageSelectIsActive(!languageSelectIsActive);
  };

  const changeLanguage = (e) => {
    const { value } = e.target;
    if (value === "NL") {
      const languageObject = {
        code: "NL",
        name: "Nederlands",
      };
      setActiveLanguage(languageObject);
      StorageHandler.set("language", languageObject);
    } else if (value === "EN") {
      const languageObject = {
        code: "EN",
        name: "English",
      };
      setActiveLanguage(languageObject);
      StorageHandler.set("language", languageObject);
    }

    toggleLanguageSelect();
    window.location.reload();
  };

  return (
    <div className="languageSelect">
      <button
        type="button"
        className="languageSelect__button"
        onClick={toggleLanguageSelect}
      >
        <FontAwesomeIcon icon={faGlobe} />
        <p>
          <span>{activeLanguage.name}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </p>
      </button>
      {languageSelectIsActive && (
        <div className="languageSelect__menu">
          <div className="languageSelect__menu--bg" onClick={toggleLanguageSelect}/>
          <div className="languageSelect__menu--content">
            <button
              type="button"
              onClick={(e) => changeLanguage(e)}
              value="NL"
              className={activeLanguage.code === "NL" ? "active" : ""}
            >
              Nederlands{" "}
              {activeLanguage.code === "NL" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
            </button>
            <button
              type="button"
              onClick={(e) => changeLanguage(e)}
              value="EN"
              className={activeLanguage.code === "EN" ? "active" : ""}
            >
              English{" "}
              {activeLanguage.code === "EN" && (
                <FontAwesomeIcon icon={faCheck} />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
