/** @format */

import moment from "moment";

export const showDateMethod = (start, end) => {
  let startV1 = start && moment(start).format("DD MMM");
  end = end && moment(end).format("DD MMM");
  let year = moment(start).format("YY");
  let showDate = end && startV1 ? `${startV1} to ${end} ${year}` : "";
  return showDate;
};

export const showName = (name) => {
  if (!name) {
    return;
  }
  name = name && name.split(" ");
  if (name.length === 2) {
    name = (name[0] && name[0].substring(0, 1).toUpperCase()) + (name[1] && name[1].substring(0, 1).toUpperCase());
  } else {
    name = name[0] && name[0].substring(0, 1).toUpperCase();
  }

  return name;
};
