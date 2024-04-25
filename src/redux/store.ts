import { createStore, combineReducers } from "redux";
import rootReducer from "./reducers";

const rootReducerCombined = combineReducers({
  rootReducer,
});

const store = createStore(rootReducerCombined);

export default store;
