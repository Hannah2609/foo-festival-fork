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
        <h2
          className={`${bebasNeue.className} mb-4 text-5xl text-fooYellow-200`}
        >
          Foo-billet
        </h2>
        <ul className="mb-16 list-disc ml-4">
          <li className="text-sm">Vel cras tempus egestas. </li>
          <li className="text-sm">ltrices feugiat eu turpis at. </li>
          <li className="text-sm">Lorem ipsum dolor sit. </li>
        </ul>
        <h2 className={`${bebasNeue.className} text-3xl mb-4 text-white`}>
          799 DKK
        </h2>
        <a href={"https://foo-shop-katjakroghs-projects.vercel.app/"} target="_blank">
          <button className="bg-fooPink-900 p-4 rounded-full w-full uppercase transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fooPink-800 duration-300 cursor-pointer">
      
            Køb din billet
          </button>
        </a>
      </div>
    </article>
  );
}

export default Billet