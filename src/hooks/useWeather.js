import { useContext, useEffect } from "react";
import { useState } from "react";
import { LocationsContext } from "../context";

export default function useWeather() {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    latitude: "",
    longitude: "",
    temperature: "",
    humidity: "",
    windSpeed: "",
    maxTemp: "",
    minTemp: "",
    cloudy: "",
    time: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const { selectedLocation } = useContext(LocationsContext);

  const fetchingWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Loading Weather Data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        latitude: latitude,
        longitude: longitude,
        temperature: data?.main?.temp,
        humidity: data?.main?.humidity,
        windSpeed: data?.wind?.speed,
        maxTemp: data?.main?.temp_max,
        minTemp: data?.main?.temp_min,
        cloudy: data?.clouds?.all,
        time: data?.dt,
      };

      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding Location...",
    });

    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchingWeatherData(
        selectedLocation.latitude,
        selectedLocation.longitude
      );
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchingWeatherData(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return { weatherData, loading, error };
}

export { useWeather };
