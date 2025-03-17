import { useContext, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { LocationsContext } from "../../context";
import { getLocationsByName } from "../../data/location-data";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const { setSelectedLocation } = useContext(LocationsContext);

  function handleSearch(e) {
    e.preventDefault();
    const fetchLocation = getLocationsByName(searchTerm);
    setSelectedLocation({ ...fetchLocation });
    console.log(fetchLocation);
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required=""
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
}
