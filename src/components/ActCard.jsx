"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ActCard({ name, genre, start, end, src, slug, day }) {

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="min-w-fit snap-start rounded-lg overflow-hidden relative mb-10"
    >
      <Link href={`/band/${slug}`} key={slug} aria-label="læs mere">
        {src && src.startsWith("http") ? (
          <Image
            src={src}
            className="aspect-square object-cover mx-auto relative"
            width={300}
            height={300}
            alt=""
          />
        ) : (
          <Image
            src={`https://robust-ionized-tartan.glitch.me/logos/${src}`}
            className="aspect-square object-cover mx-auto relativ"
            width={300}
            height={300}
            alt=""
          />
        )}
        <div className="absolute inset-x-0 bottom-0 pt-40 pl-2 bg-gradient-to-t from-fooGrey-800 to-transparent-200">
          <p className="text-fooYellow-200 ">{genre}</p>
          <h3 className={`text-3xl ${bebasNeue.className} xl:text-4xl mb-2`}>
            {name}
          </h3>
          <div className="flex items-baseline gap-2">
            <h4 className="text-xl lg:text-2xl">
              {start} - {end}
            </h4>
            <p>{day}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default ActCard;
