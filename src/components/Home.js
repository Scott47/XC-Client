import React from "react";
import xclogo from "./xclogo.jpg";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home-background">
        <div className="Home-header">
            <div className="Home">
              <header >
                <img src={xclogo} className="Home-logo" alt="xclogo" />
            </header>
            <p className="Home-text">Building capacity and speed with information.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
