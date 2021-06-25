import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import universal from "react-universal-component";
import { NavBar } from "./components";
import { routes } from "./constants";

const { HOME, MOVIE, WISHLIST } = routes;

// Import Pages Dynamically
const UniversalComponent = universal(
  (props) => import(`./pages/${props.page}`),
  { ignoreBabelRename: true }
);

export default () => (
  <div>
    <NavBar routes={[routes.WISHLIST]} />
    <Switch>
      <Route exact path={HOME.path}>
        <UniversalComponent page={HOME.name} />
      </Route>
      <Route
        path={MOVIE.path}
        render={({ match }) => {
          return (
            <UniversalComponent match={match} page={MOVIE.name} />
          );
        }}
      />
      <Route path={WISHLIST.path}>
        <UniversalComponent page={WISHLIST.name} />
      </Route>
      {/* <Route component={NotFound} /> */}
    </Switch>
  </div>
);
