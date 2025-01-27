import Button from "./Button";
import Footer from "./Footer";
import Info from "./Info";
import "./index.css";

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
        <Info
          name="julia"
          age="18"
          school="school of medicine"
          isGender={false}
        />
        <Button />
        <Footer />
      </div>
    </>
  );
}

export default App;
