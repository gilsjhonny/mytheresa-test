import React from "react";
import { Link, Route } from "react-router-dom";
import { Switch } from "react-router";
import universal from "react-universal-component";

const UniversalComponent = universal((props) =>
  import(`./pages/${props.page}`)
);

export default () => (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/wishlist">Wishlist</Link>
    </nav>
    <Switch>
      <Route exact path="/">
        <UniversalComponent page="Home" />
      </Route>
      <Route exact path="/home">
        <UniversalComponent page="Home" />
      </Route>
      <Route path="/movie">
        <UniversalComponent page="Movie" />
      </Route>
      <Route path="/wishlist">
        <UniversalComponent page="Wishlist" />
      </Route>
    </Switch>
  </div>
);
