import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Wishlist from "../pages/Wishlist";

export default Object.freeze({
  HOME: {
    component: Home,
    name: "Home",
    path: "/",
  },
  MOVIE: {
    component: Movie,
    name: "Movie",
    path: "/movie/:id",
  },
  WISHLIST: {
    component: Wishlist,
    name: "Wishlist",
    path: "/wishlist",
  },
});
