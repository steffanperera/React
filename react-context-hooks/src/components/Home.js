import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState("20");

  const handleClick = () => {
    setName("steffa");
  };

  const handleAge = () => {
    setAge("25");
  };

  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
      <p>{age}</p>
      <button onClick={handleAge}>Age change</button>
    </div>
  );
};

export default Home;
