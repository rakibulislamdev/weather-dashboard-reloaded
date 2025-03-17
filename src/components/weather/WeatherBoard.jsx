import AddToFavorite from "./AddToFavorite";
import WeatherConditions from "./WeatherConditions";
import WeatherHeadLine from "./WeatherHeadLine";

export default function WeatherBoard() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="mt-10 grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddToFavorite />
          <WeatherHeadLine />
          <WeatherConditions />
        </div>
      </div>
    </div>
  );
}
