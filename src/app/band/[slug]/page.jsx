import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SingleView from "@/components/SingleView";

export const metadata = {
  title: "FooFest | SingleView",
};

export async function generateStaticParams() {
  const res = await fetch("https://robust-ionized-tartan.glitch.me/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function Singlepage({ params }) {
  const { slug } = params;
  console.log(slug);
  const res = await fetch(
    `https://robust-ionized-tartan.glitch.me/bands/${slug}`
  );

  const data = await res.json();

  return (
    <>
      <Header />
      <SingleView data={data} />
      <Footer />
    </>
  );
}
