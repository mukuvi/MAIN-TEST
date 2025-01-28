const styles = {
  padding: "8px 10px",
  border: "none",
  backgroundColor: "lightgreen",
};
function Button() {
  function handleClick() {
    handleClick.textContent = "clicked";
  }

  return (
    <button style={styles} onClick={handleClick}>
      Click Me!
    </button>
  );
}
export default Button;
