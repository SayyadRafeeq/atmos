"use client"
import React, { useState } from "react";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";

const TabList = (props: any) => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("hourly");

  // Function to handle tab click event
  const handleTabClick = (tab: string) => {
    console.log("clicked")
    setActiveTab(tab);
    
  };

  return (
    // Container for the tab list and content
    <div className="mb-4 mt-10 bg-blue-sky-gradient p-4 rounded-lg">
      {/* Tab list */}
      <ul
        className="flex flex-wrap text-sm font-medium text-center"
        id="default-styled-tab"
        role="tablist"
      >
        {/* Hourly tab */}
        <li className="mr-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg text-xs md:text-sm lg:text-base ${
              activeTab === "hourly"
                ? "border-gray-400 text-gray-400"
                : "border-transparent"
            }`}
            id="hourly-styled-tab"
            type="button"
            role="tab"
            aria-controls="hourly"
            aria-selected={activeTab === "hourly"}
            onClick={() => handleTabClick("hourly")}
          >
            Hourly
          </button>
        </li>
        {/* Daily tab */}
        {/* <li className="mr-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg text-xs md:text-sm lg:text-base ${
              activeTab === "daily"
                ? "border-gray-400 text-gray-400"
                : "border-transparent"
            }`}
            id="daily-styled-tab"
            type="button"
            role="tab"
            aria-controls="daily"
            aria-selected={activeTab === "daily"}
            onClick={() => handleTabClick("daily")}
          >
            Daily
          </button>
        </li> */}
      </ul>
      {/* Tab content */}
      <div id="default-styled-tab-content">
        {/* Hourly weather */}
        <div
          className={`p-4 rounded-lg bg-blue-sky-gradient overflow-hidden ${
            activeTab === "hourly" ? "block" : "hidden"
          }`}
          id="hourly"
          role="tabpanel"
          aria-labelledby="hourly-styled-tab"
        >
          <HourlyWeather
            latitude={props.latitude}
            longitude={props.longitude}
          />
        </div>
        {/* Daily weather */}
        <div
          className={`p-4 rounded-lg bg-blue-sky-gradient overflow-hidden	 ${
            activeTab === "daily" ? "block" : "hidden"
          }`}
          id="daily"
          role="tabpanel"
          aria-labelledby="daily-styled-tab"
        >
          <DailyWeather latitude={props.latitude} longitude={props.longitude} />
        </div>
      </div>
    </div>
  );
};

export default TabList;
