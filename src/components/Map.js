import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map({ latlng, popup }) {
  return (
    <MapContainer
      center={latlng ? latlng : [-10, -55]}
      zoom={latlng ? 5 : 1}
      style={{ height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={latlng ? latlng : [-10, -55]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
