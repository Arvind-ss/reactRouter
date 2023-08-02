import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function ServicesDetails() {
  const { id } = useParams();
  const serviceDetails = useLoaderData();
  return (
    <>
      <div className="container">
        <h1>Service Details for {serviceDetails.title}</h1>
        <p> Details:{serviceDetails.details}</p>
        <p>Location:{serviceDetails.location}</p>
      </div>
    </>
  );
}
export const serviceDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/services/" + params.id);
  if (!res.ok) {
    throw Error("Could not find the Service.....");
  }
  return res.json();

  
};

export default ServicesDetails;
