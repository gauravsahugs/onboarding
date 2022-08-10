import React from "react";
import "./ComponentTwo.css";

function ComponentTwo({ candidateDetails, setCandidateDetails }) {
  const handlechangeWSName = (e) => {
    setCandidateDetails({
      ...candidateDetails,
      workSpaceName: e.target.value,
      workSpaceNameError: "",
    });
  };

  const handlechangeWSUrl = (e) => {
    setCandidateDetails({
      ...candidateDetails,
      workSpaceUrl: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (candidateDetails.workSpaceName.length === 0) {
      setCandidateDetails({
        ...candidateDetails,
        workSpaceNameError: " ⚠ Must enter Workspace Name.",
      });
    }

    if (candidateDetails.workSpaceName.length > 0) {
      setCandidateDetails({
        ...candidateDetails,
        page: 3,
      });
    }
  };

  return (
    <div className="container1">
      <div className="container2">
        <h1>Let set up a home for all your work</h1>
        <h3>You can always create another Workspace later.</h3>
      </div>
      <form className="container3">
        <div className="inputnamefield">
          <label>Workspace Name</label>
          <input
            className="workspacename"
            type="text"
            placeholder="Workspace Name"
            onChange={handlechangeWSName}
          />
          <div className="errormsg">{candidateDetails.workSpaceNameError}</div>
        </div>
        <div className="inputnamefield">
          <span>
            <label className="spanlabel">
              Workspace Url<div>(optional)</div>
            </label>
          </span>
          <input
            className="workspaceurl"
            type="text"
            placeholder="https://Workspace-Url"
            onChange={handlechangeWSUrl}
          />
        </div>
        <button className="btn" onClick={handleClick}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default ComponentTwo;
