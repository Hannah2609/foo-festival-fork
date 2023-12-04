import React from "react";
import Image from "next/image";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Footer() {
  return (
    <footer className="h-screen relative flex flex-col justify-center items-center">
      <div className="absolute inset-0 -z-10">
        <Image src="/footer.svg" layout="fill" objectFit="cover" alt="footer" />
      </div>
      <div className="flex flex-col items-center mt-20">
        <h2 className={`${bebasNeue.className} text-black`}>FØLG MED</h2>
        <div className="flex">
          <Image
            src="/facebook.svg"
            width={65}
            height={65}
            alt="Facebook logo"
          />
          <Image
            src="/instagram.svg"
            width={65}
            height={65}
            alt="Instagram logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
