import { useState } from "react";

export default function ChangeObject() {
  const [car, setCar] = useState({
    year: "2024",
    make: "toyota",
    model: "hilux",
  });
  const handleYear = (e) => {
    setCar({ year: 2025 });
  };
  return (
    <>
      <p>
        i love {car.make} {car.model} {car.year}
      </p>
      <input value={car.year} onChange={handleYear} />
      <input value={car.make} />
      <input value={car.model} />
      <br />
    </>
  );
}
