import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import CurrentWeatherData from "./CurrentWeatherData";
import reducer from "@/constants/reducer";

const CurrentWeather = (props: any) => {
  // State to store weather data
  const [weather, setWeather] = useState<any>();
  // useReducer to handle weather code state
  const [code, dispatch] = useReducer(reducer, { desc: "", icon: "" });

  // Function to fetch weather data from API
  const fetchData = async () => {
    try {
      const result = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: props.latitude,
          longitude: props.longitude,
          current:
            "temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m",
        },
      });
      setWeather(result.data.current); // Update weather state with API response
      const code = result.data.current.weather_code;
      dispatch({ type: code }); // Dispatch action to update weather code state
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 rounded-lg shadow-lg bg-blue-sky-gradient w-full sm:p-8 md:p-10 lg:p-8">
      <h3 className="text-xl font-semibold mb-4">Current Weather</h3>
      {/* Render weather data if available */}
      {weather && (
        <>
          <div className="flex flex-row gap-4 lg:flex-row items-center mb-4">
            <div>
              <i className={`fa ${code?.icon} text-8xl sm:text-7xl`}></i>
            </div>
            <div>
              <h6 className="text-4xl font-semibold">
                {weather.temperature_2m}°C
              </h6>
              <p className="text-lg">{code?.desc}</p>
            </div>
          </div>
          <div className="bg-gray-200 h-px mb-4"></div>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 lg:grid-cols-2">
            {/* Render individual weather data points using CurrentWeatherData component */}
            <CurrentWeatherData
              label="Humidity"
              value={`${weather.relative_humidity_2m}%`}
            />
            <CurrentWeatherData
              label="Precipitation"
              value={`${weather.precipitation}mm`}
            />
            <CurrentWeatherData
              label="Cloud Cover"
              value={`${weather.cloud_cover}%`}
            />
            <CurrentWeatherData
              label="Wind Speed"
              value={`${weather.wind_speed_10m} km/hr`}
            />
            <CurrentWeatherData
              label="Wind Direction"
              value={`${weather.wind_direction_10m}°`}
            />
            <CurrentWeatherData
              label="Wind Gusts"
              value={`${weather.wind_gusts_10m} km/hr`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
