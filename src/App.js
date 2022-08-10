import React, { useState } from "react";
import "./App.css";
import ComponentFour from "./Component/ComponentFour";
import ComponentOne from "./Component/ComponentOne";
import ComponentThree from "./Component/ComponentThree";
import ComponentTwo from "./Component/ComponentTwo";
import logo from "./Component/logo.PNG";

function App() {
  const candidateData = {
    fullName: "",
    displayName: "",
    workSpaceName: "",
    workSpaceUrl: "",
    page: 1,
    fullNameError: "",
    displayNameError: "",
    workSpaceNameError: "",
    workSpaceUrlError: "",
    workSpaceSetup: 0,
  };

  const [candidateDetails, setCandidateDetails] = useState(candidateData);
  console.log(candidateDetails);
  return (
    <div className="app">
      <div className="heading">
        <img className="logo" src={logo} alt="Eden Logo" />
        <h1> Eden</h1>
      </div>
      <div className="container-progressbar">
        <div
          className={
            1 <= candidateDetails.page
              ? "progressbar progressbar-selected"
              : "progressbar"
          }
        >
          1
        </div>
        <div
          className={
            2 <= candidateDetails.page
              ? "progressbar-connector progressbar-selected"
              : "progressbar-connector"
          }
        ></div>
        <div
          className={
            2 <= candidateDetails.page
              ? "progressbar progressbar-selected"
              : "progressbar"
          }
        >
          <span>2</span>
        </div>
        <div
          className={
            3 <= candidateDetails.page
              ? "progressbar-connector progressbar-selected"
              : "progressbar-connector"
          }
        ></div>
        <div
          className={
            3 <= candidateDetails.page
              ? "progressbar progressbar-selected"
              : "progressbar"
          }
        >
          3
        </div>
        <div
          className={
            4 <= candidateDetails.page
              ? "progressbar-connector progressbar-selected"
              : "progressbar-connector"
          }
        ></div>
        <div
          className={
            4 <= candidateDetails.page
              ? "progressbar progressbar-selected"
              : "progressbar"
          }
        >
          4
        </div>
      </div>

      {candidateDetails.page === 1 && (
        <ComponentOne
          candidateDetails={candidateDetails}
          setCandidateDetails={setCandidateDetails}
        />
      )}
      {candidateDetails.page === 2 && (
        <ComponentTwo
          candidateDetails={candidateDetails}
          setCandidateDetails={setCandidateDetails}
        />
      )}
      {candidateDetails.page === 3 && (
        <ComponentThree
          candidateDetails={candidateDetails}
          setCandidateDetails={setCandidateDetails}
        />
      )}
      {candidateDetails.page === 4 && (
        <ComponentFour candidateDetails={candidateDetails} />
      )}
    </div>
  );
}

export default App;
