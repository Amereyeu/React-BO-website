import React from "react";
import Hero from "../components/Hero";
import Split from "../components/Split";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function Home() {

  return (
    <>
      <Hero />
      <Products />
      <Split />
      <Newsletter />
    </>
  );
}

export default Home;
