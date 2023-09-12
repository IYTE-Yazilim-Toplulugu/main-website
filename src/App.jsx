import React from "react";
import Home from "./pages/Home";
import SSS from "./pages/SSS";

import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/sss" element={<SSS />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events" element={<Events />} />
      
    </Routes>
  );
}

export default App;
