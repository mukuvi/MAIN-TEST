function Info(props) {
  return (
    <div className="info">
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p>
      <p>School: {props.school}</p>
      <p>Gender: {props.isGender ? "Male" : "Female"}</p>
    </div>
  );
}
export default Info;
