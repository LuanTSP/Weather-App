import React from 'react';
import { TbCloudStorm } from 'react-icons/tb';
import { RiMistFill } from 'react-icons/ri';
import {
    BsCloudDrizzleFill,
    BsCloudRainFill,
    BsFillCloudSnowFill,
    BsFillSunFill,
    BsCloudFill,
} from 'react-icons/bs';

function WeatherSvg({cond}) {
  function determineSVG() {
    if (cond === "Thunderstorm") {
        return <TbCloudStorm />
    } else if (cond === "Drizzle") {
        return <BsCloudDrizzleFill />
    } else if (cond === "Rain") {
        return <BsCloudRainFill />
    } else if (cond === "Snow") {
        return <BsFillCloudSnowFill />
    } else if (cond === "Atmosphere") {
        return <RiMistFill />
    } else if (cond === "Clear") {
        return <BsFillSunFill />
    } else { //Clouds
        return <BsCloudFill />
    }
  }
  
    return (
    <>
        {determineSVG()}
    </>
  )
}

export { WeatherSvg }