async function myData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1w"
    );
    if (!response.ok) {
      throw new Error("Response is not ok !");
    }
    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.log(`${error}`);
  }
}
myData();
