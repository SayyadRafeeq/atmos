"use client"; // Ensure client-side only

import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type MapProps = {
  coordinates: [string, string] | [number, number];
};

export default function Map({ coordinates }: MapProps) {
  const position: [number, number] = [
    Number(coordinates[0]),
    Number(coordinates[1]),
  ];

  const icon = L.icon({
    iconUrl: "/weather_marker.png",
    iconSize: [32, 32], // adjust if needed
    iconAnchor: [16, 32], // center bottom
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-80 sm:h-96 md:h-96 lg:h-96 rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={icon}>
        <Popup>{`${position[0]}, ${position[1]}`}</Popup>
      </Marker>
    </MapContainer>
  );
}
