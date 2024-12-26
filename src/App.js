import React from "react";
import Repo from "./Repo";
import Sign from "./Sign";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/repo" element={<Repo />} />
      </Routes>
    </Router>
  );
}

export default App;
