import React from "react";
import "./ComponentFour.css";

function ComponentFour({ candidateDetails }) {
  return (
    <div className="container1">
      <div className="container2">
        <h1>Congratulations, {candidateDetails.displayName}! </h1>
        <h3>You have completed onboarding,you can start using the Eagle.</h3>
      </div>
      <button>Launch Eden</button>
      <div>
        <h5>© Eagle Onboarding Proudly Made by Gaurav sahu</h5>
      </div>
    </div>
  );
}

export default ComponentFour;
