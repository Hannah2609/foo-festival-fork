"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <section>
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            animate={{ y: 0 }}
            viewport={{ once: true }}
          >
            <h1
              className={`${bebasNeue.className} text-6xl text-fooYellow-200 text-center`}
            >
              Lineup
            </h1>

            <ol
              className={`flex flex-wrap gap-5 mb-10 mt-10 lg:m-10 justify-center items-baseline uppercase font-semibold	`}
            >
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
            
          </motion.div>

          <div className="flex justify-center mt-40">
            <Link href={"/lineup"}>
              <button className="flex items-end relative bg-fooGrey-900 pr-10 pl-40 py-8 gap-4 rounded-full max-w-fit transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fooPink-800 duration-300 cursor-pointer">
                <Image
                  src={"/singer.svg"}
                  width={100}
                  height={100}
                  sizes="(max-width: 768px) 40px, (max-width: 1200px) 90px, 100px"
                  className="absolute left-8 bottom-7"
                  alt="Årets program"
                />
                <p
                  className={`text-base font-medium md:text-lg lg:text-xl uppercase`}
                >
                  Se hele lineuppet
                </p>
                <Image src={"/pil.svg"} width={40} height={40} alt="arrow" />
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

export default Lineup;
