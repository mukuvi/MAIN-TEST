import { useState } from "react";

export default function InputChange() {
  const [name, setName] = useState("Guest");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handlePayment = (e) => {
    setPayment(e.target.value);
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
      <select value={payment} onChange={handlePayment}>
        <option value="">select payment</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Master Card</option>
        <option value="Mpesa"> Mpesa</option>
      </select>
      <p>Payment: {payment}</p>
    </>
  );
}
