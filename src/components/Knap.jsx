import React from "react";
import Image from "next/image";
import Link from "next/link";

function Knap() {
  return (
    <section className="flex flex-wrap gap-20 mt-20 justify-center">
      <Link href={"/program"}>
        <button
          className="flex items-end relative bg-fooGrey-900 pr-10 pl-40 py-8 gap-4 rounded-full max-w-fit transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fooPink-800 duration-300 cursor-pointer"
          aria-label="go to årets program"
        >
          <Image
            src={"/musik.svg"}
            width={100}
            height={100}
            sizes="(max-width: 768px) 40px, (max-width: 1200px) 90px, 100px"
            className="absolute left-8 bottom-7"
            alt="Årets program svg"
          />
          <p
            className={`text-base font-medium md:text-lg lg:text-xl uppercase`}
          >
            Se årets program
          </p>
          <Image src={"/pil.svg"} width={40} height={40} alt="" />
        </button>
      </Link>

      <button
        className="flex items-end relative bg-fooGrey-900 pr-10 pl-40 py-8 gap-4 rounded-full max-w-fit transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fooPink-800 duration-300 cursor-pointer"
        aria-label="go to camping"
      >
        <Image
          src={"/telt.svg"}
          width={110}
          height={110}
          className="absolute left-8 bottom-9"
          alt="Camping svg"
        />
        <p className={`text-base font-medium md:text-lg lg:text-xl uppercase`}>
          Camping på foofest
        </p>
        <Image src={"/pil.svg"} width={40} height={40} alt="" />
      </button>
      <button
        className="flex items-end relative bg-fooGrey-900 pr-10 pl-40 py-8 gap-4 rounded-full max-w-fit transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-fooPink-800 duration-300 cursor-pointer"
        aria-label="go to foo-frivillig"
      >
        <Image
          src={"/group.svg"}
          width={90}
          height={90}
          className="absolute left-8 bottom-9"
          alt="Frivillig på foo svg"
        />
        <p className={`text-base font-medium md:text-lg lg:text-xl uppercase`}>
          Bliv foo - frivillig
        </p>
        <Image src={"/pil.svg"} width={40} height={40} alt="" />
      </button>
    </section>
  );
}

export default Knap;
