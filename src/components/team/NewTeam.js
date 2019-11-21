import React, { useRef, useEffect } from "react";

// Author - Scott Silver
// Purpose - Coach can add team
// Methods - POST

const AddTeam = props => {
  const team_name = useRef();


  // function that adds a team to the teams list on the teams page
  // this function is being called when you click the add to team button
  const addToTeams = e => {
    e.preventDefault();
    // object that grabs all the values for new team
    const newTeam = {
      team_name: team_name.current.value,

    };
    createTeam(newTeam).then(() => {
      props.history.push({
        pathname: "/teams"
      });
    });
  };

  const createTeam = newTeam => {
    return fetch("http://localhost:8000/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(newTeam)
    }).then(res => res.json());
  };

  useEffect(props.getMyTeams, []);

  return (
    <>
      {
        <form className="form--login" onSubmit={addToTeams}>
          <div>
            <div>
              <h1>New Team</h1>
              <fieldset>
                <label className="card-text" htmlFor="name">
                  {" "}
                  Name{" "}
                </label>
                <input
                  ref={team_name}
                  type="text"
                  name="team_name"
                  className="form-control"
                  placeholder="Name"
                  required
                  autoFocus
                />
              </fieldset>

            </div>
            <button onClick={e => addToTeams(e)}>Submit</button>
          </div>
        </form>
      }
    </>
  );
};

export default AddTeam;
