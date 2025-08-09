import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
function Map(props: any) {
  const position = props.coordinates;
  const icon = L.icon({ iconUrl: "/weather_marker.png" });
  return (
   <MapContainer
      center={position} // Center of the map
      zoom={13} // Initial zoom level
      scrollWheelZoom={false} // Disable zoom on scroll
      className="w-full h-80 sm:h-96 md:h-96 lg:h-96 rounded-lg" // Responsive size
    >
      {/* Tile layer for the base map */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker on the map */}
      <Marker position={position} icon={icon}>
        {/* Popup that appears when marker is clicked */}
        <Popup>{`${position[0]}, ${position[1]}`}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
