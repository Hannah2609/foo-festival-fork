"use client";
import React from "react";
import { useState, useEffect } from "react";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


function Lineup() {
  const [names, setNames] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => {
        setNames(data);
      });
  }, []);

  return (
    <section className="mt-20 mb-20">
      <h1
        className={`${bebasNeue.className} text-6xl text-fooYellow-200 text-center`}
      >
        Lineup
      </h1>
      <ol
        className={`flex flex-wrap gap-5 mb-10 lg:m-10 justify-center items-baseline uppercase font-semibold	`}
      >
        {names.slice(0, 30).map((band, index) => (
          <li
            key={band.slug}
            className={
              index < 6
                ? "text-3xl lg:text-5xl transition ease-in-out hover:-translate-y-1 hover:text-fooPink-900 duration-300 cursor-pointer	"
                : index < 16
                ? "text-xl lg:text-3xl transition ease-in-out hover:-translate-y-1 hover:text-fooPink-900 duration-300 cursor-pointer	"
                : "text-sm lg:text-xl transition ease-in-out hover:-translate-y-1 hover:text-fooPink-900 duration-300 cursor-pointer	"
            }
          >
            {band.name}
          </li>
        ))}
      </ol>
      <h2 className="text-center uppercase font-medium text-sm">
        Og mange flere...
      </h2>
    </section>
  );

}

export default Lineup;
