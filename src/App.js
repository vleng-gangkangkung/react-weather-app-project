import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          Coded and designed by
          <a href="https://vleng.co.uk">&nbsp;Vanessa Leng&nbsp;</a>|
          <a
            href="https://github.com/vleng-gangkangkung/react-weather-app-project"
            title="View on Github"
          >
            &nbsp;Open Source Code
          </a>
        </footer>
      </div>
    </div>
  );
}
