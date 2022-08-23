import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Nav, OverView, PersonalView, PortfolioItemView, PortfolioView, ScrollToTop, SkillsView, Widgets, WorkView } from "../config/C4";

const AppRouter = () => {
  return (
    <Router>
      <Widgets />
      <div className="container">
        <Nav />
        <div className="container__content">
          <Route path="/" exact component={OverView} />
          <Route path="/personal" exact component={PersonalView} />
          <Route path="/skills" exact component={SkillsView} />
          <Route path="/portfolio" exact component={PortfolioView} />
          <Route path="/portfolio-item/:id" component={PortfolioItemView} />
          <Route path="/work" exact component={WorkView} />
          <ScrollToTop />
          {/* <Switch>
          <Route path="" exact component={} />
        </Switch> */}
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
