import React from "react";

export default function DateFormatted(props) {
  let day = props.date.getDay();
  return <div>{day}</div>;
}
