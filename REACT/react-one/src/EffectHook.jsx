import { useState } from "react";

export default function EffectHook() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount((c) => c + 1);
  }
