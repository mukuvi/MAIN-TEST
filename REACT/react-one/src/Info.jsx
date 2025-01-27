function Info(props) {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p>
      <p>School: {props.school}</p>
      <p>Gender: {props.isGender ? "Male" : "Female"}</p>
    </>
  );
}
export default Info;
