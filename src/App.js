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
import { Apply } from "./Pages/Admission/Apply/Apply";
import { EYFS } from "./Pages/Academics/EYFS/EYFS";
import { Secondary } from "./Pages/Academics/Secondary/Secondary";
import { Primary } from "./Pages/Academics/Primary/Primary";
import { OurFacilities } from "./Pages/AboutUs/OurFacilities/OurFacilities";
import { OurStaff } from "./Pages/AboutUs/OurStaff/OurStaff";
import { Desktop, TabletAndBelow } from "./Utils/mediaQueries";
import { MobileHome } from "./Pages/Home/MobileHome";
function App() {
  return (
    <>
      <TopNav />

      <Desktop>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="mission" element={<MissionVision />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="history" element={<History />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="apply" element={<Apply />} />
          <Route path="primary" element={<Primary />} />
          <Route path="secondary" element={<Secondary />} />
          <Route path="eyfs" element={<EYFS />} />
          <Route path="our-facilities" element={<OurFacilities />} />
          <Route path="our-staff" element={<OurStaff />} />
        </Routes>
      </Desktop>
      <TabletAndBelow>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<MobileHome />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="mission" element={<MissionVision />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="history" element={<History />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="apply" element={<Apply />} />
          <Route path="primary" element={<Primary />} />
          <Route path="secondary" element={<Secondary />} />
          <Route path="eyfs" element={<EYFS />} />
          <Route path="our-facilities" element={<OurFacilities />} />
          <Route path="our-staff" element={<OurStaff />} />
        </Routes>
      </TabletAndBelow>
      <Footer />
    </>
  );
}

export default App;
