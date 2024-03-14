import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
