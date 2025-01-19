import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import { TopNav } from "./components/TopNav/TopNav";
function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
