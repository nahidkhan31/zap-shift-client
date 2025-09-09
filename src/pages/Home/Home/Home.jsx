import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Services from "../Services/Services";
import ClientLogoMarquee from "../ClientLogoMarquee/ClientLogoMarquee";
import Benefits from "../Benefits/Benefits";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <Services />
      <ClientLogoMarquee />
      <Benefits />
    </div>
  );
};

export default Home;
