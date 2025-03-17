import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  function addToFavorites(location, latitude, longitude) {
    setFavorites([
      ...favorites,
      {
        location: location,
        latitude: latitude,
        longitude: longitude,
      },
    ]);
  }

  function removeFromFavorites(location) {
    const restFavorites = favorites.filter((fav) => fav.location !== location);

    setFavorites(restFavorites);
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
