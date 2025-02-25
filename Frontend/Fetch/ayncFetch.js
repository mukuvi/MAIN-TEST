async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("The response is not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data));
  } catch (error) {
    console.log(`Wrong syntax ${error}`);
  }
}
fetchData();
