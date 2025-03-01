import Lineup from "../components/Lineup";
import Footer from "../components/Footer";
import Knap from "../components/Knap";
import Link from "next/link";
import Header from "../components/Header";
import { Bebas_Neue } from "next/font/google";
import Skib from "@/components/Skib";
import Faq from "@/components/Faq";

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
        <section className="flex flex-col justify-center items-center h-screen relative sm:-mx-16 -mx-9">
          <h2
            className={`${bebasNeue.className} text-2xl text-center mb-4 text-fooYellow-200`}
          >
            FooFest
          </h2>
          <h1
            className={`${bebasNeue.className} text-7xl md:text-8xl lg:text-9xl lg:max-w-3xl text-fooYellow-200 text-center mb-20 sm:mx-16 mx-9`}
          >
            Natur, kultur og god musik
          </h1>
          <button
            className={`text-center font-medium rounded-full bg-fooPink-800 p-4 px-10 text-base max-w-fit lg:p-4 lg:px-14 lg:text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 uppercase hover:bg-fooPink-900 duration-300 cursor-pointer`}
          >
            <Link href="/billetter">Køb billetter</Link>
          </button>

            <Link href="#lineup" className="mt-20 animate-bounce" aria-label="go down to lineup">
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
        <section className="mx-4 md:mx-40 lg:mx-60 xl:mx-80 mt-36">
          <Faq />
        </section>
      </main>
      <Footer />
    </>
  );
}
