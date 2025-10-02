import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import animationData from "../assets/SignatureEffect.json";
import Lottie from "lottie-react";

const IntroWrapper = ({ children }) => {
  const [stage, setStage] = useState("lottie");

  useEffect(() => {
    const timer = setTimeout(() => setStage("card"), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        {stage === "lottie" && (
          <motion.div
            key="animation"
            className="flex items-center justify-center h-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Lottie
              animationData={animationData}
              loop={false}
              onComplete={() => setStage("card")}
              className="w-[600px] h-[600px]"
            />
          </motion.div>
        )}

        {stage === "card" && (
          <motion.div
            key="card"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1.6, opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setStage("website");
              }, 1000);
            }}
            className="bg-white shadow-2xl rounded-2xl p-4 flex items-center justify-center overflow-hidden"
          >
            <img
              src={null}
              alt="Home"
              className="max-w-xs w-auto h-auto object-cover rounded-xl"
            />
          </motion.div>
        )}

        {stage === "website" && (
          <motion.div
            key="website"
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroWrapper;
