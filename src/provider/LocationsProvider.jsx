import { useState } from "react";
import { LocationsContext } from "../context";

export default function LocationsProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <LocationsContext value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationsContext>
  );
}
