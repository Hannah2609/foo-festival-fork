"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";


function Singlepage() {
  const [band, setBand] = useState([]);
  const [program, setProgram] = useState([]);

  useEffect(() => {
    const fetchBandInfo = fetch("http://localhost:8080/bands/the-beatles").then(
      (res) => res.json()
    );
    const fetchProgramInfo = fetch("http://localhost:8080/schedule/").then(
      (res) => res.json()
    );
    // bruger promise.all til at fetche 2 url samtidigt
    Promise.all([fetchBandInfo, fetchProgramInfo]).then(
      ([bandData, programData]) => {
        setBand(bandData);
        setProgram(programData);
      }
    );
  }, []);

  //   kode til kun at fetche en datafil
  //   useEffect(() => {
  //     fetch("http://localhost:8080/bands/a-perfect-circle")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBand(data);
  //       });

  return (
    <>
      <main>
        {band.logo && band.logo.startsWith("http") ? (
          <Image
            src={band.logo}
            className="aspect-square object-contain mx-auto"
            width={300}
            height={300}
            alt="product image"
          />
        ) : (
          <Image
            src={`https://robust-ionized-tartan.glitch.me/logos/${band.logo}`}
            className="aspect-square object-contain mx-auto"
            width={300}
            height={300}
            alt="product image"
          />
        )}
        <div>
          <h3 className="text-center text-fooYellow-200">{band.genre}</h3>
          <h1 className="text-center text-4xl">{band.name}</h1>
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
                  {band.members &&
                    band.members.map((name) => <li key={band.slug}>{name}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <article>
            <p>{band.bio}</p>

            {/* hvis band.logoCredits findes og er sand returnerer den nedenstående*/}
            {band.logoCredits && (
              <p className="text-xs text-fooGrey-200 mt-2">
                Fotocredits: {band.logoCredits}
              </p>
            )}
          </article>
        </section>
      </main>
    </>
  );
}

export default Singlepage;
