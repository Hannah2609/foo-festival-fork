import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function VipBillet() {
  return (
    <article className="bg-fooGrey-900 rounded-large w-80 h-fit">
      <div className="p-6">
        <h2
          className={`${bebasNeue.className} mb-4 text-5xl text-fooYellow-200`}
        >
          VIP-billet
        </h2>
        <ul className="mb-10">
          <li>Vel cras tempus egestas . </li>
          <li>ltrices feugiat eu turpis at. </li>
          <li>Lorem ipsum dolor sit </li>
        </ul>
        <h2 className={`${bebasNeue.className} text-3xl mb-2 text-white`}>
          1299 DKK
        </h2>
        <Link href={""}>
          <button className="bg-fooPink-900 p-4 rounded-full w-full">
            {" "}
            Køb din billet{" "}
          </button>
        </Link>
      </div>
    </article>
  );
}

export default VipBillet;
