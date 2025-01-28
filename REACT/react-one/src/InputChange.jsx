import { useState } from "react";

export default function InputChange() {
  const [name, setName] = useState("Guest");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <input onChange={handleChange} value={name} />
      <p>Name: {name}</p>
    </>
  );
}
