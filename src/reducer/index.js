/** @format */

import { combineReducers } from "redux";
import Reducer from "./Reducer";

const rootReducer = combineReducers({
  reducer: Reducer,
});

export default rootReducer;
