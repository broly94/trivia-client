import Categories from "./layouts/Categories";
import { HomeProvider } from "./context/HomeContext";
import Navbar from "../../components/layouts/Navbar";

function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />

      <HomeProvider>
        <div className="flex flex-col w-full h-screen">

          <section className="home-center flex flex-row justify-center lg:flex-row gap-5 px-5 mx-auto my-0 h-full w-full">
            <Categories />

            {/* <Rankig /> */}
          </section>
        </div>
      </HomeProvider>
    </div>
  );
}

export default Home;
