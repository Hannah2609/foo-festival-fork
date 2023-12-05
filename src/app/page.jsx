import Lineup from "./Components/Lineup";
import Footer from "./components/Footer";
import Knap from "./Components/Knap";

import { Bebas_Neue, Poppins } from "next/font/google";


const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <main>
        <section className="flex flex-col justify-center items-center h-screen">
          <h2
            className={`${bebasNeue.className} text-2xl text-fooYellow-200 text-center mb-4`}
          >
            FooFest
          </h2>
          <h1
            className={`${bebasNeue.className} text-7xl md:text-8xl lg:text-9xl lg:max-w-3xl text-fooYellow-200 text-center mb-20`}
          >
            Natur, kultur og god musik
          </h1>
          <button
            className={`text-center rounded-full bg-fooPink-900 p-2 px-10 text-base max-w-fit lg:p-4 lg:px-10 lg:text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-fooPink-800 duration-300 cursor-pointer	`}
          >
            Køb billetter
          </button>
        </section>
        <Lineup />
        <Knap />
        
      </main>
      <Footer />
    </>
  );
}
