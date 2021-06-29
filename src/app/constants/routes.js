import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Wishlist from "../pages/Wishlist";

export default Object.freeze({
  HOME: {
    component: Home,
    name: "Home",
    path: "/",
    exact: true,
  },
  MOVIE: {
    component: Movie,
    name: "Movie",
    path: "/movie/:id",
    exact: true,
  },
  WISHLIST: {
    component: Wishlist,
    name: "Wishlist",
    path: "/wishlist",
    exact: true,
  },
});
