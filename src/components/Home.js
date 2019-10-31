import React from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/Navbar"
import xclogo from './xclogo.jpg';
import ApplicationViews from "./ApplicationViews"


const Home = () => {
    return (
        <div className="App-header">
        <React.Fragment >
            <Route  render={props => (
                <NavBar {...props} />
            )} />
            <ApplicationViews />
            <div className="App">
      <header className="App-header">
        <img src={xclogo} className="App-logo" alt="xclogo" />
    <p>Building capacity and speed with information.
        </p>
      </header>
    </div>
        </React.Fragment>
        </div>
    )
}

export default Home