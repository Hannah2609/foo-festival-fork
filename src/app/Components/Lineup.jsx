"use client";
import React from "react";
import { useState, useEffect } from "react";

function Lineup({ data }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      <h1>Lineup</h1>
      <ol className="flex flex-wrap gap-4 m-10 justify-center">
        {articles.map((bands) => (
          <li key={bands.slug}>{bands.name}</li>
        ))}
      </ol>
    </>
  );
}

export default Lineup;
