import "./ComponentOne.css";

function ComponentOne({ candidateDetails, setCandidateDetails }) {
  const handlechangeName = (e) => {
    setCandidateDetails({
      ...candidateDetails,
      fullName: e.target.value,
      fullNameError: "",
    });
  };

  const handlechangeDName = (e) => {
    setCandidateDetails({
      ...candidateDetails,
      displayName: e.target.value,
      displayNameError: "",
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (candidateDetails.fullName.length < 3) {
      setCandidateDetails({
        ...candidateDetails,
        fullNameError: " ⚠ Full Name must contain atleast 3 character.",
      });
    }
    if (candidateDetails.displayName.length < 3) {
      setCandidateDetails({
        ...candidateDetails,
        displayNameError: " ⚠ Display Name must contain atleast 3 character.",
      });
    }

    let flag = false;
    if (
      candidateDetails.displayName.length >= 3 &&
      candidateDetails.fullName.length >= 3
    ) {
      flag = true;
    }

    if (flag !== false) {
      setCandidateDetails({
        ...candidateDetails,
        page: 2,
      });
    }
  };

  return (
    <div className="container1">
      <div className="container-subheading">
        <h1>Welcome! First thing first... </h1>
        <h3>You can always change them later.</h3>
      </div>
      <form className="container3">
        <div className="inputnamefield">
          <label>Full Name</label>
          <input
            className="full_Name"
            type="text"
            placeholder="Steve Jobs"
            onChange={handlechangeName}
            value={candidateDetails.fullName}
          />
        </div>
        <div className="errormsg">{candidateDetails.fullNameError}</div>
        <div className="inputnamefield">
          <label>Display Name</label>
          <input
            className="display_name"
            type="text"
            placeholder="Steve"
            onChange={handlechangeDName}
            value={candidateDetails.displayName}
          />
        </div>
        <div className="errormsg">{candidateDetails.displayNameError}</div>
        <button className="btn" type="submit" onClick={handleClick}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default ComponentOne;
