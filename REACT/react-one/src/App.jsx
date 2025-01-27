import Button from "./Button";
import Footer from "./Footer";
import Info from "./Info";

function App() {
  return (
    <>
      <div>
        <Info
          key={Math.random()}
          name="james"
          age="21"
          school="school of science"
          isGender={true}
        />
        <Button />
        <Footer />
      </div>
    </>
  );
}

export default App;
