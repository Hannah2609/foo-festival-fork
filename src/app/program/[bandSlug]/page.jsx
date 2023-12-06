import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

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
  const res = await fetch(
    `https://robust-ionized-tartan.glitch.me/bands?slug=${slug}`
  );

  const data = await res.json();
  const { name, logo, bio, genre, logoCredits, members } = data;

  return (
    <>
      <Header />
      <main>
        <div className="h-screen relative">
          {logo && logo.startsWith("http") ? (
            <Image
              src={logo}
              fill
              className="aspect-video object-cover mx-auto "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="product image"
            />
          ) : (
            <Image
              fill
              src={`https://robust-ionized-tartan.glitch.me/logos/${logo}`}
              className="aspect-video object-cover mx-auto "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="product image"
            />
          )}
        </div>
        <div>
          <h3 className="text-center text-fooYellow-200">{genre}</h3>
          <h1 className="text-center text-4xl">{name}</h1>
        </div>
        <section className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-20">
          <div>
            <div className="flex items-start gap-3">
              <div>
                <Image
                  src="/musik.svg"
                  width={40}
                  height={40}
                  alt="musik ikon"
                />
              </div>
              <div>
                <h2>Midgaard</h2>
                <h2>08:20 - 09:00</h2>
              </div>
            </div>
            <div className="flex items-start mt-10 gap-3">
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
          </div>
          <article>
            <p>{bio}</p>

            {/* hvis band.logoCredits findes og er sand returnerer den nedenstående*/}
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
