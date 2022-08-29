import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This app was coded by{" "}
          <a href="https://www.facebook.com/lisabondarenko" target="_blank">
            Lisa Bondarenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Lisa-Bond/final-weather-app-project"
            target="_blank"
          >
            opened-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
