import React from "react";
import { Link } from "react-router-dom";
import { ContentHeader, i18n, PortfolioData } from "config/C4";

const PortfolioView = () => {
  const { portfolioview } = i18n();
  
  return (
    <div className="portfolioView">
      <ContentHeader title="Portfolio" />
      <p>{portfolioview.copy}</p>
      <div className="portfolioView__items">
        {PortfolioData &&
          PortfolioData.map((item, i) => (
            <Link
              to={`/portfolio-item/${item.slug}`}
              className="portfolioView__items--item"
              key={i}
            >
              <img
                src={
                  require(`../../assets/images/portfolio/${item.slug}-thumb.jpg`)
                    .default
                }
                alt={item.name}
              />
              <h3>{item.name}</h3>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PortfolioView;
