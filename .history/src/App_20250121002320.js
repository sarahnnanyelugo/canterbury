import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import { TopNav } from "./components/TopNav/TopNav";
import { Footer } from "./components/Footer/Footer";
import { OurStory } from "./Pages/AboutUs/OurStory/OurStory";
function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="our-story" element={<OurStory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
