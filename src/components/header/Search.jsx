import { useContext, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { LocationsContext } from "../../context";
import { getLocationsByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const { setSelectedLocation } = useContext(LocationsContext);

  const doSearch = useDebounce((term) => {
    const fetchLocation = getLocationsByName(term);
    setSelectedLocation({ ...fetchLocation });
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    doSearch(value);
  }

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required=""
          onChange={handleChange}
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
}
