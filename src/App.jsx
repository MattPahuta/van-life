import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Vans from "./routes/Vans/Vans";
import VanDetail from "./routes/Vans/VanDetail";
import Dashboard from "./routes/Host/Dashboard";
import Income from "./routes/Host/Income";
import Reviews from "./routes/Host/Reviews";
import HostVans from "./routes/Host/HostVans";
import HostVanDetail from "./routes/Host/HostVanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
