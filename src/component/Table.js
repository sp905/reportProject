/** @format */

import React from "react";
import moment from "moment";

import "./table.css";
export default class Table extends React.Component {
  header = ["id", "tbItem1", "tbItem2", "tbItem3", "tbItem4", "tbItem5", "tbItem6"];
  tbHeader = ["tbl1_item1", "tbl1_item2", "tbl1_item3", "tbl2_item1", "tbl2_item2", "tbl2_item3"];
  singleRowItem = (singleData) => {
    return (
      <>
        {this.header.map((key, index) => {
          return <td  key={index}>{singleData[key]}</td>;
        })}
      </>
    );
  };
  showTotalRow = () => {
    let { data } = this.props;
    let total = { tbItem1: 0, tbItem2: 0, tbItem3: 0, tbItem4: 0, tbItem5: 0, tbItem6: 0 };
    data.forEach((value) => {
      let { tbItem1, tbItem2, tbItem3, tbItem4, tbItem5, tbItem6 } = value;
      total.tbItem1 += tbItem1;
      total.tbItem2 += tbItem2;
      total.tbItem3 += tbItem3;
      total.tbItem4 += tbItem4;
      total.tbItem5 += tbItem5;
      total.tbItem6 += tbItem6;
    });
    return (
      <tr id="totalRow">
        <th>Total</th>
        {this.header.map((key, index) => {
          if (key === "id") {
            return;
          }
          return <th key={index}>{total[key]}</th>;
        })}
      </tr>
    );
  };
  render() {
    let { data, selectedValue, showDate } = this.props;
    console.log("selectedValue",showDate)
    return (
      <div className="tableStyle">
        <div className="showingresultStyle">
          Showing Result For :
          <span className="searchItemStyle">
            Search Item :<span className="selectedItemStyle">{selectedValue || ""}</span> | Duration :{" "}
            <span className="selectedItemStyle">{showDate || ""}</span>
          </span>
        </div>
        <div className="tableContaierStyle">
          <div id="tableConatinerStyle">
            <table id="interpriseStyle">
              <tr>
                <th rowSpan="2" className="searchHeaderStyle">Search</th>
                <th colspan="3">Table1</th>
                <th colspan="3">Table2</th>
              </tr>
              <tr>
                {this.tbHeader.map((key, index) => {
                  return <th key={index}>{key}</th>;
                })}
              </tr>
              {this.showTotalRow()}
              {data.map((value, index) => {
                return (
                  <tr id="dataRow" key={index}>
                    {this.singleRowItem(value)}
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
