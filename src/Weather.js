import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Київ</h1>
      <ul>
        <li>Понеділок, 23:39</li>
        <li>Мінлива хмарність</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Broken Clouds"
          />

          <span className="temperature">24</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Опади: 1%</li>
            <li>Вологість: 61%</li>
            <li>Вітер: 11 км/год</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
