import React, { useRef} from "react";

// Author - Scott Silver
// Purpose - Coach can add runner to roster
// Methods - GET, POST


const AddMeet = props => {
  const name = useRef();
  const date = useRef();
  const course = useRef();
  const url= useRef();
  const address = useRef();
  const distance = useRef();
  const number_of_runners = useRef()


  // function that adds a runner to the runners list on the runners page
  // this function is being called when you click the add to runner button
  const addToMeets = e => {
    e.preventDefault();
    // object that grabs all the values for new runner
    const newMeet = {
      name: name.current.value,
      date: date.current.value,
      course: course.current.value,
      url: url.current.value,
      address: address.current.value,
      distance: distance.current.value,
      number_of_runners: number_of_runners.current.value
    };
    createMeet(newMeet).then(() => {
      props.history.push({
        pathname: "/meets"
      });
    });
  };


const createMeet = newMeet => {
  return fetch("http://localhost:8000/meets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(newMeet)
  }).then(res => res.json());
};

return (
    <>
{
        <form className="form--login" onSubmit={addToMeets}>
          <div >
            <div >
          <h1>New Meet Details</h1>
          <fieldset>
            <label className="card-text" htmlFor="name"> Name </label>
            <input
              ref={name}
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="date"> Date </label>
            <input
              ref={date}
              type="text"
              name="date"
              className="form-control"
              placeholder="Date"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="course"> Course </label>
            <input
              ref={course}
              type="text"
              name="course"
              className="form-control"
              placeholder="Course"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="url"> website </label>
            <input
              ref={url}
              type="text"
              name="url"
              className="form-control"
              placeholder="Url"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="address"> Address </label>
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
            <label className="card-text" htmlFor="distance"> Distance </label>
            <input
              ref={distance}
              type="text"
              name="distance"
              className="form-control"
              placeholder="Distance"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="runners"> Number of Runners </label>
            <input
              ref={number_of_runners}
              type="number"
              name="runners"
              className="form-control"
              placeholder="Runners"
              required
            />
          </fieldset>
          </div>
          <button onClick={e => addToMeets(e)}>Submit</button>
          </div>
          </form>
}
</>
)
}


export default AddMeet