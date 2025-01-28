function List() {
  const fruits = ["mango", "banana", "apple", "orange", "pineapple"];
  fruits.sort();
  const fruitEl = fruits.map((fruit) => <li key={fruit}>{fruit}</li>);
  return <ul>{fruitEl}</ul>;
}
export default List;
