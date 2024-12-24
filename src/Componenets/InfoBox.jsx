import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Replacing SevereColdIcon
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./infoBox.css";

function InfoBox({ info }) {
  const Hotimage =
    "https://images.unsplash.com/photo-1553649084-3e42773ff0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bW1lciUyMHdlYXRoZXIlMjBpbWFnZSUyMHN1bnxlbnwwfHwwfHx8MA%3D%3D";

  const winter =
    "https://images.unsplash.com/photo-1514632595-4944383f2737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlciUyMGlhbWdlfGVufDB8fDB8fHww";
  const monsoon =
    "https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlciUyMGlhbWdlfGVufDB8fDB8fHww";

  return (
    <>
      <div className="infobox">
        <div className="weather">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  ? monsoon
                  : info.temp > 15
                  ? Hotimage
                  : winter
              }
              title="Weather Image"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"></Typography>
              <p className="city">
                {info.city}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon /> // Updated icon for cold weather
                )}
              </p>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <p className="temprature">Temperature {info.temp}&deg;C</p>
                <p className="humidity">Humidity {info.humidity}</p>
                <p className="min-temp">Min Temperature {info.tempMin}&deg;C</p>
                <p className="max-temp">Max Temperature {info.tempMax}&deg;C</p>
                <p className="feels-like">
                  The weather can be described as {info.weather} and feels like{" "}
                  {info.feels_like}
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default InfoBox;
