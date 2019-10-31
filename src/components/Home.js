import React from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/Navbar"
import xclogo from './xclogo.jpg';
import ApplicationViews from "./ApplicationViews"
import "./Home.css"


const Home = () => {
    return (
        <React.Fragment >
            <Route  render={props => (
                <NavBar {...props} />
            )} />
            <ApplicationViews />
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