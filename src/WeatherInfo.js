import React from "react";
import DateFormatted from "./DateFormatted";
import WeatherIcon from "./WeatherIcon";
import ConvertTemperature from "./ConvertTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateFormatted date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-8 canvas d-flex">
          <WeatherIcon code={props.data.icon} size={72} />
          <ConvertTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
