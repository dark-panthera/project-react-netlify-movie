import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  /*const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  */

  const combinedReducers = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  });

  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(combinedReducers, enhancer);

  return store;
};
