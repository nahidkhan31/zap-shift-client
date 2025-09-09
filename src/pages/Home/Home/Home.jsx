import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Services from "../Services/Services";
import ClientLogoMarquee from "../ClientLogoMarquee/ClientLogoMarquee";
import Benefits from "../Benefits/Benefits";
import BeMerchant from "../BeMerchant/BeMerchant";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <Services />
      <ClientLogoMarquee />
      <Benefits />
      <BeMerchant />
      <Review />
    </div>
  );
};

export default Home;
