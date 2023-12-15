"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Singleview.module.css";
import LoadingAnimation from "./LoadingAnimation";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function SingleView({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <section className={styles.container}>
            {data.logo && data.logo.startsWith("http") ? (
              <Image
                src={data.logo}
                fill
                className="object-cover"
                alt="band image"
              />
            ) : (
              <Image
                fill
                src={`https://robust-ionized-tartan.glitch.me/logos/${data.logo}`}
                className="object-cover"
                alt="band image"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 pt-40 pl-2 bg-gradient-to-t from-black to-transparent-200"></div>
          </section>
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            animate={{ y: -35 }}
            viewport={{ once: true }}
          >
            <main className="-mt-32 sm:-mt-40 relative z-10">
              <div>
                <h3
                  className={`${bebasNeue.className} text-2xl text-center text-fooYellow-200`}
                >
                  {data.genre}
                </h3>
                <h1
                  className={`${bebasNeue.className} text-center text-5xl sm:text-7xl opacity-100`}
                >
                  {data.name}
                </h1>
              </div>
              <div className="sm:rounded-full sm:p-1 sm:bg-fooPink-900 sm:w-max">
                <Link href="/program">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="40"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </Link>
              </div>
              <section className="grid sm:grid-cols-2 grid-cols-1 gap-10 md:gap-4 mt-2 sm:mt-16 sm:mx-28">
                <div className="flex gap-3 mt-6 sm:mt-1 lg:mt-2">
                  <div className="flex flex-col">
                    <h2 className={`${bebasNeue.className} text-2xl`}>
                      Medlemmer
                    </h2>
                    <ul className="mt-4">
                      {data.members &&
                        data.members.map((name) => (
                          <li key={data.slug}>{name}</li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h2 className={`${bebasNeue.className} text-2xl mb-4`}>
                    Om {data.name}
                  </h2>

                  <p>{data.bio}</p>
                  {data.logoCredits && (
                    <p className="text-xs text-fooGrey-200 mt-2">
                      Fotocredits: {data.logoCredits}
                    </p>
                  )}
                </div>
              </section>
            </main>
          </motion.section>
        </>
      )}
    </div>
  );
}

export default SingleView;
