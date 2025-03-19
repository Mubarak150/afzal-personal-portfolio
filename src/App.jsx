import "boxicons/css/boxicons.min.css";
import "./App.css";
import Header from "./components/header/Header";
import { About } from "./components/about/About";
import Skills from "./components/skills/Skills";
import MyProjects from "./components/Projects/MyProjects";
import { Services } from "./components/services/Services";
import { Qualifications } from "./components/qualifications/Qualifications";
import { Contact } from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BannerMain } from "./components/banner/BannerMain";
import { BannerScroll } from "./components/banner/BannerScroll";

/* 
-------------- :BUILT BY: ---------------
ADVAOCATE MUHAMMAD MUBARAK AZAD
ALUMNI OF: KHYBER LAW COLLEGE, UNIVERSITY OF PESHAWAR

Made Ready to Deploy on: 
FEBRUARY 27, 2025 | 03:22 AM, 
HOSTEL 1, GREATER CAMPUS, i.e. University of Peshawar

Made with Dynamic Data all handled from data/data.jsx: 
March 20, 2025 | 02:47 AM, 
At Home: Aboha Swat.
*/

import { useEffect } from "react";
import { data } from "../src/data/data.jsx";

function App() {
  // this is to handle the title of the webpage automatically.
  useEffect(() => {
    document.title = data.home.shortName;
  }, []);

  return (
    <>
      {/* NAVBAR/HEADER */}
      <Header />
      <main>
        {/* HOME */}
        <BannerMain />
        <BannerScroll link="#about" />

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />

        {/* PROJECTS */}
        <MyProjects />

        {/* SERVICES */}
        <Services />

        {/* EDUCATION AND EXPERIENCE */}
        <Qualifications />

        {/* CONTACT FORM AND BUTTONS */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}

export default App;
