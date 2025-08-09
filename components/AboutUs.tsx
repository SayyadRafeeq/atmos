import React from "react";

function AboutUs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-8">
      <div className="bg-white rounded-md p-4 shadow-lg flex flex-col items-center">
        <h2 className="text-6xl text-blue-sky-gradient">
          <i className="fa fa-cloud-sun-rain"></i>
        </h2>
        <h5 className="text-xl font-bold">Current Weather</h5>
        <p className="font-medium text-base text-center">
          Displays real-time weather conditions, including temperature,
          humidity, and wind speed
        </p>
      </div>

      <div className="bg-white rounded-md p-4 shadow-lg flex flex-col items-center">
        <h2 className="text-6xl text-blue-sky-gradient">
          <i className="fa fa-cloud-sun"></i>
        </h2>
        <h5 className="text-xl font-bold">Sunrise and Sunset</h5>
        <p className="font-medium text-base text-center">
          Provides accurate sunrise and sunset times for any location, helping
          users plan their day accordingly.
        </p>
      </div>

      <div className="bg-white rounded-md p-4 shadow-lg flex flex-col items-center">
        <h2 className="text-6xl text-blue-sky-gradient">
          <i className="fa fa-map-location-dot"></i>
        </h2>
        <h5 className="text-xl font-bold">Map</h5>
        <p className="font-medium text-base text-center">
          Displays selected locations on an interactive map, allowing users to
          view weather conditions and forecasts for specific areas.
        </p>
      </div>

      <div className="bg-white rounded-md p-4 shadow-lg flex flex-col items-center">
        <h2 className="text-6xl text-blue-sky-gradient">
          <i className="fa fa-hourglass-end"></i>
        </h2>
        <h5 className="text-xl font-bold">Detailed Forecasts</h5>
        <p className="font-medium text-base text-center">
          Delivers comprehensive weather forecasts, including hourly, daily, and
          extended outlooks, enabling users to plan ahead with confidence.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
