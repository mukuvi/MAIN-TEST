import Button from "./Button";
import ChangeObject from "./ChangeObject";
import ChangeUpdate from "./ChangeUpdate";
import Counter from "./Counter";

import Footer from "./Footer";

import Info from "./Info";
import InputChange from "./InputChange";
import List from "./List";
import ToDoList from "./ToDoList";

import UpdateArrays from "./UpdateArrays";
import UpdatingObjects from "./UpdatingObjects";

import "./index.css";

function App() {
  return (
    <>
      <div>
        {/* <div className="info-data">
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
        </div> */}

        {/* <ChangeUpdate />
        <UpdateArrays /> */}
        {/* <UpdatingObjects /> */}

        {/* <InputChange /> */}
        {/* <ChangeObject /> */}
        {/* <Counter /> */}
        {/* <List /> */}
        <ToDoList />

        <Button />
        <Footer />
      </div>
    </>
  );
}

export default App;
