/** @format */

import { users } from "./DummyData";

export const loginService = ({ email, password }) => {
  if (email && password) {
    return users.map((user) => {
      if ((user.email === email || user.userName === email) && user.password === password) {
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }
    });
  }
  return null;
};

export const initUser = () => {
  let oldData = localStorage.getItem("user");
  if (oldData) {
    return { user: oldData };
  }
  return { user: null };
};

export const logout = () => {
  localStorage.removeItem("user");
  return { user: null };
};

export const getUser = () => {
  let oldData = localStorage.getItem("user");
  return { user: JSON.parse(oldData) };
};
