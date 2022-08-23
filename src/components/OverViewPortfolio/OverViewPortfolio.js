import React from 'react';
import { Link } from 'react-router-dom';
import { ContentHeader, PortfolioData } from 'config/C4';
import i18n from "config/i18n";


const OverViewPortfolio = () => {
  const { overview: { titles } } = i18n();
  return (
    <div className="overView__portfolio">
      <ContentHeader title={titles.portfolio} link="/portfolio" arrow />
      <div className="overView__portfolio--grid">
        {PortfolioData.slice(0, 6).map((item, i) => (
          <Link
            key={i}
            className="portfolio-item"
            to={`/portfolio-item/${item.slug}`}
          >
            <img
              src={require(`../../assets/images/portfolio/logo_overview/${item.slug}.svg`).default}
              alt={item.name}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OverViewPortfolio;