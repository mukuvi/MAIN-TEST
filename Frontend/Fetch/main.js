async function makeData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = response.json();
  console.log(data);
}
makeData();
