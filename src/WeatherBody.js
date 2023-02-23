import React from 'react';
import styled from 'styled-components';
import { FaCloud, FaWind } from 'react-icons/fa';
import { ImLocation, ImDroplet } from 'react-icons/im';
import { MdMyLocation } from 'react-icons/md';
import { WeatherSvg } from './WeatherSvg';

function WeatherBody({city, temp, feelsLike, cond, condDescr, wind, humidity, lat, lon}) {
  return (
    <Container>
        <City>
          <ImLocation /> {city}
          <Condition>
            <WeatherSvg cond={cond} /> {cond} - {condDescr}
          </Condition>
        </City>
        <TempDisplay>
          <WeatherSvg cond={cond}/>
          <Temp>
            {Math.round(temp)}°C
            <p>
              Feels Like {Math.round(feelsLike)}°C
            </p>
          </Temp>
        </TempDisplay>
        <Info>
          <p> <FaWind /> wind - {wind} m/s</p>
          <p> <ImDroplet /> humidity - {humidity}%</p>
        </Info>
        <Info>
          <p> <MdMyLocation /> location - lat: {lat} lon: {lon}</p>
        </Info>
    </Container>
  )
}

export { WeatherBody }

const Container = styled.div`
    width: 100%;
    height: 100%;

    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const City = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text2};
  height: fit-content;
  margin-bottom: 0.5rem;

  svg {
    width: 25px;
    height: 25px;
    color: ${props => props.theme.colors.accent};
  }
`

const Condition = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  svg {
    margin-right: 1rem;
    color: ${props => props.theme.colors.accent};
  }
`

const TempDisplay = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 1rem;

  svg {
    width: 40%;
    height: 100%;
    color: ${props => props.theme.colors.text2};
    margin-right: 1rem;
  }

  border-bottom: 5px solid ${props => props.theme.colors.text2};
`

const Temp = styled.div`
  width: calc(60% - 1rem);
  min-height: fit-content;

  color: ${props => props.theme.colors.text2};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;

  p {
    width: 100%;
    font-size: 1rem;
  }
`

const Info = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 1rem;

  svg {
    margin-right: 0.5rem;
    width: 25px;
    height: 25px;
    color: ${props => props.theme.colors.accent};
  }

  p {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: ${props => props.theme.colors.text2};
    text-transform: capitalize;
  }
`