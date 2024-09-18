import React, { useState } from "react";
import "./Loginsignup.css";
import user_icon from "../Assest/person.png";
import email_icon from "../Assest/email.png";
import password_icon from "../Assest/password.png";

export const Loginsignup = () => {
  let [action, setAction] = useState("Signup");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="User Name" id="" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="E-mail" id="" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" id="" />
        </div>
      </div>
      {action === "Signup"? <div></div>:<div className="forgot">
        Lost Password?<span>Click here!</span>
      </div> }
      
      <div className="submit">
        <div
          className={action === "login" ? "sub gray" : "sub"}
          onClick={() => {
            setAction("Signup");
          }}
        >
          Signup
        </div>
        <div
          className={action === "Signup" ? "sub gray " : "sub"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default Loginsignup;
