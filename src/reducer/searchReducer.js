/** @format */

import { USER } from "../constant";
const INITIAL_STATE = {
  searchTerm: "",
};

function searchReducer(state = INITIAL_STATE, action) {
  let { type, payload } = action;
  switch (type) {
    case USER:
      return { ...state, user: payload.user };
    default:
      return state;
  }
}

export default searchReducer;
