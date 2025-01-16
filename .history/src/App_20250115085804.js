import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import { TopNav } from "./components/TopNav/TopNav";
function App() {
  return (
    <>
      {/* <TopNav /> */}

      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <div class="wrapper">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </div>
      <div class="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
