import React, { useRef, useEffect, useState } from "react";

// Author - Scott Silver
// Purpose - Coach can add runner to roster
// Methods - GET, POST


const NewRunner = props => {
  const grade = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const email = useRef();
  const address = useRef();
  const parent = useRef();
  const team = useRef();

  const [newRunner, setNewRunner] = useState([]);

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
        pathname: "/"
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



return (
    <>
{


        <form className="form--login" onSubmit={addToRunners}>
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
          <fieldset>
            <label className="card-text" htmlFor="team"> Team </label>
            <input
              ref={team}
              type="number"
              name="team"
              className="form-control"
              placeholder="Team"
              required
            />
          </fieldset>
          </div>
          <button onClick={e => addToRunners(e)}>Add Runner</button>
          </div>
          </form>

}
</>
)
}


export default NewRunner