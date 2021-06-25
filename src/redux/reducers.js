import { combineReducers } from "redux";
import { homeReducer } from "./modules/home";
import { wishlistReducer } from "./modules/wishlist";

export default combineReducers({
  home: homeReducer,
  wishlist: wishlistReducer,
});
