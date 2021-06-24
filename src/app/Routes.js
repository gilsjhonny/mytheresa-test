import React from "react";
import { Link, Route } from "react-router-dom";
import { Switch } from "react-router";
import universal from "react-universal-component";
import { routes } from "./constants";

const { HOME, MOVIE, WISHLIST } = routes;

// Import Pages Dynamically
const UniversalComponent = universal(
  (props) => import(`./pages/${props.page}`),
  { ignoreBabelRename: true }
);

export default () => (
  <div>
    <nav>
      <Link to={HOME.route}>{HOME.name}</Link>
      <Link to={WISHLIST.route}>{WISHLIST.name}</Link>
    </nav>
    <Switch>
      <Route exact path={HOME.route}>
        <UniversalComponent page={HOME.name} />
      </Route>
      <Route
        path={MOVIE.route}
        render={({ match }) => {
          return (
            <UniversalComponent match={match} page={MOVIE.name} />
          );
        }}
      />
      <Route path={WISHLIST.route}>
        <UniversalComponent page={WISHLIST.name} />
      </Route>
    </Switch>
  </div>
);
