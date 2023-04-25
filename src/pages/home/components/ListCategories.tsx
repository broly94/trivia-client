import { Link } from "react-router-dom";
import { useHomeContext } from "../context/HomeContext";

export default function ListCategories() {
  const { categories } = useHomeContext();

  return (
    <div className="flex flex-wrap flex-col w-full gap-2 p-2">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`/private/game/category/${cat.name}`}
          className="p-5 transition-colors hover:bg-green-300 hover:shadow-xl uppercase text-center font-bold text-base text-gray-900 border-2 border-zinc-600"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
