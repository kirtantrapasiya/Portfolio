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
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  const scrollAnimationRef = useRef(null);

  const scrollToBottomSmooth = () => {
    
    // If scrolling, stop it
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
      setIsAutoScrolling(false);
      // Re-enable smooth scroll
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    // IMPORTANT: Disable native smooth scroll
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Start scrolling
    setIsAutoScrolling(true);
    
    const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const targetPosition = documentHeight - windowHeight;
    const distance = targetPosition - startPosition;
    
    if (distance <= 10) {
      setIsAutoScrolling(false);
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }
    
    // Dynamic duration based on screen size
    // Mobile: faster, Desktop: slower
    const isMobile = window.innerWidth < 768;
    const baseDuration = isMobile ? 65000 : 35000; // 20s for mobile, 30s for desktop
    
    // Adjust duration based on distance
    const duration = Math.max(baseDuration, (distance / windowHeight) * (isMobile ? 3000 : 4000));
    
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Linear progress - constant speed (no easing)
      const newPosition = startPosition + (distance * progress);
      
      // Scroll with auto behavior
      window.scrollTo(0, newPosition);

      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(animation);
      } else {
        setIsAutoScrolling(false);
        scrollAnimationRef.current = null;
        // Re-enable smooth scroll
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    }

    scrollAnimationRef.current = requestAnimationFrame(animation);

    // Stop on user interaction - with passive: false for preventDefault
    const stopScroll = (e) => {
      if (scrollAnimationRef.current) {
        if (e.type === 'wheel' || e.type === 'touchmove') {
          e.preventDefault();
        }
        cancelAnimationFrame(scrollAnimationRef.current);
        scrollAnimationRef.current = null;
        setIsAutoScrolling(false);
        // Re-enable smooth scroll
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };

    const stopScrollSimple = () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
        scrollAnimationRef.current = null;
        setIsAutoScrolling(false);
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    };

    // Multiple event listeners for better detection
    window.addEventListener('wheel', stopScroll, { passive: false, once: true });
    window.addEventListener('touchstart', stopScrollSimple, { once: true });
    window.addEventListener('touchmove', stopScroll, { passive: false, once: true });
    window.addEventListener('mousedown', stopScrollSimple, { once: true });
    window.addEventListener('keydown', stopScrollSimple, { once: true });
  };

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

        <Home 
          backgroundImage={null} 
          onViewPortfolio={scrollToBottomSmooth}
          isScrolling={isAutoScrolling}
        />

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