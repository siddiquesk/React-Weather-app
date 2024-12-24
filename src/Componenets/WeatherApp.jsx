import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Mumbai",
    feels_like: 14.75,
    humidity: 82,
    temp: 15.05,
    tempMax: 15.05,
    tempMin: 15.05,
    weather: "mist",
  });
  let updateinfo = (newinfo) => {
    setWeather(newinfo);
  };

  return (
    <div>
      <h2>My Weather App</h2>
      <SearchBox updateinfo={updateinfo} />
      <InfoBox info={weather} />
    </div>
  );
}

export default WeatherApp;
