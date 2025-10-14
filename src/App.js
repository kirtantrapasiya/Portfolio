import "./App.css";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import Skills from "./Skill&Technologies/Skills";
import Skilldata from "./Skill&Technologies/Skilldata";
import About from "./About/About";
import Education from "./About/Education";
import Projects from "./Project/Projects";
import ProjectData from "./Project/ProjectData";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useState, useRef } from "react";
import Logo from "./Images/photos/logo.svg";
import IntroWrapper from "./components/IntroWrapper";
import { Element } from "react-scroll";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async"; 

const App = () => {
  const [allSkills] = useState(Skilldata);
  const [allProjects] = useState(ProjectData);

  return (
    <IntroWrapper>
      <Helmet>
        <title>Kirtan Trapasiya - Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Kirtan Trapasiya's portfolio. A Frontend Developer skilled in React, JavaScript, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Kirtan Trapasiya, Frontend Developer, React Developer, JavaScript, Portfolio, Web Developer"
        />
        <meta name="author" content="Kirtan Trapasiya" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <div className="min-h-screen font-sans">
        <Navbar Logo={Logo} />

        <Home backgroundImage={null} />

        <section id="skills" className="max-w-7xl mx-auto px-4 py-12">
          <Skills skills={allSkills} />
        </section>

        <section
          id="aboutOReducation"
          className="bg-[#2E402C] text-white w-full py-4"
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="w-full lg:w-1/2">
              <About />
            </div>
            <div className="w-full lg:w-1/2">
              <Education />
            </div>
          </div>
        </section>

        <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
          <Projects projects={allProjects} />
        </section>

        <Element name="contactSection">
          <section id="contact" className="bg-[#2E402C] py-16">
            <div className="max-w-7xl mx-auto px-4">
              <Contact />
            </div>
          </section>
        </Element>

        <footer>
          <Footer />
        </footer>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
        transition={Slide}
        style={{
          zIndex: 9999,
          top: "20px",
          right: "20px",
        }}
        toastStyle={{
          marginBottom: "12px",
          minHeight: "60px",
          padding: "16px",
        }}
        progressStyle={{
          height: "3px",
          borderRadius: "0 0 12px 12px",
        }}
      />
    </IntroWrapper>
  );
};

export default App;