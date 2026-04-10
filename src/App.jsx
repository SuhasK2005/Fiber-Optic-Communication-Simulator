import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SimulatorPage from "./pages/SimulatorPage";
import Theory from "./pages/Theory";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulator" element={<SimulatorPage />} />
            <Route path="/theory" element={<Theory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
