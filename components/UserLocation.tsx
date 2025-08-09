"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserLocation() {
  const [location, setLocation] = useState("Fetching location...");
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      setLoading(false)
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const result = await axios.get(
            `/api/reverse-geocode?lat=${latitude}&lon=${longitude}`
          );
          const data = result.data;

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            "Unknown location";

          setLocation(city);
        } catch (error) {
          console.error("Error fetching location:", error);
          setLocation("Error fetching location");
        } finally {
            setLoading(false)
        }
      },
      
    );
  }, []);

  return (
    <div className="flex items-center gap-2 ">
          <h2 className="text-lg font-bold"><i className="fa fa-location-dot"></i></h2>
          {loading ? (
            <span className="animate-pulse">Fetching Location....</span>
          ):(
            <span className="text-lg font-bold">{location}</span>
          )}
    </div>
  )
}

export default UserLocation;
