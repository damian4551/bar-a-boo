import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ cords }) => {
  return (
    <div className="map">
      <LoadScript googleMapsApiKey="AIzaSyBVwBodV6JIpuAxIxylfKRapUaj7yrfBQg">
        <GoogleMap
          mapContainerStyle={{ height: "500px", width: "100%" }}
          zoom={16}
          center={{ lat: cords.lat, lng: cords.lng }}
        >
          <Marker position={{ lat: cords.lat, lng: cords.lng }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
