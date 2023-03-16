import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addBook" element={<Add />} />
        <Route path="/editBook/:bookId" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
