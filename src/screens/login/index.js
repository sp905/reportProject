/** @format */

import React, { useState } from "react";
import "./login.css";
import { loginService } from "../../service";
import { useDispatch } from "react-redux";
import { loginAction } from "../../action";
export default (props) => {
  let [state, setState] = useState({});
  let dispatch = useDispatch();
  const handler = (e) => {
    let { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const inputRenderItem = ({ label, name, type }) => {
    return (
      <div className="inputContainerStyle">
        <div className="labelStyle">{label}</div>
        <input type={type} name={name} className="inputStyle" onChange={handler} />
      </div>
    );
  };
  const login = async () => {
    let { email, password } = state;
    if (email && password) {
      let loginData = await loginService({ email, password });
      if (loginData) {
        props.history.push({
          pathname: "/home",
        });
        dispatch(loginAction(loginData));
      }
    }
  };
  return (
    <div className="containerStyle">
      <div className="containerViewStyle">
        <div>
          <div className="loginTextStyle">Login to your account</div>
          {inputRenderItem({ label: "Email or Username", name: "email", type: "text" })}
          {inputRenderItem({ label: "Password", name: "password", type: "password" })}
        </div>
        <div className="buttonStyle" onClick={login}>
          <span className="bttonTextStyle"> Login</span>
        </div>
      </div>
    </div>
  );
};
