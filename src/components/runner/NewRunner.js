import React, { useState, useRef, useEffect } from "react";

// Author - Scott Silver
// Purpose - Coach can add runner to roster
// Methods - GET, POST


const NewRunner = props => {
  const [runnerTeams, setRunnerTeams] = useState([]);
  const grade = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const email = useRef();
  const address = useRef();
  const parent = useRef();
  const team = useRef();

  // function that adds a runner to the runners list on the runners page
  // this function is being called when you click the add to runner button
  const addToRunners = e => {
    e.preventDefault();
    // object that grabs all the values for new runner
    const newRunner = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      grade: grade.current.value,
      phone: phone.current.value,
      email: email.current.value,
      address: address.current.value,
      parent: parent.current.value,
      team: team.current.value,
      image: null
    };
    createRunner(newRunner).then(() => {
      props.history.push({
        pathname: "/runners"
      });
    });
  };


const createRunner = newRunner => {
  return fetch("http://localhost:8000/runners", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(newRunner)
  }).then(res => res.json());
};
const getRunnerTeams = () => {
  fetch(`http://localhost:8000/teams`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    }
  })
    .then(response => response.json())
    .then(setRunnerTeams);
};

useEffect(getRunnerTeams, [])

return (
    <>
{
        <form className="d-flex justify-content-center mb-4" onSubmit={addToRunners}>
          <div >
            <div >
          <h1 >New Runner Form</h1>
          <fieldset>
            <label className="card-text" htmlFor="first_name"> First Name </label>
            <input
              ref={first_name}
              type="text"
              name="first_name"
              className="form-control"
              placeholder="First Name"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="last_name"> Last Name </label>
            <input
              ref={last_name}
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Last Name"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="grade"> Grade </label>
            <input
              ref={grade}
              type="text"
              name="grade"
              className="form-control"
              placeholder="Grade"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="phone"> Phone Number </label>
            <input
              ref={phone}
              type="number"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="email"> Email </label>
            <input
              ref={email}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="location"> Address </label>
            <input
              ref={address}
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="phone"> Parent </label>
            <input
              ref={parent}
              type="text"
              name="parent"
              className="form-control"
              placeholder="Parent"
              required
            />
          </fieldset>
          <br></br>
          <fieldset>
              Team
              <p></p><select type="text" name="team" ref={team}>
                {runnerTeams.map(team => {
                  return (
                    <option key={team.id} id={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  );
                })}
              </select>
          </fieldset>
          <br></br>

          </div>
          <button onClick={e => addToRunners(e)}>Add Runner</button>
          </div>
          </form>
}
</>
)
}


export default NewRunner