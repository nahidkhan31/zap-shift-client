import React from "react";
import BangladeshMap from "./BangladeshMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  //   console.log(serviceCenters);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>
      <BangladeshMap serviceCenter={serviceCenters}></BangladeshMap>
    </div>
  );
};

export default Coverage;
