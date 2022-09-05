import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "8891c52b8ad9f9fe10317634bc1484c4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Monday</div>
          <WeatherIcon code="01d" size={36} />
          <div className="ForecastTemperatures">
            <span className="ForecastTemperature-max">⭡25°</span>
            <span className="ForecastTemperature-min">⭣20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
