import axios from "axios";
import React, { useEffect, useState } from "react";

function DayLight(props: any) {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const fetchData = async () => {
    try {
      const result = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: props.latitude,
          longitude: props.longitude,
          daily: "sunrise,sunset",
          timezone: "auto",
        },
      });

      const sunrise = result.data.daily.sunrise[0];
      const sunriseTime = sunrise.split("T")[1];

      const sunset = result.data.daily.sunset[0];
      const sunsetTime = sunset.split("T")[1];
      const [hours, minutes] = sunsetTime.split(":");
      let hoursIn12HrFormat = parseInt(hours) % 12 || 12;
      const setTime = `${hoursIn12HrFormat}:${minutes}`;

      setSunrise(sunriseTime);
      setSunset(setTime);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-row sm:flex-col gap-8 w-full sm:gap-12 lg:gap-8 lg:w-auto">
      <div className="relative flex justify-center items-center w-full sm:h-32 md:h-36 lg:h-44 lg:w-auto">
        <img
          src="https://freedesignfile.com/upload/2017/01/Sunrise-scenery-HD-picture.jpg"
          alt="Sunrise"
          className="object-cover rounded-lg w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold mb-4">
          <p className="text-xs sm:text-sm md:text-lg">Sunrise</p>
          <h4 className="text-sm sm:text-lg md:text-xl">{`${sunrise} am`}</h4>
        </div>
      </div>

       <div className="relative flex justify-center items-center w-full sm:h-32 md:h-36 lg:h-44 lg:w-auto">
        <img
          src="/sunset.jpg"
          alt="Sunset"
          className="object-cover rounded-lg w-full h-full"
        />
        {/* Display sunset time */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold mb-4">
          <p className="text-xs sm:text-sm md:text-lg">Sunset</p>
          <h4 className="text-sm sm:text-lg md:text-xl">{`${sunset} pm`}</h4>
        </div>
      </div>
    </div>
  );
}

export default DayLight;
