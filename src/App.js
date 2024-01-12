// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import ThreatPrediction from "./components/ThreatPrediction";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="p-4">
          <h1 className="text-5xl text-indigo-500 font-bold font-poppins mt-4">
            PandoraGuard
          </h1>
          <ThreatPrediction />
        </div>
      </div>
    </Router>
  );
}

export default App;
