import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App: React.FC = () => {
  const [signMode, setSignMode] = useState(false);
  
  return (
    <div className={`container ${signMode ? '' : 'signMode'}`}>
      <div className="form-container">
        <div className="signIn-signIn">
          <SignIn />
        </div>
        <div className="signUp-signUp">
          <SignUp />
        </div>
      </div>
      <div className="pannel-container">
        <div className="pannel-left pannel">
          <div className="content">
            <h3>Are you new here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nobis vitae, tempore dolore ipsam ad officia voluptates
              sit dolor animi?
            </p>
            <button className="btn transparent" id="signInBtn" onClick={() =>{
              setSignMode(false)
              console.log("jjjj");
              
              }}>
              sign In
            </button>
          </div>
          <img src="/image/mmm-removebg-preview.png" alt="sign in" />
        </div>
        <div className="pannel-right pannel">
          <div className="content">
            <h3>Are you new here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nobis vitae, tempore dolore ipsam ad officia voluptates
              sit dolor animi?
            </p>
            <button className="btn transparent" id="signUpBtn" onClick={() => 
              {
                setSignMode(true)
                console.log("jss");
                }}>
              sign Up
            </button>
          </div>
          <img src="/image/sit-back-and-relax-removebg-preview.png" alt="sign up" />
        </div>
      </div>
    </div>
  );
};

export default App;
