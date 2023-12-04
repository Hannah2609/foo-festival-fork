import React from "react";
import Image from "next/image";
import Link from "next/link";

function ActCard({ name, genre, start, end, src, slug }) {
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
      <Link href={'/program/' + slug} key={name}>klik</Link>
    </article>
  );
}

export default ActCard;
