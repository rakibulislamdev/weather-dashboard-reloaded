const data = [
  {
    location: "Dhaka",
    latitude: 23.685,
    longitude: 90.3563,
  },
  {
    location: "United States",
    latitude: 37.0902,
    longitude: -95.7129,
  },
  {
    location: "United Kingdom",
    latitude: 55.3781,
    longitude: -3.436,
  },
  {
    location: "Japan",
    latitude: 36.2048,
    longitude: 138.2529,
  },
  {
    location: "Australia",
    latitude: -25.2744,
    longitude: 133.7751,
  },
  {
    location: "Canada",
    latitude: 56.1304,
    longitude: -106.3468,
  },
  {
    location: "Germany",
    latitude: 51.1657,
    longitude: 10.4515,
  },
  {
    location: "India",
    latitude: 20.5937,
    longitude: 78.9629,
  },
  {
    location: "Brazil",
    latitude: -14.235,
    longitude: -51.9253,
  },
  {
    location: "South Africa",
    latitude: -30.5595,
    longitude: 22.9375,
  },
];

const getLocations = () => {
  return data;
};

const getLocationsByName = (location) => {
  if (!location) return null;

  const filterData = data.filter((item) => item.location === location);

  if (filterData.length > 0) {
    return filterData[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
};

export { getLocations, getLocationsByName };
