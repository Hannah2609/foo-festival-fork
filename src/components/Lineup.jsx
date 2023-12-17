"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingAnimation from "./LoadingAnimation";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Lineup() {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://robust-ionized-tartan.glitch.me/bands")
      .then((res) => res.json())
      .then((data) => {
        setNames(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <motion.section
          className="my-20"
          initial={{ opacity: 0, y:300 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          animate={{ y: 0 }}
          viewport={{ once: true }}>

          <h1
            className={`${bebasNeue.className} text-6xl text-fooYellow-200 text-center`} >
            Lineup
          </h1>

          <ol
            className={`flex flex-wrap gap-5 mb-10 mt-10 lg:m-10 justify-center items-baseline uppercase font-semibold	`}>

            {names.slice(0, 30).map((band, index) => (
              <Link href={`/band/${band.slug}`} key={band.slug}>
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
              </Link>
            ))}

          </ol>

          <h2 className="text-center uppercase font-medium text-sm">
            Og mange flere...
          </h2>

        </motion.section>
      )}
    </>
  );
}

export default Lineup;
