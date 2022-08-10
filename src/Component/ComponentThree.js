import React from "react";
import "./ComponentThree.css";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";

function ComponentThree({ candidateDetails, setCandidateDetails }) {
  const handleClickOne = (e) => {
    e.preventDefault();
    setCandidateDetails({
      ...candidateDetails,
      workSpaceSetup: 1,
    });
  };

  const handleClickTwo = (e) => {
    e.preventDefault();
    setCandidateDetails({
      ...candidateDetails,
      workSpaceSetup: 2,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (candidateDetails.workSpaceSetup !== 0) {
      setCandidateDetails({
        ...candidateDetails,
        page: 4,
      });
    }
  };

  return (
    <div className="container1">
      <div className="container2">
        <h1>How are you planning to use Eden? </h1>
        <h3>We'll streamline your setup accordingly.</h3>
      </div>
      <div className="boxcontainer">
        <div
          className={
            candidateDetails.workSpaceSetup === 1
              ? "selected container4"
              : "container4"
          }
          onClick={handleClickOne}
        >
          <PersonIcon /> <h4>For myself</h4>
          <p>Write better. Think more Clearly. Stay organized.</p>
        </div>
        <div
          className={
            candidateDetails.workSpaceSetup === 2
              ? "selected container4"
              : "container4"
          }
          onClick={handleClickTwo}
        >
          <GroupsIcon /> <h4>With my team</h4>
          <p>Wikis, docs, tasks & projects all in one place.</p>
        </div>
      </div>
      <button className="btn" onClick={handleClick}>
        Create Workspace
      </button>
    </div>
  );
}

export default ComponentThree;
