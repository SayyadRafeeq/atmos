import reducer from "@/constants/reducer";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HourlyWeather = (props: any) => {
  // State variables to store hourly weather data
  const [hourlyData, setHourlyData] = useState({
    time: [],
    temperature_2m: [],
    relative_humidity_2m: [],
    weather_code: [],
    wind_speed_10m: [],
  });

  // State variables for managing weather code and hour time
  const [code, dispatch] = useReducer(reducer, { desc: "", icon: "" });
  const [hourTime, setHourTime] = useState(0);
  const [weatherCodes, setWeatherCodes] = useState([]);

  // Responsive settings for Carousel
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 1536, min: 1280 }, items: 4 },
    desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Function to fetch hourly weather data from API
  const fetchData = async () => {
    try {
      const result = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: props.latitude,
          longitude: props.longitude,
          hourly:
            "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
          forecast_days: "1",
          timezone: "auto",
        },
      });

      // Extract hourly data and current hour
      const hourly = result.data.hourly;
      const currentHour = new Date().getHours();

      // Find index of current hour in hourly data
      const currentHourIndex = hourly.time.findIndex(
        (time: string) => new Date(time).getHours() === currentHour
      );

      // Set hourly data and current hour time
      setHourlyData(hourly);
      setHourTime(currentHourIndex);
    } catch (error) {
      console.error(error); // Log any errors
    }
  };

  // Effect to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Effect to update weather codes when hourly data changes
  useEffect(() => {
    if (hourlyData.time.length > 0) {
      const codes = hourlyData.weather_code.slice(hourTime + 1, hourTime + 7);
      setWeatherCodes(codes);
    }
  }, [hourlyData, hourTime]);

  // Function to dispatch weather code to reducer
  const getWeatherData = (code: any) => {
    dispatch({ type: code });
  };

  // Effect to update weather data when weather codes change
  useEffect(() => {
    if (weatherCodes.length > 0) {
      weatherCodes.forEach((code) => getWeatherData(code));
    }
  }, [weatherCodes]);

  return (
    // Render Carousel to display hourly weather data
    <Carousel
      responsive={responsive}
      itemClass="px-4"
      arrows={false}
      showDots={true}
      renderDotsOutside={true} // Ensure dots are inside
    >
      {/* Map through hourly data and render each hour */}
      {hourlyData.time.slice(hourTime + 1).map((time, index) => (
        <div
          key={index}
          className="bg-white opacity-95 p-4 rounded-lg shadow-lg grid gap-4"
        >
          {/* Display weather icon */}
          <h2 className="text-blue-teal-gradient font-semibold text-7xl text-center">
            <i className={`fa ${code?.icon}`}></i>
          </h2>
          <div className="flex flex-col items-center">
            {/* Display hour time */}
            <span className="bg-teal-400 text-xs sm:text-sm md:text-base text-white px-2 py-1.5 rounded-full">
              {new Date(time).toLocaleTimeString([], {
                hour: "2-digit",
                hour12: true,
                minute: "2-digit",
              })}
            </span>
            {/* Display temperature */}
            <p className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold text-center mt-2">
              {hourlyData.temperature_2m[index]}°C
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base">
            {/* Display wind speed */}
            <div className="flex items-center">
              <i className="fa fa-wind text-blue-teal-gradient"></i>
              <p className="text-gray-800 ml-0.5">
                {hourlyData.wind_speed_10m[index]} km/h
              </p>
            </div>
            {/* Display relative humidity */}
            <div className="flex items-center">
              <i className="fa fa-tint text-blue-teal-gradient"></i>
              <p className="text-gray-800 ml-0.5">
                {hourlyData.relative_humidity_2m[index]}%
              </p>
            </div>
          </div>
          {/* Display weather description */}
          <p className="text-center text-black text-sm sm:text-base md:text-lg">
            {code?.desc}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default HourlyWeather;
