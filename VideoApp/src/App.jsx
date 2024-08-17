import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Room from "./Pages/Room";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomid" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
