import Categories from "./layouts/Categories";
import Rankig from "./layouts/Ranking";
import { HomeProvider } from "./context/HomeContext";
import Navbar from "../../components/layouts/Navbar";

function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-full mx-0 my-auto">
      <Navbar />

      <HomeProvider>
        <div className="h-full w-full mx-0 my-auto">
          <h3 className="text-center py-10 font-bold capitalize text-5xl text-gray-800 font-sans underline">
            Diviértete, Aprende Y Comparte
          </h3>

          <section className="home-center flex flex-col lg:flex-row gap-5 px-5 mx-auto my-0 h-full">
            <Categories />

            <Rankig />
          </section>
        </div>
      </HomeProvider>
    </div>
  );
}

export default Home;
