import React from "react";
import DateFormatted from "./DateFormatted";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateFormatted date={props.data.date} />
        </li>
        <li>29 серпня 2022</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>{props.data.description}</li>
            <li>Вологість: {props.data.humidity}%</li>
            <li>Вітер: {Math.round(props.data.wind)} км/год</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
