import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateinfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let Api_key = "69f256cf662a086cbf1c26ac9c605bf4";
  let Api_url = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `${Api_url}?q=${city}&appid=${Api_key}&units=metric`
      );
      if (!response.ok) {
        throw new Error(`City not found: ${response.status}`);
      }
      let data = await response.json();

      // Process the data here
      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feels_like: data.main.feels_like,
        weather: data.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (city.trim()) {
        let newinfo = await getWeatherInfo(city); // Pass the city to the API call
        if (newinfo) {
          updateinfo(newinfo); // Update the parent component's state
        }
        setCity(""); // Clear the input field after submission
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="SearchBox">
        <h3>Search For The Weather</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="CityName"
            variant="outlined"
            required
            onChange={handleChange}
            value={city} // Bind the value to the state
          />
          <Button variant="contained" id="btn" type="submit">
            Submit
          </Button>
          {error && <p style={{ color: "red" }}>No such place Exist</p>}
        </form>
      </div>
    </div>
  );
}
