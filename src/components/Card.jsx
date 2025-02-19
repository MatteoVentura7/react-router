import { Link } from "react-router-dom";

export default function Card({ pers }) {
  return (
    <div className="p-4 shadow-lg text-center">
      <img
        className="aspect-square object-cover"
        src={pers.image}
        alt={pers.name}
      />
      <Link to={`/menu/${pers.id}`}>
        <h3 className="text-orange-500 text-lg font-bold">{pers.name}</h3>
      </Link>
    </div>
  );
}
