"use client";
import React, { useState, useEffect } from "react";
import ActCard from "./ActCard";
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Program({ newArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag, så der ikke bare er en blank side
  useEffect(() => {
    // Find den aktuelle dag
    const today = new Date()
      .toLocaleDateString("en-US", { weekday: "short" })
      .toLowerCase();
    // Opdaterer den valgte dag til den aktuelle dag
    setSelectedDay(today);

    // Bestemmer at loading skal lytte på data fra NewArray
    if (newArray) {
      setIsLoading(false);
    }
  }, [newArray]);

  const filterActsByDay = (day) => {
    // Opdaterer den valgte dag
    setSelectedDay(day);
  };

  // Funktionen starter med at filtrerer ud fra scene og dag
  // Sorterer herefter "acts" ud fra sammenlignign af starttidspunkterne
  const sortedByTime = (scene) => {
    return newArray
      .filter((act) => act.scene === scene && act.day === selectedDay)
      .sort((a, b) => {
        const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
        const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);

        return aTime.getTime() - bTime.getTime();
      });
  };

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <div className="flex justify-center flex-wrap my-8 mb-20 gap-5">
            {days.map((day) => (
              <button
                key={day}
                className={`text-xl px-4 p-1 w-20 rounded-full bg-fooPink-900 md:text-2xl md:p-2 lg:w-40 lg:text-2xl uppercase transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-fooPink-800 duration-300 cursor-pointer focus:bg-fooPink-800 focus:text-black`}
                onClick={() => filterActsByDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
          <section>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5 text-fooYellow-200`}
            >
              Midgard
            </motion.h3>
            <div className="flex gap-8 overflow-x-scroll  mb-20 snap-mandatory snap-x">
              {/* Vi mapper med sortedByTime istedet for newArray (filtreringen sker i sortedByTime istedt for her) */}
              {sortedByTime("Midgard").map((act) => (
                <ActCard
                  slug={act.slug}
                  src={act.logo}
                  key={act.name}
                  name={act.name}
                  genre={act.genre}
                  start={act.eventInfo.start}
                  end={act.eventInfo.end}
                  day={act.day}
                />
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5 text-fooYellow-200`}
            >
              Vanaheim
            </motion.h3>
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {sortedByTime("Vanaheim").map((act) => (
                <ActCard
                  slug={act.slug}
                  src={act.logo}
                  key={act.name}
                  name={act.name}
                  genre={act.genre}
                  start={act.eventInfo.start}
                  end={act.eventInfo.end}
                  day={act.day}
                />
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5 text-fooYellow-200`}
            >
              Jotunheim
            </motion.h3>
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {sortedByTime("Jotunheim").map((act) => (
                <ActCard
                  slug={act.slug}
                  src={act.logo}
                  key={act.name}
                  name={act.name}
                  genre={act.genre}
                  start={act.eventInfo.start}
                  end={act.eventInfo.end}
                  day={act.day}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Program;
