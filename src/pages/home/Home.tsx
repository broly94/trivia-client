import HomeCategories from "./components/HomeCategories"
import HomeRankig from "./components/HomeRanking"
import { lazy } from "react"
import { HomeProvider } from "./context/HomeContext"

const Navbar = lazy(() => import('../../components/layouts/Navbar'))

function Home() {

  return (
    <div className="flex flex-col justify-center w-full h-full relative">

      <Navbar />

      <HomeProvider>
        <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700 relative top-28 lg:top-16 mb-10">Trivia <span className="text-yellow-300">Game</span></h3>

        <div className="relative top-28 lg:top-20 z-0 py-5">


          <section className="home-center flex flex-col lg:flex-row gap-5 px-5">

            <HomeCategories />

            <HomeRankig />

          </section>

        </div>
      </HomeProvider>
    </div>
  )
}

export default Home