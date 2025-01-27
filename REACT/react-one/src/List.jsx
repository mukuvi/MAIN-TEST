function List() {
  const fruits = ["mango", "banana", "apple", "orange", "pineapple"];
  fruits.sort();
  const fruitEl = fruits.map((fruit) => <li>{fruit}</li>);
  return <ul>{fruitEl}</ul>;
}
export default List;
