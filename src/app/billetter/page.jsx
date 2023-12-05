"use client";
import React from "react";
import Ticket from "../Components/Billet";
import VipTicket from "../Components/VipBillet";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

function Billetter() {
  return (
    <>
      <main>
        <Ticket />
        <VipTicket />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default Billetter;
