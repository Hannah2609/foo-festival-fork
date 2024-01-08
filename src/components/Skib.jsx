import React from "react";
import Image from "next/image";
import styles from "./Skib.module.css";

function Skib() {
  return (
    <section className="w-full absolute -z-10 bottom-24 overflow-x-hidden">
      <div className={styles.skib}>
        <Image src={"/skib.svg"} width={150} height={150} alt="skib" />
      </div>
    </section>
  );
}

export default Skib;
