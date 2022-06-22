import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState("20");

  const handleClick = () => {
    setName("steffa");
    setAge("25");
  };

  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>
        {name} is {age} years old!
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
