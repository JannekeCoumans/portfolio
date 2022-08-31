import React, { useEffect, useState } from "react";
import { ContentHeader, i18n, PortfolioData, StorageHandler } from "config/C4";
import { Link } from "react-router-dom";

const PortfolioItemView = () => {
  const [language, setLanguage] = useState(null);
  const [portfolioItem, setPortfolioItem] = useState(null);
  const { portfolioitemview } = i18n();

  const getLanguage = () => {
    const activeLanguage = StorageHandler.get("language");
    if (activeLanguage && !language) {
      setLanguage(activeLanguage.code);
    }
  };

  const getPortfolioItem = () => {
    const slug = window.location.pathname.split("/portfolio-item/")[1];
    const filteredPortfolioItem = PortfolioData.filter(
      (item) => item.slug === slug
    )[0];
    if (!portfolioItem) {
      setPortfolioItem(filteredPortfolioItem);
    }
  };

  useEffect(() => {
    getLanguage();
    getPortfolioItem();
  });

  if (portfolioItem) {
    return (
      <div className="portfolioItemView">
        <div className="portfolioItemView__content">
          <ContentHeader title={portfolioItem.name} />
          <p>{portfolioItem.summary[language]}</p>

          <div className="portfolioItemView__buildWith">
            <h3>{portfolioitemview.builtWith}</h3>
            <div className="portfolioItemView__buildWith--items">
              {portfolioItem.buildWith.join(", ")}
            </div>
          </div>

          <div className="portfolioItemView__links">
            {portfolioItem.url && (
              <a
                href={portfolioItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                {portfolioitemview.websiteButton}
              </a>
            )}
            {portfolioItem.githubUrl && (
              <a
                href={portfolioItem.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn darkgreen"
              >
                {portfolioitemview.githubButton}
              </a>
            )}
          </div>
        </div>
        <div
          className="portfolioItemView__featuredImage"
          style={{
            backgroundImage: `url(${
              require(`../../assets/images/portfolio/${portfolioItem.slug}-featured.jpg`)
                .default
            })`,
          }}
        />
        {portfolioItem.imagesCount > 0 && (
          <div className="portfolioItemView__images">
            {Array.from(Array(portfolioItem.imagesCount), (e, i) => (
              <img
              src={require(`../../assets/images/portfolio/${portfolioItem.slug}-${i + 1}.jpg`).default}
              alt={portfolioItem.name}
            />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="portfolioItemView error">
      <h1>{portfolioitemview.error}</h1>
      <Link to="/portfolio" className="btn">
        {portfolioitemview.errorButton}
      </Link>
    </div>
  );
};

export default PortfolioItemView;
