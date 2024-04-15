import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/profile" />
      </Routes>
    </>
  );
};

export default App;
