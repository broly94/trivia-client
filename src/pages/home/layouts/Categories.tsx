import { useHomeContext } from "../context/HomeContext";
import useGetCategories from "../hooks/useGetCategories";
import ListCategories from "../components/ListCategories";

export default function Categories() {
  useGetCategories();

  return (
    <div className="home-categories flex flex-col mx-auto my-0 w-full max-w-3xl">
      <ListCategories />
    </div>
  );
}
