import React from "react";
import Image from "next/image";

function ActCard({ name, genre, start, end, src }) {
  return (
    <article className="min-w-fit">
      {src && src.startsWith("http") ? (
        <Image
          src={src}
          className="aspect-square object-cover mx-auto"
          width={300}
          height={300}
          alt="product image"
        />
      ) : (
        <Image
          src={`https://robust-ionized-tartan.glitch.me/logos/${src}`}
          className="aspect-square object-cover mx-auto"
          width={300}
          height={300}
          alt="product image"
        />
      )}
      <div>
        <p>{genre}</p>
        <h2>{name}</h2>
      </div>
      <h3>
        {start} - {end}
      </h3>
    </article>
  );
}

export default ActCard;
