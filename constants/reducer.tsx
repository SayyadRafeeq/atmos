const reducer = (code: any, action: any) => {
  switch (action.type) {
    case 0:
      return { desc: "Clear sky", icon: "fa-sun" };
    case 1:
      return { desc: "Mainly clear", icon: "fa-cloud-sun" };
    case 2:
      return { desc: "Partly cloudy", icon: "fa-cloud" };
    case 3:
      return { desc: "Overcast", icon: "fa-cloud" };
    case 45:
      return { desc: "Fog", icon: "fa-smog" };
    case 48:
      return { desc: " Depositing rime fog", icon: "fa-smog" };
    case 51:
      return { desc: "Drizzle: Light", icon: "fa-cloud-rain" };
    case 53:
      return { desc: "Drizzle: Moderate", icon: "fa-cloud-rain" };
    case 55:
      return { desc: "Drizzle: Dense intensity", icon: "fa-cloud-rain" };
    case 56:
      return { desc: "Freezing Drizzle: Light", icon: "fa-snowflake" };
    case 57:
      return {
        desc: "Freezing Drizzle: Dense intensity",
        icon: "fa-snowflake",
      };
    case 61:
      return { desc: "Rain: Slight", icon: "fa-cloud-showers-heavy" };
    case 63:
      return { desc: "Rain: Moderate", icon: "fa-cloud-showers-heavy" };
    case 65:
      return { desc: "Rain: Heavy Intensity", icon: "fa-cloud-showers-heavy" };
    case 66:
      return { desc: " Freezing Rain: Light", icon: "fa-cloud-meatball" };
    case 67:
      return {
        desc: " Freezing Rain: Heavy Intensity",
        icon: "fa-cloud-meatball",
      };
    case 71:
      return { desc: "Snow fall: Slight", icon: "fa-snowflake" };
    case 73:
      return { desc: "Snow fall: Moderate", icon: "fa-snowflake" };
    case 75:
      return { desc: "Snow fall: Heavy Intensity", icon: "fa-snowflake" };
    case 77:
      return { desc: " Snow grains", icon: "fa-snowflake" };
    case 80:
      return { desc: "Rain showers: Slight", icon: "fa-cloud-showers-heavy" };
    case 81:
      return { desc: "Rain showers: Moderate", icon: "fa-cloud-showers-heavy" };
    case 82:
      return { desc: "Rain showers: Violent", icon: "fa-cloud-showers-heavy" };
    case 85:
      return { desc: " Snow showers slight", icon: "fa-snowflake" };
    case 86:
      return { desc: " Snow showers heavy", icon: "fa-snowflake" };
    case 95:
      return { desc: "Thunderstorm: Slight or moderate", icon: "fa-bolt" };
    case 96:
      return {
        desc: "Thunderstorm with slight",
        icon: "fa-cloud-showers-heavy",
      };
    case 99:
      return {
        desc: "Thunderstorm with heavy hail",
        icon: "fa-cloud-meatball",
      };
  }
};
export default reducer;
