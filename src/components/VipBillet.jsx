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
    <article className="bg-fooGrey-900 rounded-large w-80 h-fit relative">
      <Image
        src={"vip.svg"}
        width={70}
        height={70}
        className="absolute right-4 -top-6 "
        alt="vip"
      ></Image>
      <div className="p-6">
        <h2
          className={`${bebasNeue.className} mb-4 text-5xl text-fooYellow-200`}
        >
          VIP-billet
        </h2>
        <ul className="mb-16 list-disc ml-4">
          <li className="text-sm">Inkl. alt i FOO-billet </li>
          <li className="text-sm">ltrices feugiat eu turpis at. </li>
        </ul>
        <h2 className={`${bebasNeue.className} text-3xl mb-4 text-white`}>
          1299 DKK
        </h2>
        <Link href={""}>
          <button className="bg-fooPink-900 p-4 rounded-full w-full uppercase transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fooPink-800 duration-300 cursor-pointer">
            Køb din billet
          </button>
        </Link>
      </div>
    </article>
  );
}

export default VipBillet;
