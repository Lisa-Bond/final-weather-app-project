import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Henderson" />
        <footer>
          This app is coded by{" "}
          <a href="https://www.facebook.com/lisabondarenko" target="_blank">
            Lisa Bondarenko
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Lisa-Bond/final-weather-app-project"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
