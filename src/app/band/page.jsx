"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

function Band() {
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
          <div className="flex items-start gap-2">
            <div>
              <Image src="/musik.svg" width={40} height={40} alt="musik ikon" />
            </div>
            <div>
              <h2>Midgaard</h2>
              <h2>08:20 - 09:00</h2>
            </div>
          </div>
          <div className="flex items-start mt-10 gap-2">
            <Image
              src="/medlemmer.svg"
              width={40}
              height={40}
              alt="musik ikon"
            />
            <div>
              <h2>Medlemmer</h2>
              <ul>
                <li>{band.members}</li>
              </ul>
            </div>
            {/* <ol>
              {band.members.map((name, index) => (
                <li key={`${band.slug}-${index}`}>{name}</li>
              ))}
            </ol> */}
          </div>
        </div>
        <article>
          <p>{band.bio}</p>
          {/* if band.logoCredits er = nul så return ingenting ellers: */}
          {band.logoCredits ? (
            <p className="text-xs text-fooGrey-200 mt-2">
              Foto: {band.logoCredits}
            </p>
          ) : (
            <p></p>
          )}
          <p className="text-xs text-fooGrey-200 mt-2">
            Foto: {band.logoCredits}
          </p>
        </article>
      </section>
    </>
  );
}

export default Band;
