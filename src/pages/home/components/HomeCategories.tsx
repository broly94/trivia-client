import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppState } from "../../../redux/store/store"

export default function HomeCategories() {

    const { categories } = useSelector((state: AppState) => state.category)

    return (
        <div className="home-categories flex justify-center flex-col mx-auto my-0 w-3/4">

            <h3 className="text-center p-5 hidden md:block">Categorias</h3>
            <div className="grid md:grid-cols-2 min-lg:grid-cols-3 justify-center">
                {
                    categories.map(cat => (
                        <Link key={cat.id} to={`/private/game/category/${cat.name}`} className="text-center p-10">{cat.name}</Link>
                    ))
                }
            </div>
        </div>
    )
}