import React from "react";
import Program from "../components/Program";
import Footer from "../Components/Footer"
import Header from "../Components/Header";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

async function ProgramPage() {
  // Jonas har hjulpet med denne kodedel
  const bands = await fetch(
    "https://robust-ionized-tartan.glitch.me/bands"
  ).then((r) => r.json());
  const schedule = await fetch(
    "https://robust-ionized-tartan.glitch.me/schedule"
  ).then((r) => r.json());

  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const merged = bands.map((band) => {
    const newBand = { ...band };
    scenes.forEach((scene) => {
      days.forEach((day) => {
        if (schedule[scene][day].find((item) => item.act === band.name)) {
          const eventInfo = schedule[scene][day].find(
            (item) => item.act === band.name
          );
          newBand.eventInfo = eventInfo;
          newBand.scene = scene;
          newBand.day = day;
        }
      });
    });
    return newBand;
  });

  return (
    <>
      <Header />
      <main>
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${bebasNeue.className} text-center text-fooYellow-200 mt-32`}
        >
          Program
        </h1>

        <Program newArray={merged} days={days} />
      </main>
      <Footer />
    </>
  );
}

export default ProgramPage;
