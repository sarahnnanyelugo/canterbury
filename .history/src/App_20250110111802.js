import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return <> <Routes>
          <Route path="/" element={<Home />} /></Route></>;
}

export default App;
