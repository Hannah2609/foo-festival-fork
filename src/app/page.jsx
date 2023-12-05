import Lineup from "./Components/Lineup";
import Footer from "./components/Footer";
import Knap from "./Components/Knap";
import Link from "next/link";
import Header from "./Components/Header";

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
      <Header />
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
            className={`text-center rounded-full bg-fooPink-900 p-2 px-10 text-base max-w-fit lg:p-4 lg:px-10 lg:text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 uppercase hover:bg-fooPink-800 duration-300 cursor-pointer	`}
          >
            <Link href="/billetter">Køb billetter</Link>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="#EC5564"
            class="bi bi-arrow-down-short"
            viewBox="0 0 16 16"
            className="mt-36 animate-bounce"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
        </section>
        <Lineup />
        <Knap />
      </main>
      <Footer />
    </>
  );
}
