import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import { TopNav } from "./components/TopNav/TopNav";
import { Footer } from "./components/Footer/Footer";
import { OurStory } from "./Pages/AboutUs/OurStory/OurStory";
import { MissionVision } from "./Pages/AboutUs/MissionVision/MissionVision";
import { Welcome } from "./Pages/Admission/Welcome/Welcome";
import { History } from "./Pages/AboutUs/History/History";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { Apply } from "./Pages/Apply/Apply";
function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="mission" element={<MissionVision />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="history" element={<History />} />
        <Route path="history" element={<History />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="apply" element={<Apply />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
