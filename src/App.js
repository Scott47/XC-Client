import React from 'react';
import xclogo from './xclogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={xclogo} className="App-logo" alt="xclogo" />
        <p>
          An app <code>for High School</code> Cross Country Coaches.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
