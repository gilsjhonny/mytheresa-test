import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import { homeReducer } from "./modules/home";
import { wishlistReducer } from "./modules/wishlist";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const reducers = combineReducers({
  home: homeReducer,
  wishlist: wishlistReducer,
});

export default createStore(reducers, enhancer);
