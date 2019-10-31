import React from "react"
import { Link } from 'react-router-dom'
import useSimpleAuth from "../../ui/useSimpleAuth"

const OneRunner = props => {
    const { isAuthenticated } = useSimpleAuth()

    // This is returning a runner card with a terinary statement that is checking the value of showCategory that is being passed down to this component. If showCategory is true than a link to the products category is shown, if it is not than nothing is show for the category.

    const deleteRunner = () => {
      if(isAuthenticated()){
          fetch(`http://localhost:8000/runners/${props.runner.id}`,{
              "method": "DELETE",
              "headers": {
                  "Authorization": `Token ${localStorage.getItem("auth_token")}`
              }
          })
          .then(props.getMyRunners)
      }
    }
    return (
          <>
            <div className={`card product-${props.product.id}`} style={{width: "18rem"}}>
              <div className="card-body">
                <section className="product">
                    <Link className="nav-link" to={`/products/${props.product.id}`}>
                        <h5>{props.product.name}</h5>
                    </Link>
                </section>
                </div>
                </div>
            </>
                )
}

export default OneRunner