const message = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch the reposnse");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Wrong syntax"));
