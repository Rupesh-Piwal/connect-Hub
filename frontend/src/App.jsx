import "./App.css";
import Navigations from "./components/Navigations";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};

export default App;
