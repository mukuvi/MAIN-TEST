function List() {
  const fruits = ["mango", "banana", "apple", "orange", "pineapple"];
  const fruitsEl = fruits.map((fruit) => <li>{fruit}</li>);
  return <ol>{fruitsEl}</ol>;
}
export default List;
