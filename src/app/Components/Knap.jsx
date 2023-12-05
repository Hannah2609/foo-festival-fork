import React from "react";
import Image from "next/image";

function Knap() {
  return (
    <section className="grid grid-col-1 gap-20 lg:grid-cols-2">
      <button className="flex items-end relative bg-fooGrey-900 pr-20 pl-20 py-4 gap-4 rounded-full max-w-fit">
        <Image
          src={"musik.svg"}
          width={100}
          height={100}
          className="absolute left-4"
          alt="Årets program"
        />
        <p className={`text-xl uppercase`}>Se årets program</p>
        <Image src={"pil.svg"} width={40} height={40} />
      </button>
      <button className="flex items-end relative bg-fooGrey-900 pr-10 pl-40 py-8 gap-4 rounded-full max-w-md">
        <Image
          src={"telt.svg"}
          width={110}
          height={110}
          className="absolute left-8 bottom-9"
          alt="Camping"
        />
        <p className={`text-xl uppercase`}>Camping på foofest</p>
        <Image src={"pil.svg"} width={40} height={40} />
      </button>
      <button className="flex items-end relative bg-fooGrey-900 pr-10 pl-40 py-8 gap-4 rounded-full max-w-fit">
        <Image
          src={"group.svg"}
          width={90}
          height={90}
          className="absolute left-8 bottom-9"
          alt="Frivillig på foo"
        />
        <p className={`text-xl uppercase`}>Bliv foo - frivillig</p>
        <Image src={"pil.svg"} width={40} height={40} />
      </button>
    </section>
  );
}

export default Knap;
