/** @format */
import React from "react";
import "./home.css";
import { logout, getUser } from "../../service";
import { Table, Filter } from "../../component";
import { showName } from "../../component/UtilityFunction";

export default class Home extends React.Component {
  state = { dropDown: false, returnValue: "start", statr: void 0, end: void 0 };

  logoutMethod = () => {
    logout();
    this.props.history.push({
      pathname: "/",
    });
  };
  header = () => {
    let { user: { userName } = {} } = getUser();
    return (
      <div className="headerStyle" >
        <div className="logoutStyle" onClick={this.logoutMethod}>Logout</div>
        <div className="avtarStyle">
          <div className="avtarText">{showName(userName)}</div>
        </div>
      </div>
    );
  };

  search = ({ selectedData = [], showDate, selectedValue }) => {
    this.setState({ selectedData, showDate, selectedValue });
  };
  render() {
    let { selectedData = [], showDate, selectedValue } = this.state;

    return (
      <div className="homeContainerStyles">
        {this.header()}
        <div className="contentStyle">
          <div className="enterpriseTextStyle">Enterprise Name</div>
          <div className="reportStyle">Reports</div>
          <Filter search={this.search} />
          <Table data={selectedData} showDate={showDate} selectedValue={selectedValue} />
        </div>
      </div>
    );
  }
}
