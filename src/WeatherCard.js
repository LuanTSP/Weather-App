import React, { useState } from 'react';
import styled from 'styled-components';
import { WeatherBody } from './WeatherBody';
import { WeatherSearch } from './WeatherSearch';

function WeatherCard() {
  const [userInput, setUserInput] = useState();
  
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [cond, setCond] = useState("");
  const [condDescr, setCondDesc] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  const API_KEY = "32aaf48f46d9fc06f3a9a12316fcd917";

  function getUsefulWeatherData(data) {
    setTemp(data.main.temp);
    setCity(data.name);
    setFeelsLike(data.main.feels_like);
    setCond(data.weather[0].main);
    setCondDesc(data.weather[0].description);
    setWind(data.wind.speed);
    setHumidity(data.main.humidity);
    setLat(data.coord.lat);
    setLon(data.coord.lon);
  }

  function handleClick() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${API_KEY}&lang=pt-br`)
      .then(res => res.json())
      .then(data => {
        if (data.main) {
          document.getElementById("#open").style.height = "600px";
        } else {
          console.log("City not Found");
        }
        getUsefulWeatherData(data);
      })
      .catch((err) => {})
  }

  function handleChange() {
    setUserInput(document.getElementById("#searchInput").value);
  }
  
  return (
    <Container id={"#open"}>
      <WeatherSearch handleClick={handleClick} handleChange={handleChange} />
      <WeatherBody
        city={city}
        temp={temp}
        feelsLike={feelsLike}
        cond={cond}
        condDescr={condDescr}
        wind={wind}
        humidity={humidity}
        lat={lat}
        lon={lon}
      />
    </Container>
  )
}

export { WeatherCard }

const Container = styled.div`
  max-width: 600px;
  height: 80px;
  overflow: hidden;
  
  background: ${props => props.theme.colors.background2};
  border-radius: 0.5rem;
  
  display: flex;
  flex-direction: column;

  transition: all 250ms ease-in-out;
`