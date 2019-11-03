import React from "react"
import xclogo from './xclogo.jpg';
import "./Home.css"


const Home = () => {
    return (
        <React.Fragment >
            <div className="Home-header">
            <div className="Home">
      <header className="Home-header">
        <img src={xclogo} className="Home-logo" alt="xclogo" />
    <p>Building capacity and speed with information.
        </p>
      </header>
    </div>

        </div>
        </React.Fragment>
    )
}

export default Home