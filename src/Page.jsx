import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

import clearSky from "./assets/backgrounds/clear-sky.jpg";
import mist from "./assets/backgrounds/mist.jpeg";
import fewClouds from "./assets/backgrounds/few-clouds.jpg";
import rainyDay from "./assets/backgrounds/rainy-day.jpg";
import sunny from "./assets/backgrounds/sunny.jpg";
import thunderStorm from "./assets/backgrounds/thunderstorm.jpg";

export default function Page() {
  const { loading, weatherData } = useContext(WeatherContext);
  const [climateBgImage, setClimateBgImage] = useState("");

  const { climate } = weatherData;

  useEffect(() => {
    const bgImage = dynamicImage(climate);
    setClimateBgImage(bgImage);
  }, [climate]);

  function dynamicImage(climate) {
    switch (climate) {
      case "Clouds":
        return fewClouds;
      case "Rain":
        return rainyDay;
      case "Wind":
        return mist;
      case "Haze":
        return thunderStorm;
      case "Clear":
        return clearSky;
      case "Sunny":
        return sunny;

      default:
        return clearSky;
    }
  }

  return (
    <>
      {loading.state ? (
        <p className="flex justify-center items-center bg-amber-100/5 h-screen text-xl">
          {loading.message}
        </p>
      ) : (
        <div
          style={{ backgroundImage: `url(${climateBgImage})` }}
          className="bg-cover bg-center bg-no-repeat"
        >
          <Header />

          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
