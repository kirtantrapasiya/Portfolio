import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react";
import PlayButton from "../Button/PlayButton";
import FadeSlide from "../components/FadeSlide";
import { motion } from "framer-motion";

const Home = ({ backgroundImage, onViewPortfolio }) => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#skills");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleHireMeClick = () => {
    const message = `
    Hello [Candidate Name],
    I'm a recruiter at [Your Company Name], and I'm actively looking to connect with talented professionals in the [Your Field/Role] space.
    We are expanding our team and have a number of exciting new challenges in [Area of Focus].
    If you or anyone in your network is looking for a new opportunity and is excited by the prospect of [Company's Main Value Proposition], I would love to connect. Feel free to reply here or visit our careers page at [Link].
    `;
    const phone = "+919023616249";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`, "_blank");
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, "_blank");
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl px-4">
        <FadeSlide delay={0.2} direction="up">
          <p className="sm:text-lg tracking-widest font-light mb-6 text-sm">
            I Love To Design
          </p>
        </FadeSlide>

        <FadeSlide delay={0.4} direction="up">
          <h1 className="text-2xl sm:text-4xl leading-tight mb-6">
            <span className="font-light">I&nbsp;&nbsp;Am</span>
            <span className="font-semibold">&nbsp;&nbsp;a&nbsp;&nbsp;</span>
            <span className="font-extrabold">
              <Typewriter
                words={["Developer", "Kirtan Trapasiya", "Designer"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={85}
                deleteSpeed={50}
                delaySpeed={1300}
              />
            </span>
          </h1>
        </FadeSlide>

        <FadeSlide delay={0.6} direction="up">
          <p className="text-gray-200 text-xs sm:text-base mb-8">
            I'm an experienced Web Developer with strong front-end and back-end skills,
            collaborating with clients and startups to build high-quality products.
          </p>
        </FadeSlide>

        <FadeSlide delay={0.8} direction="up">
          <div className="flex justify-center items-center gap-4">
            <PlayButton className="scale-78" onClick={onViewPortfolio} />
            <button
              onClick={handleHireMeClick}
              className="border-2 border-white text-white px-3 py-1 rounded-full transition"
            >
              Hire Me
            </button>
          </div>
        </FadeSlide>
      </div>

      <motion.button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="absolute bottom-6 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/80 hover:bg-white hover:text-black transition"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
};

export default Home;
