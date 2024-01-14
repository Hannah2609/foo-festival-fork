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
  const [search, setSearch] = useState("");

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag, så der ikke bare er en blank side
  useEffect(() => {
    const today = new Date()
      .toLocaleDateString("en", { weekday: "short" })
      .toLowerCase();
    // setSelectedDay(today);

    // Loading Animation
    if (newArray) {
      setIsLoading(false);
    }
  }, [newArray]);

  // Opdaterer den valgte dag
  const filterActsByDay = (day) => {
    setSelectedDay(day);
  };

  // Funktionen starter med at filtrerer ud fra scene og dag
  // Sorterer herefter "acts" ud fra sammenlignign af starttidspunkterne
  // const sortedByTime = (scene) => {
  //   return newArray
  //     .filter((act) => act.scene === scene && act.day === selectedDay)
  //     .sort((a, b) => {
  //       const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
  //       const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);

  //       return aTime.getTime() - bTime.getTime();
  //     });
  // };

  
   const filteredActs = (scene) => {
   const dayOrder = [
     "mon",
     "tue",
     "wed",
     "thu",
     "fri",
     "sat",
     "sun",
   ];

     return newArray
       .filter((act) => {
      const chosenDay = selectedDay === "" || act.day === selectedDay;

         return (
           act.name.toLowerCase().startsWith(search.toLowerCase()) &&
           act.scene === scene &&
           chosenDay
         );
       })
       .sort((a, b) => {
         const dayIndexA = dayOrder.indexOf(a.day);
         const dayIndexB = dayOrder.indexOf(b.day);
         
         const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
         const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);

         // sorterer på dage og tidsrækkefølge
          return dayIndexA !== dayIndexB
            ? dayIndexA - dayIndexB
            : aTime.getTime() - bTime.getTime();
       });
   };

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <div className="flex justify-center flex-wrap my-8 mb-10 lg:mb-20 gap-5">
            {days.map((day) => (
              <button
                key={day}
                className={`text-xl px-4 p-1 w-20 rounded-full bg-fooPink-800 md:text-2xl md:p-2 lg:w-40 lg:text-2xl uppercase transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-fooPink-900 duration-300 cursor-pointer focus:bg-fooPink-900 focus:text-black`}
                onClick={() => filterActsByDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <section>
            <div className="flex w-full flex-col-reverse gap-10 lg:flex-row lg:gap-0 lg:justify-between">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5 text-fooYellow-200`}
              >
                Midgard
              </motion.h2>
              <div className="place-self-center lg:place-self-start">
                <input
                  type="text"
                  placeholder="Søg efter en kunstner"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-8 py-2 border-2  bg-black border-fooPink-800 text-fooGrey-200 placeholder-fooGrey-200 rounded-full"
                />
              </div>
            </div>

            <div className="flex gap-8 overflow-x-scroll  mb-20 snap-mandatory snap-x">
              {/* Vi mapper med sortedByTime istedet for newArray (filtreringen sker i sortedByTime istedt for her) */}
              {/* Senere ændret til FilteredActs */}
              {filteredActs("Midgard").map((act) => (
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

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5 text-fooYellow-200`}
            >
              Vanaheim
            </motion.h2>
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {filteredActs("Vanaheim").map((act) => (
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

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`text-4xl ${bebasNeue.className} lg:text-5xl xl:text-6xl mb-5 text-fooYellow-200`}
            >
              Jotunheim
            </motion.h2>
            <div className="flex gap-8 overflow-x-scroll mb-20 snap-mandatory snap-x">
              {filteredActs("Jotunheim").map((act) => (
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
