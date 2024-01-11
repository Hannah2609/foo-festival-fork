"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function NavBar() {
  
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-10 ${
          navbar
            ? "bg-black"
            : "bg-gradient-to-b from-fooBlack-900 to-transparent-200"
        }`}
      >
        <div className="justify-between px-4 md:mx-10 mt-4">
          <div>
            <div className="flex items-center justify-between py-3 ">
              <Link className="flex flex-col items-center" href="/">
                <Image src={"/logo.svg"} width={80} height={80} alt="Logo" />
              </Link>

              <div>
                <button
                  className="p-2 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/closing.svg"
                      width={30}
                      height={30}
                      alt="close hamburger menu"
                    />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width={40}
                      height={40}
                      alt="hamburger menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="h-screen items-center justify-center flex flex-col gap-6 pb-28 md:pb-20">
              <li
                className={`pb-6 text-5xl lg:text-6xl text-fooYellow-200 py-2 md:px-6 text-center hover:text-fooPink-800 focus:text-fooPink-900 ${bebasNeue.className}`}
              >
                <Link href="/billetter" onClick={() => setNavbar(false)}>
                  Billetter
                </Link>
              </li>
              <li
                className={`pb-6 text-5xl lg:text-6xl text-fooYellow-200 py-2 md:px-6 text-center hover:text-fooPink-800 focus:text-fooPink-900 ${bebasNeue.className}`}
              >
                <Link href="/program" onClick={() => setNavbar(false)}>
                  Program
                </Link>
              </li>
              <li
                className={`pb-6 text-5xl lg:text-6xl text-fooYellow-200 py-2 md:px-6 text-center hover:text-fooPink-800 focus:text-fooPink-900 ${bebasNeue.className}`}
              >
                <Link href="/lineup" onClick={() => setNavbar(false)}>
                  Lineup
                </Link>
              </li>
              <li
                className={`pb-6 text-5xl lg:text-6xl text-fooYellow-200 py-2 md:px-6 text-center hover:text-fooPink-800 focus:text-fooPink-900 ${bebasNeue.className}`}
              >
                <Link href="/" onClick={() => setNavbar(false)}>
                  Camping
                </Link>
              </li>
              <li
                className={`pb-6 text-5xl lg:text-6xl text-fooYellow-200 py-2 md:px-6 text-center hover:text-fooPink-800 focus:text-fooPink-900 ${bebasNeue.className}`}
              >
                <Link href="/" onClick={() => setNavbar(false)}>
                  Bliv frivillig
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
