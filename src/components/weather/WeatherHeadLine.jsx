import { useContext } from "react";
import { WeatherContext } from "../../context";
import locationIcon from "./../../assets/pin.svg";

import sunIcon from "./../../assets/sun.svg";
import rainIcon from "./../../assets/rainy.svg";
import cloudsIcon from "./../../assets/cloud.svg";
import windIcon from "../../assets/icons/wind.svg";

import HazeIcon from "../../assets/haze.svg";
import { getTimeDateFormat } from "../../utils/date-utils";

export default function WeatherHeadLine() {
  const { weatherData } = useContext(WeatherContext);
  const { temperature, location, climate, time } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Clouds":
        return cloudsIcon;
      case "Rain":
        return rainIcon;
      case "Wind":
        return windIcon;
      case "Haze":
        return HazeIcon;

      default:
        return sunIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={locationIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getTimeDateFormat(time, "time", false)} -{" "}
        {getTimeDateFormat(time, "date", false)}
      </p>
    </div>
  );
}
