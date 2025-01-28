import { useState } from "react";

export default function InputChange() {
  const [name, setName] = useState("Guest");
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <>
      <input onChange={handleChange} value={name} />
      <p>Name: {name}</p>
      <textarea
        value={comment}
        placeholder="Enter more details"
        onChange={handleComment}
      />
      <p>Comment: {comment}</p>
    </>
  );
}
