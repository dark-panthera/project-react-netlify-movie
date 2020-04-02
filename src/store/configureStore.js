import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../reducers/movies";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const combinedReducers = combineReducers({
   //  filters: filtersReducer,
    movies: moviesReducer
  });

  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(combinedReducers, enhancer);

  return store;
};
