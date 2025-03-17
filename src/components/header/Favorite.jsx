import heartIcon from "../../assets/heart.svg";

export default function Favorite({ onShow }) {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onShow}
    >
      <img src={heartIcon} alt="Heart icon" />
      <span>Favorite Locations</span>
    </div>
  );
}
