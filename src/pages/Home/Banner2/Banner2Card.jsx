import React from "react";
import logo from "../../../assets/bookingIcon.png";
import "aos/dist/aos.css";
import Aos from "aos";

Aos.init();
const Banner2Card = ({ book }) => {
  //   console.log(book);
  const { name, description } = book;
  return (
    <div data-aos="fade-down-left" className="mt-2">
      <div className="grid grid-cols-1 gap-3 shadow-md bg-white text-black p-8 rounded-2xl hover:bg-green-300">
        <img src={logo} alt="" />
        <h1 className="text-sm">{name}</h1>
        <p className="font-normal text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Banner2Card;
