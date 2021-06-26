import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import universal from "react-universal-component";
import { NavBar } from "./components";
import { WishlistIcon } from "./components/Icons";
import { routes } from "./constants";

const { HOME, MOVIE, WISHLIST } = routes;

const UniversalComponent = universal(
  (props) => import(`./pages/${props.page}`),
  { ignoreBabelRename: true }
);

export default () => {
  const wishlistNavItem = { ...WISHLIST, icon: <WishlistIcon /> };

  return (
    <div>
      <NavBar items={[wishlistNavItem]} />
      <Switch>
        <Route exact path={HOME.path}>
          <UniversalComponent page={HOME.name} />
        </Route>
        <Route
          path={MOVIE.path}
          render={({ match }) => (
            <UniversalComponent match={match} page={MOVIE.name} />
          )}
        />
        <Route path={WISHLIST.path}>
          <UniversalComponent page={WISHLIST.name} />
        </Route>
        <Route>
          <UniversalComponent page={"NotFound"} />
        </Route>
      </Switch>
    </div>
  );
};
