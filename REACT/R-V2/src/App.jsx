import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animals from "./pages/Animals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="animals" element={<Animals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
