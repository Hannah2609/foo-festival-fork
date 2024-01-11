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

function FullLineup() {
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
          className="mt-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          animate={{ y: 0 }}
          viewport={{ once: true }}
        >
          <ol
            className={`flex flex-wrap gap-5 mb-10 mt-10 lg:m-10 justify-center items-baseline uppercase 	`}
          >
            {names.map((band, index) => (
              <li
                key={band.slug}
                className={
                  index < 17
                    ? "text-3xl lg:text-6xl transition ease-in-out hover:-translate-y-1 hover:text-fooPink-900 duration-300 cursor-pointer font-semibold	"
                    : index < 36
                    ? "text-xl lg:text-4xl transition ease-in-out hover:-translate-y-1 hover:text-fooPink-900 duration-300 cursor-pointer	font-semibold"
                    : index < 62
                    ? "text-base lg:text-2xl transition ease-in-out hover:-translate-y-1 hover:text-fooPink-900 duration-300 cursor-pointer"
                    : "text-xs lg:text-base transition ease-in-out hover:-translate-y-1 hover:text-fooPink-900 duration-300 cursor-pointer"
                }
              >
                {" "}
                <Link href={`/band/${band.slug}`} key={band.slug}>
                  {band.name}
                </Link>
              </li>
            ))}
          </ol>
        </motion.section>
      )}
    </>
  );
}

export default FullLineup;
