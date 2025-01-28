import { useState } from "react";

export default function Counter() {
  const [countEl, setCountEl] = useState(0);
  const increment = () => {
    setCountEl(countEl + 1);
  };
  const decrement = () => {
    countEl > 0 && setCountEl(countEl - 1);
  };

  return (
    <>
      <p>Count: {countEl}</p>
      <button onClick={decrement}>count -</button>
      <button onClick={increment}>count +</button>
    </>
  );
}
