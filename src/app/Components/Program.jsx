"use client";
import React, { useState, useEffect } from "react";
import ActCard from "./ActCard";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Program({ newArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag, så der ikke bare er en blank side
  useEffect(() => {
    // Find den aktuelle dag
    const today = new Date()
      .toLocaleDateString("en-US", { weekday: "short" })
      .toLowerCase();
    setSelectedDay(today); // Opdaterer den valgte dag til den aktuelle dag
  }, []);

  const filterActsByDay = (day) => {
    setSelectedDay(day); // Opdaterer den valgte dag
  };
  return (
    <>
      <div className="flex justify-center flex-wrap my-8 gap-8">
        {days.map((day) => (
          <button
            key={day}
            className={`text-2xl p-2 w-30 rounded-full bg-fooPink-900 ${bebasNeue.className} md:text-2xl p-4 w-40 lg:w-50 text-5xl `}
            onClick={() => filterActsByDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <section>
        <h3 className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5`}>Midgard</h3>
        <div className="flex gap-6 overflow-y-scroll mb-8">
          {newArray
            .filter((act) => act.scene === "Midgard" && act.day === selectedDay)
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

        <h3 className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5`}>Vanaheim</h3>
        <div className="flex gap-6 overflow-y-scroll mb-8">
          {newArray
            .filter(
              (act) => act.scene === "Vanaheim" && act.day === selectedDay
            )
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

        <h3 className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5`}>Jotunheim</h3>
        <div className="flex gap-6 overflow-y-scroll mb-8">
          {newArray
            .filter(
              (act) => act.scene === "Jotunheim" && act.day === selectedDay
            )
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
    </>
  );
}

export default Program;
