import React from "react";

export const Registeration = () => {
  return (
    <div>
      <form>
        <h1>Registeration Form</h1>
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
        </div>
      </form>
    </div>
  );
};
