import Lineup from "../components/Lineup";
import Footer from "../components/Footer";
import Knap from "../components/Knap";
import Link from "next/link";
import Header from "../components/Header";
import { Bebas_Neue } from "next/font/google";
import Skib from "@/components/Skib";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "FooFest | Forside",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col justify-center items-center h-screen relative -mx-20">
          <h2
            className={`${bebasNeue.className} text-2xl text-center mb-4 text-fooYellow-200`}
          >
            FooFest
          </h2>
          <h1
            className={`${bebasNeue.className} text-7xl md:text-8xl lg:text-9xl lg:max-w-3xl text-fooYellow-200 text-center mb-20`}
          >
            Natur, kultur og god musik
          </h1>
          <button
            className={`text-center font-medium rounded-full bg-fooPink-900 p-4 px-10 text-base max-w-fit lg:p-4 lg:px-14 lg:text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 uppercase hover:bg-fooPink-800 duration-300 cursor-pointer`}
          >
            <Link href="/billetter">Køb billetter</Link>
          </button>
          <Link href="#lineup" className="mt-20 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#FAE499"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </Link>
          <Skib />
        </section>
        <div id="lineup"></div>
        <Lineup />
        <Knap />
      </main>
      <Footer />
    </>
  );
}
