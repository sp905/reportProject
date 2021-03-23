/** @format */

import { USER } from "../constant";

export const loginAction = (user) => {
  return {
    type: USER,
    payload: { user },
  };
};
