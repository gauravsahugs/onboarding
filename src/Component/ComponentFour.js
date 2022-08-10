import React from "react";
import "./ComponentFour.css";

function ComponentFour({ candidateDetails }) {
  return (
    <div className="container1">
      <div className="container2">
        <h1>Congratulations, {candidateDetails.displayName}! </h1>
        <h3>You have completed onboarding,you can start using the Eden.</h3>
      </div>
      <button>Launch Eden</button>
    </div>
  );
}

export default ComponentFour;
