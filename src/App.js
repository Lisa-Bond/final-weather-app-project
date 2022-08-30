import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Uummannaq" />
        <footer>
          Код цього застосунку виконано{" "}
          <a href="https://www.facebook.com/lisabondarenko" target="_blank">
            Єлизаветою Бондаренко
          </a>{" "}
          і він знаходиться у{" "}
          <a
            href="https://github.com/Lisa-Bond/final-weather-app-project"
            target="_blank"
          >
            відкритому доступі
          </a>
        </footer>
      </div>
    </div>
  );
}
