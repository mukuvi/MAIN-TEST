import Button from "./Button";
import ChangeObject from "./ChangeObject";
import Counter from "./Counter";
import Footer from "./Footer";
import Info from "./Info";
import InputChange from "./InputChange";
import List from "./List";
import Redo from "./Redo";
import UpdateArrays from "./UpdateArrays";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <div className="info-data">
          <Info
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
          <Info />
        </div>
        {/* <UpdateArrays /> */}
        <Redo />
        {/* <InputChange /> */}
        {/* <ChangeObject /> */}
        {/* <Counter /> */}
        {/* <List /> */}
        <Button />
        <Footer />
      </div>
    </>
  );
}

export default App;
