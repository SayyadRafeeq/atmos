const CurrentWeatherData = (props: any) => {
  return (
    <>
      {/* Container for weather data item */}
      <div className="flex flex-col items-start mb-1">
        {/* Label for the weather data (e.g., Humidity, Precipitation) */}
        <h5 className="text-xs font-semibold md:text-base">{props.label}</h5>
        {/* Value of the weather data (e.g., 75%, 10mm) */}
        <p className="text-sm">{props.value}</p>
      </div>
    </>
  );
};

export default CurrentWeatherData;
