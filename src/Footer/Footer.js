import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const email = "trapasiyakirtan1607@gmail.com";
  const subject = "Hello Kirtan";
  const body = "I would like to contact you regarding...";

  const handleEmailClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");
    }
  };

  return (
    <footer className="bg-[#2E402C] text-white py-5 border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold">Kirtan Trapasiya</h3>
          <p className="text-sm text-gray-300">Full Stack Developer</p>
          <p className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/kirtantrapasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 hover:border-yellow-400 p-2 rounded-md border border-gray-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kirtan-trapasiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 hover:border-yellow-400 p-2 rounded-md border border-gray-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            onClick={handleEmailClick}
            className="hover:text-yellow-400 hover:border-yellow-400 p-2 rounded-md border border-gray-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
