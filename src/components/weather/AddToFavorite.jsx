import heartIcon from "../../assets/heart.svg";
import redHeartIcon from "../../assets/heart-red.svg";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddToFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  const { weatherData } = useContext(WeatherContext);
  const { location, latitude, longitude } = weatherData;

  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  function handleFavorite() {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(location, latitude, longitude);
    } else {
      removeFromFavorites(location);
    }
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, [favorites, location]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
          onClick={handleFavorite}
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? redHeartIcon : heartIcon} alt="heart Icon" />
        </button>
      </div>
    </div>
  );
}
