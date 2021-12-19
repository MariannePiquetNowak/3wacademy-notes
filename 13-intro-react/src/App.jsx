import './App.css';
import React from "react"
import Home from "./Containers/Home"

// Styles 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let phrase = "Et je suis sur la home"
  return (
    <div className="App">
      <React.Fragment>
        <Home phrase={phrase}/>
      </React.Fragment>
    </div>
  );
}

export default App;
