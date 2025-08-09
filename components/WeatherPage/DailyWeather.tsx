import reducer from "@/constants/reducer";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function DailyWeather(props: any) {
  const [dailyData, setDailyData] = useState({
    time: [],
    temperature_2m_max: [],
    wind_direction_10m_dominant: [],
    weather_code: [],
    wind_speed_10m_max: [],
  });
  const [code, dispatch] = useReducer(reducer, { desc: "", icon: "" });
  const [weatherCodes, setWeatherCodes] = useState([]);
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 1536, min: 1280 }, items: 4 },
    desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const getWeatherData = (code: any) => {
    dispatch({ type: code });
  };
  useEffect(() => {
    if (weatherCodes.length > 0) {
      weatherCodes.forEach((code) => getWeatherData(code));
    }
  }, [weatherCodes]);
  const fetchData = async()=>{
    try{
        const result=await axios.get("https://api.open-meteo.com/v1/forecast",{
            params:{
                latitude:props.latitude,
                longitude:props.longitude,
                daily:
                 "weather_code,temperature_2m_max,wind_speed_10m_max,wind_direction_10m_dominant",
                 timezone:"auto"
            }
        }) 
        setDailyData(result.data.daily)       
    }
    catch(error){
        console.log(error)
    }
    useEffect(()=>{
        fetchData();
    },[])
  }
  return (
    <Carousel
      responsive={responsive}
      itemClass="px-4"
      arrows={false}
      showDots={true}
      renderDotsOutside={true} // Ensure dots are inside
    >
      {/* Render daily weather data in Carousel */}
      {dailyData.time.map((time, index) => (
        <div
          key={index}
          className="bg-white opacity-95 p-4 rounded-lg shadow-lg grid gap-4"
        >
          {/* Weather icon */}
          <h2 className="text-blue-teal-gradient font-semibold text-7xl text-center">
            <i className={`fa ${code?.icon}`}></i>
          </h2>
          <div className="flex flex-col items-center">
            {/* Date */}
            <span className="bg-teal-400 text-xs sm:text-sm md:text-base text-white px-2 py-1.5 rounded-full">
              {new Date(time).toLocaleDateString([], {
                month: "long",
                day: "2-digit",
              })}
            </span>
            {/* Max temperature */}
            <p className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold text-center mt-2">
              {dailyData.temperature_2m_max[index]}°C
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base">
            {/* Max wind speed */}
            <div className="flex items-center">
              <i className="fa fa-wind text-blue-teal-gradient"></i>
              <p className="text-gray-800 ml-0.5">
                {dailyData.wind_speed_10m_max[index]} km/h
              </p>
            </div>
            {/* Dominant wind direction */}
            <div className="flex items-center">
              <i className="fa fa-compass text-blue-teal-gradient"></i>
              <p className="text-gray-800 ml-0.5">
                {dailyData.wind_direction_10m_dominant[index]}
              </p>
            </div>
          </div>
          {/* Weather description */}
          <p className="text-center text-black text-sm sm:text-base md:text-lg">
            {code?.desc}
          </p>
        </div>
      ))}
    </Carousel>
  )
}

export default DailyWeather;
