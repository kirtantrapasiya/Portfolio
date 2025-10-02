import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FadeSlide from "../components/FadeSlide";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); 
  const [messageType, setMessageType] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("Sending message..."); 

    emailjs.sendForm(
      "service_78g8xwm",
      "template_o6d3zmr",
      formRef.current,
      "_-AS5cNOqTDcNhAnH"
    ).then(
      () => {
        setLoading(false);
        formRef.current.reset();
        setStatusMessage("Message sent successfully!"); 
        setMessageType("success");
        setTimeout(() => setStatusMessage(""), 5000);
      },
      (error) => {
        setLoading(false);
        console.error(error.text);
        setStatusMessage("Something went wrong. Try again.");
        setMessageType("error");
        setTimeout(() => setStatusMessage(""), 5000);
      }
    );
  };

  return (
    <section className="text-white py-20 px-8 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeSlide delay={0.2} direction="left">
          <div>
            <h4 className="text-yellow-500 text-sm font-medium mb-2">Contact Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Let's Talk for <span className="text-yellow-400">Your Next Projects</span>
            </h2>
            <p className="text-gray-200 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-4">
                <a href="tel:+919023616249" className="flex items-center gap-4">
                  <span className="bg-yellow-500 p-2 rounded-full text-[#2E402C]">
                    <FaPhoneAlt />
                  </span>
                  +91 9023616249
                </a>
              </li>
              <li className="flex items-center gap-4">
                <a href="mailto:trapasiyakirtan1607@gmail.com?subject=Hello&body=Hi,%20I%20would%20like%20to%20get%20in%20touch." className="flex items-center gap-4">
                  <span className="bg-yellow-500 p-2 rounded-full text-[#2E402C]">
                    <FaEnvelope />
                  </span>
                  trapasiyakirtan1607@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <a href="https://maps.app.goo.gl/Rr5v74SX3XtcyPX77" target="_blank" className="flex items-center gap-4">
                  <span className="bg-yellow-500 p-2 rounded-full text-[#2E402C]">
                    <FaMapMarkerAlt />
                  </span>
                  Amreli, Gujarat, India - 365421
                </a>
              </li>
            </ul>
          </div>
          
          {statusMessage && (
            <div className={`text-sm w-80% p-4 mt-8 rounded-lg ${messageType === 'success' ? 'bg-green-50 text-green-800' : 'bg-yellow-50 text-yellow-800'}`}>
              {statusMessage}
            </div>
          )}
        </FadeSlide>

        <FadeSlide delay={0.4} direction="bottom">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 relative"
          >

            <div className="flex flex-col">
              <label className="text-sm mb-1">Your Full Name *</label>
              <input type="text" name="name" placeholder="Enter Your Full Name" className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Email *</label>
              <input type="email" name="email" placeholder="example@gmail.com" className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">I'm Interested in *</label>
              <select name="project" className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" required>
                <option value="">Select</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Web Design">Web Design</option>
                <option value="Web Application">Web Application</option>
                <option value="UI/UX">UI/UX</option>
              </select>
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-sm mb-1">Country *</label>
              <select name="country" className="bg-[#3D5240] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" required>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-sm mb-1">Your Message *</label>
              <textarea name="message" placeholder="Enter here..." className="bg-[#3D5240] text-white px-4 py-2 rounded min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" required></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-white w-max text-[#2E402C] font-semibold px-6 py-2 rounded-full transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </motion.form>
        </FadeSlide>
      </div>
    </section>
  );
};

export default Contact;
