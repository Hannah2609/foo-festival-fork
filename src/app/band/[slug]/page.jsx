import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "../../../components/Singleview.module.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export async function generateStaticParams() {
  const res = await fetch("https://robust-ionized-tartan.glitch.me/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function Singlepage({ params }) {
  const { slug } = params;
  console.log(slug);
  const res = await fetch(
    `https://robust-ionized-tartan.glitch.me/bands/${slug}`
  );

  const data = await res.json();
  const { name, logo, bio, genre, logoCredits, members } = data;

  return (
    <>
      <Header />
      <section className={styles.container}>
        {logo && logo.startsWith("http") ? (
          <Image src={logo} fill className="object-cover" alt="band image" />
        ) : (
          <Image
            fill
            src={`https://robust-ionized-tartan.glitch.me/logos/${logo}`}
            className="object-cover"
            alt="band image"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 pt-40 pl-2 bg-gradient-to-t from-black to-transparent-200"></div>
      </section>
      <main className="-mt-24 sm:-mt-36 relative z-10">
        <div>
          <h3
            className={`${bebasNeue.className} text-2xl text-center text-fooYellow-200`}
          >
            {genre}
          </h3>
          <h1
            className={`${bebasNeue.className} text-center text-5xl sm:text-7xl opacity-100`}
          >
            {name}
          </h1>
        </div>
        <section className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-10 sm:mt-20">
          <div className="flex items-start gap-3">
            <Image
              src="/medlemmer.svg"
              width={40}
              height={40}
              alt="musik ikon"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl">Medlemmer</h2>
              <ul className="mt-2">
                {members && members.map((name) => <li key={slug}>{name}</li>)}
              </ul>
            </div>
          </div>
          <article>
            <p>{bio}</p>
            {logoCredits && (
              <p className="text-xs text-fooGrey-200 mt-2">
                Fotocredits: {logoCredits}
              </p>
            )}
          </article>
        </section>
      </main>
    </>
  );
}
