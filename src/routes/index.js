import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap";
import Team from "../pages/Team";

const CenterPoint = () => {
  return (
    <Suspense>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Roadmap" element={<Roadmap />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default CenterPoint;
