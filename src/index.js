import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function MyIntro() {
  return (
    <div>
      <h3>Hi, I'm Cassie</h3>
      <p>I'm not a fan of my name much, so I'm going with Cassie for now. One day I'd like to travel to one
        of these places: 
      </p>
      <ul>
        <li>Greece</li>
        <li>Tibet</li>
        <li>Romania</li>
      </ul>

    </div>
  )
}

ReactDOM.render(<MyIntro />, document.getElementById("root"))
