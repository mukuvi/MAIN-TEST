import { useState } from "react";

export default function ChangeObject() {
  const [car, setCar] = useState({
    year: "2024",
    make: "toyota",
    model: "hilux",
  });
  return (
    <>
      <p>
        i love {car.make} {car.model} {car.year}
      </p>
    </>
  );
}
