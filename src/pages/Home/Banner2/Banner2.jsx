import React, { useEffect, useState } from "react";
import Banner2Card from "./Banner2Card";

const Banner2 = () => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("/booking.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto font-bold text-2xl mt-8">
      <h1 className="font-bold">How it Works</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {booking.map((book) => (
          <Banner2Card key={book.id} book={book}></Banner2Card>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
