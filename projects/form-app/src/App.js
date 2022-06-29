import React from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  return (
    <div className="App">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Placeholder" />
      </form>
    </div>
  );
};

export default App;
