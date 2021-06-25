import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default (initialState) => {
  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept("./reducers", () =>
      store.replaceReducer(require("./reducers").fetchArticle)
    );
  }

  return store;
};
