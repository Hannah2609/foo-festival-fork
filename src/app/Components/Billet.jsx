import React from 'react'
import Link from 'next/link';
import { Bebas_Neue,} from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Billet() {
  return (
    <article className="bg-fooGrey-900 rounded-large w-80">
      <div className="p-6">
        <h2 className={`${bebasNeue.className} mb-4 text-5xl text-fooYellow-200`}>
          Foo-billet
        </h2>
        <ul className="mb-16">
          <li>Vel cras tempus egestas . </li>
          <li>ltrices feugiat eu turpis at. </li>
          <li>Lorem ipsum dolor sit  </li>
        </ul>
        <h2 className={`${bebasNeue.className} text-3xl mb-2 text-white`}>
          799 DKK
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

export default Billet