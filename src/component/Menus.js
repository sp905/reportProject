/** @format */

import React from "react";
import "./menus.css";
export default (props) => {
  let { selectValue, list = [], state, field, label } = props;
  let { selectedValue } = state || {};
  return (
    <div>
      <div className="menulabelStyle">{label}</div>
      <select value={selectedValue} onChange={selectValue} className="dropdownStyle">
        {list.length &&
          list.map((value) => {
            return <option className="select-selected.select-arrow-active" value={value[field]}>{value[field]}</option>;
          })}
      </select>
    </div>
  );
};
