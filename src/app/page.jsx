import Lineup from "./Components/Lineup";
import Footer from "./components/Footer";

import { Bebas_Neue, Poppins } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Lineup />
      <Footer />
    </>
  );
}
