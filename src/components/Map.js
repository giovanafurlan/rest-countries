import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map({ latlng, popup }) {
  const formattedText = `
  Informações do país:
  \nNome: ${popup?.name}
  \nPopulação: ${popup?.population}
  \nIdioma: ${popup?.language}
  \nMoeda: ${popup?.currency}
  \nCapital: ${popup?.capital}
  \nContinente: ${popup?.region}
  `;

  return (
    <MapContainer
      center={latlng != null ? latlng : [-10, -55]}
      zoom={latlng ? 5 : 1}
      style={{ height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={latlng != null ? latlng : [-10, -55]}>
        <Popup>{formattedText}</Popup>
      </Marker>
    </MapContainer>
  );
}
