import React from "react";
import { Home, Movie, Wishlist } from "./pages";
import { Link, Route } from "react-router-dom";

export default () => (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/wishlist">Wishlist</Link>
    </nav>
    <Route exact path="/" component={Home} />
    <Route path="/movie" component={Movie} />
    <Route path="/wishlist" component={Wishlist} />
  </div>
);
