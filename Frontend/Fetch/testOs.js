async function testOs() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  } catch (error) {
    console.log(`${error}`);
  }
}
