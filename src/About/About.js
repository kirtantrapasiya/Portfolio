import React from 'react';
import FadeSlide from '../components/FadeSlide';
import cvFile from "../Images/files/Kirtan Trapasiya CV.pdf";

const About = () => {

  const handleDownloadCV = () => {
    try {
      window.open(cvFile, "_blank");
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <section className="bg-[#2E402C] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <FadeSlide delay={0.2} direction="up">
          <p className="text-yellow-500 text-sm mb-2">— Know more about me</p>
        </FadeSlide>

        <FadeSlide delay={0.4} direction="up">
          <h2 className="text-4xl font-bold mb-4">
            Who is <span className="text-yellow-400">Kirtan Trapasiya?</span>
          </h2>
        </FadeSlide>

        <FadeSlide delay={0.6} direction="up">
          <p className="text-gray-300 mb-2 text-lg">2022 – 2026</p>
        </FadeSlide>

        <FadeSlide delay={0.8} direction="up">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Bachelor of Engineering (Computer Engineering)
          </h3>
        </FadeSlide>

        <FadeSlide delay={1.0} direction="up">
          <p className="text-gray-300 mb-8 leading-relaxed max-w-3xl">
            Currently pursuing Computer Engineering at Government Engineering College, Bhavnagar. 
            Focusing on AI Engineering, Progressive Web Applications, and Full-Stack Development.
          </p>
        </FadeSlide>

        <FadeSlide delay={1.2} direction="up">
          <div className="flex items-center gap-6 flex-wrap">
            <button 
              onClick={handleDownloadCV}
              className="bg-white text-[#2E402C] px-6 py-3 rounded-full font-semibold transition hover:bg-yellow-400 hover:shadow-xl"
            >
              Open CV
            </button>

            <span
              className="text-yellow-400 text-2xl tracking-wide"
              style={{ fontFamily: 'Dancing Script' }}
            >
              Kirtan Trapasiya
            </span>
          </div>
        </FadeSlide>
      </div>
    </section>
  );
};

export default About;
