"use client";
import React from "react";
import { useState, useEffect } from "react";

function Lineup() {
  const [names, setNames] = useState([]);

  useEffect(() => {

    fetch('http://localhost:8080/bands?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        setNames(data);
      });
  }, []);

  return (
    <>
      <h1>Lineup</h1>
      <ol className="flex flex-wrap gap-4 m-10 justify-center items-baseline">
        {names.map((band, index) => (
          <li
            key={band.slug}
            className={
              index < 4
                ? "text-6xl "
                : index < 15
                ? "text-3xl"
                : "text-xl"
            }
          >
            {band.name}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Lineup;
