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
Info.defaultProps = {
  name: "jones",
  age: 20,
  school: "school of engineering",
  isGender: true,
};
export default Info;
