import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ContactView,
  Nav,
  OverView,
  PersonalView,
  PortfolioItemView,
  PortfolioView,
  ScrollToTop,
  SkillsView,
  Widgets,
  WorkView,
} from "../config/C4";

const AppRouter = () => {
  return (
    <Router>
      <Widgets />
      <ScrollToTop />
      <div className="container">
        <Nav />
        <div className="container__content">
          <Switch>
            <Route path="/" exact component={OverView} />
            <Route path="/personal" exact component={PersonalView} />
            <Route path="/skills" exact component={SkillsView} />
            <Route path="/portfolio" exact component={PortfolioView} />
            <Route path="/portfolio-item/:id" component={PortfolioItemView} />
            <Route path="/work" exact component={WorkView} />
            <Route path="/contact" exact component={ContactView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
