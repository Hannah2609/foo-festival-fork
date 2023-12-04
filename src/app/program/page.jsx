import React from "react";
import Program from "../components/Program";

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
      <h1 className={`${bebasNeue.className}`}>Program</h1>
      <Program newArray={merged} />
    </>
  );
}

export default ProgramPage;
