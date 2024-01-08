import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetails";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import Dashboard from "./Pages/Host/Dashboard/Dashboard";
import Income from "./Pages/Host/Income/Income";
import Reviews from "./Pages/Host/Reviews/Reviews";
import HostVans from "./Pages/Host/HostVans/HostVans";
import HostVanDetails from "./Pages/Host/HostVanDetails/HostVanDetails";
import HostVanInfo from "./Pages/Host/HostVanDetails/HostVanInfo";
import HostVanPhotos from "./Pages/Host/HostVanDetails/HostVanPhotos";
import HostVanPricing from "./Pages/Host/HostVanDetails/HostVanPricing";

import "./App.css";

import "./Server";

const App = () => {
  return (
    <div className="App">
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
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
