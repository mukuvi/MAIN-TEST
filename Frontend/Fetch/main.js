async function makeData() {
  const message = await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
makeData();
