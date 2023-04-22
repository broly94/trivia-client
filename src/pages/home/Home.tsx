import HomeCategories from "./components/HomeCategories"
import HomeRankig from "./components/HomeRanking"
import { HomeProvider } from "./context/HomeContext"
import Navbar from "../../components/layouts/Navbar"


function Home() {

  return (

    <div className="flex flex-col justify-center w-full h-full">

      <Navbar />

      <HomeProvider>

        <div className="relative top-64 sm:top-48 md:top-32 lg:top-10 xl:top-0 z-0 py-5">

          <h3 className="text-center py-10 font-bold capitalize text-5xl text-gray-800 font-sans underline">Diviértete, Aprende Y Comparte</h3>

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