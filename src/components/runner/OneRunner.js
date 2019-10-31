import React from "react"
import { Link } from 'react-router-dom'
import useSimpleAuth from "../../ui/useSimpleAuth"

const OneRunner = props => {
    const { isAuthenticated } = useSimpleAuth()

    // const deleteRunner = () => {
    //   if(isAuthenticated()){
    //       fetch(`http://localhost:8000/runners/${props.runner.id}`,{
    //           "method": "DELETE",
    //           "headers": {
    //               "Authorization": `Token ${localStorage.getItem("token")}`
    //           }
    //       })
    //       .then(props.getMyRunners)
    //   }
    // }
    return (
          <>
            <div className={`card runner-${props.runner.id}`} style={{width: "18rem"}}>
              <div className="card-body">
                <section className="runner">
                    <Link className="nav-link" to={`/runners/${props.runner.id}`}>
                        <h5>{props.runner.first_name}</h5>
                    </Link>
                </section>
                </div>
                </div>
            </>
                )
}

export default OneRunner