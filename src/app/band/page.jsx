"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

function Band() {
  const [band, setBand] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/bands/a-perfect-circle")
      .then((res) => res.json())
      .then((data) => {
        setBand(data);
      });
  }, []);

  return (
    <>
      {/* <Image src={band.logo} className="aspect-square object-contain mx-auto" width={300} height={300} alt="product image" /> */}
      <div>
        <h3 className="text-center text-fooYellow-200">{band.genre}</h3>
        <h1 className="text-center text-4xl">{band.name}</h1>
      </div>

      <section className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <div></div>
          <div>
            <h2>Medlemmer</h2>
            <p>{band.members}</p>
            {/* <ol>
              {band.members.map((name, index) => (
                <li key={`${band.slug}-${index}`}>{name}</li>
              ))}
            </ol> */}
          </div>
        </div>
        <article>
          <p>{band.bio}</p>
          <p>{band.logoCredits}</p>
        </article>
      </section>
    </>
  );
}

export default Band;
