import React from "react";
import ActCard from "./ActCard";


import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Program({ newArray }) {
  console.log(newArray);
  return (
    <section>
      <h2 className={`${bebasNeue.className}`}>Midgard</h2>
      <div className="flex gap-6 overflow-y-scroll">
        {newArray
          .filter((act) => act.scene === "Midgard")
          .map((act) => (
            <ActCard
              slug={act.slug}
              src={act.logo}
              key={act.name}
              name={act.name}
              genre={act.genre}
              start={act.eventInfo.start}
              end={act.eventInfo.end}
            />
          ))}
      </div>

      <h2 className={`${bebasNeue.className}`}>Vanaheim</h2>
      <div className="flex gap-6 overflow-y-scroll">
        {newArray
          .filter((act) => act.scene === "Vanaheim")
          .map((act) => (
            <ActCard
              src={act.logo}
              key={act.name}
              name={act.name}
              genre={act.genre}
              start={act.eventInfo.start}
              end={act.eventInfo.end}
            />
          ))}
      </div>

      <h2 className={`${bebasNeue.className}`}>Jotunheim</h2>
      <div className="flex gap-6 overflow-y-scroll">
        {newArray
          .filter((act) => act.scene === "Jotunheim")
          .map((act) => (
            <ActCard
              src={act.logo}
              key={act.name}
              name={act.name}
              genre={act.genre}
              start={act.eventInfo.start}
              end={act.eventInfo.end}
            />
          ))}
      </div>
    </section>
  );
}

export default Program;
