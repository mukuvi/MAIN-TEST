import { useState } from "react";

export default function UpdateArrays() {
  const [foods, setFoods] = useState(["banana", "mango", "orange"]);
  const handleFoods = () => {
    const newFood = document.getElementById("foodInput").value;
    setFoods((prevFood) => [...prevFood, newFood]);
    document.getElementById("foodInput").value = "";
  };
  return (
    <>
      <h3>LIST FOOD</h3>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food" />
      <button onClick={handleFoods}>Add food</button>
      <br />
    </>
  );
}
