/** @format */
import React from "react";
import "./filter.css";
import { Menu } from ".";
import { searchIcon } from "../images";
import { showDateMethod } from "../component/UtilityFunction";
import { data } from "../DummyData";
import DatePicker from "react-date-picker";

export default class Filter extends React.Component {
  state = { selectedValue: "All", dropDown: false, returnValue: "start", statr: void 0, end: void 0 };
  selectValue = (e) => {
    this.setState({ selectedValue: e.target.value, dropDown: false });
  };
  showDropDown = () => {
    this.setState({ dropDown: !this.state.dropDown });
  };

  setStartDate = (date) => {
    let { returnValue } = this.state;
    if (returnValue === "start") {
      this.setState({ [returnValue]: date, returnValue: "end", isOpen: true });
    } else if (returnValue === "end") {
      this.setState({ [returnValue]: date, returnValue: "start", isOpen: false });
    }
  };
  search = () => {
    let { selectedValue, start, end } = this.state;
    let showDate = showDateMethod(start, end);
    let { search } = this.props;
    if (selectedValue != "All") {
      let selectedData = data.filter((value) => {
        let { id, date } = value;
        if (
          id === selectedValue ||
          (new Date(date).getTime() >= new Date(start).getTime() && new Date(date).getTime() <= new Date(end).getTime())
        ) {
          return value;
        }
      });
      search && search({ selectedData, showDate, selectedValue });
    } else {
      let selectedData = data.filter((value) => {
        let { date } = value;
        if (!start && !end) {
          return value;
        }
        if (
          new Date(date).getTime() >= new Date(start).getTime() &&
          new Date(date).getTime() <= new Date(end).getTime()
        ) {
          return value;
        }
      });
      search && search({ selectedData, showDate, selectedValue });
    }
  };

  render() {
    let { start, end, isOpen, returnValue } = this.state;
    let showDate = showDateMethod(start, end);
    return (
      <div className="searchContainerStyle">
        <Menu
          label="Search Item"
          list={[
            { id: "All" },
            { id: "Search Item1" },
            { id: "Search Item2" },
            { id: "Search Item3" },
            { id: "Search Item4" },
            { id: "Search Item5" },
          ]}
          selectValue={this.selectValue}
          showDropDown={this.showDropDown}
          state={this.state}
          field="id"
        />
        <div className="dateStyle">
          <div className="durationlabelStyle">Duration</div>
          <>
            {start && end ? (
              <div className="showDurationContainerStyle">
                <div className="durationStyle">{showDate}</div>
                <div className="crossStyle" onClick={() => this.setState({ start: null, end: null })}>
                  X
                </div>
              </div>
            ) : (
              <DatePicker
                clearIcon={null}
                calendarClassName={[]}
                isOpen={isOpen}
                name=""
                onChange={this.setStartDate}
                minDate={this.state["start"]}
                maxDate={this.state["end"]}
                value={this.state[returnValue]}
              />
            )}
          </>
        </div>
        <div className="searchButtonStyle" onClick={this.search}>
          <img src={searchIcon} className="imageStyle" />
          <div className="bttonTextStyle">SEARCH</div>
        </div>
      </div>
    );
  }
}
