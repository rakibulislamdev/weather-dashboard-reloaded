import Page from "./Page";
import { LocationsProvider } from "./provider";
import FavoriteProvider from "./provider/FavoriteProvider";

import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <LocationsProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationsProvider>
  );
}

export default App;
