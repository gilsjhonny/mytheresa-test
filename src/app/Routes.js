import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import universal from "react-universal-component";

import { routes } from "./constants";
import PageLayout from "./components/PageLayout";

const { HOME, MOVIE, WISHLIST } = routes;

const UniversalComponent = universal(
  (props) => import(`./pages/${props.page}`),
  { ignoreBabelRename: true }
);

export default () => {
  const getUniversalComponent = (pageName, match) => (
    <UniversalComponent page={pageName} {...(match && { match })} />
  );

  return (
    <PageLayout>
      <Switch>
        <Route exact path={HOME.path}>
          {getUniversalComponent(HOME.name)}
        </Route>
        <Route
          path={MOVIE.path}
          render={({ match }) =>
            getUniversalComponent(MOVIE.name, match)
          }
        />
        <Route path={WISHLIST.path}>
          {getUniversalComponent(WISHLIST.name)}
        </Route>
        <Route>{getUniversalComponent("NotFound")}</Route>
      </Switch>
    </PageLayout>
  );
};
