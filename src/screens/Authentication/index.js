/** @format */

import React from "react";
import { initUser } from "../../service";
export default class Authentication extends React.Component {
  componentDidMount() {
    this.checkIfUserExist();
  }
  checkIfUserExist = () => {
    const { user } = initUser();
    if (user) {
      this.props.history.push({
        pathname: "/home",
      });
    } else {
      this.props.history.push({
        pathname: "/login",
      });
    }
  };

  render() {
    return <div></div>;
  }
}
