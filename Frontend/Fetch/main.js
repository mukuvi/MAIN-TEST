async function makeData() {
  const message = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => data);
  console.log(data);
}
makeData();
