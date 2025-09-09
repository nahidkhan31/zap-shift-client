import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Services from "../Services/Services";
import ClientLogoMarquee from "../ClientLogoMarquee/ClientLogoMarquee";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <Services />
      <ClientLogoMarquee />
    </div>
  );
};

export default Home;
