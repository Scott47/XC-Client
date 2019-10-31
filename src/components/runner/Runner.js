import React, { useEffect, useState } from "react"
import OneRunner from "./OneRunner"
import useSimpleAuth from "../../ui/useSimpleAuth"

//Author: Scott Silver
//Purpose: Display Runners associated with coach/user
//Methods: GET Runners

const Runner = props => {
    const [myRunners, setMyRunners] = useState([])
    const {isAuthenticated} = useSimpleAuth()


    const getMyRunners = () => {
              fetch(`http://localhost:8000/runners?coach=true`, {
                  "method": "GET",
                  "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                  }
              })
              .then(response => response.json())
              .then(setMyRunners)
      }
    useEffect(getMyRunners, [])
    return(
        <>
    <div className="myRunners-Div">
          {myRunners.length > 0 ?
          // looping through runners and displaying the information in a card component
          myRunners.map(runner =>{
              return( <OneRunner key={runner.id} runner={runner} showCategory={true}  getMyRunners={getMyRunners} /> )
          })


          : <p>You have no runners. Add a runner to roster: <a href='/runners/new'> here</a>.</p>}
          </div>
          </>
    )
}
export default Runner