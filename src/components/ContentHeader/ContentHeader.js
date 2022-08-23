import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ContentHeader = ({ title, link, arrow }) => {
  if (link) {
    return (
      <Link to={link} className="contentHeader">
        <h1>{title}</h1>

        {arrow && <FontAwesomeIcon icon={faChevronRight} />}
      </Link>
    );
  }

  return (
    <div className="contentHeader">
      <h1>{title}</h1>
    </div>
  );
};

export default ContentHeader;
