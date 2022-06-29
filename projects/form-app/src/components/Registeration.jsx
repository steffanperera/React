import React from "react";
import "./Registeration.css";

export const Registeration = () => {
  return (
    <div>
      <form>
        <h2 className="title">Registeration Form</h2>
        <div className="divider"></div>
        <div className="form">
          <div className="field">
            <label>Username</label>
            <input type="name" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};
