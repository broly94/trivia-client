import DataIndex from "./utils/data-index.hook"

/** Components */
import HomeCategories from "./components/HomeCategories"
import HomeRankig from "./components/HomeRanking"
import { lazy } from "react"

const Navbar = lazy(() => import('../../components/layouts/Navbar'))

function Home() {

    DataIndex()

  return (
    <div className="w-full">
      <Navbar />

      <section className="home-center w-full md:w-3/4 justify-center grid grid-cols-1 md:grid-cols-2 mx-auto my-0">

        <HomeCategories />

        <HomeRankig />

      </section>

    </div>
  )
}

export default Home