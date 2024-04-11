import React from "react";
import "./App.css";
import Navigations from "./components/Navigations";

const App = () => {
  return (
    <div className="flex h-screen">
      <Navigations />

      <Feed/>

      <div className="w-[32%] bg-gray-200"></div>
    </div>
  );
};

export default App;
