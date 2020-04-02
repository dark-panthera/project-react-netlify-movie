import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";
import moviesReducer from "../reducers/movies";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const combinedReducers = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer,
    movies: moviesReducer
  });

  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(combinedReducers, enhancer);

  return store;
};
