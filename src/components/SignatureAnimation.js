import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/SignatureEffect.json";

const SignatureAnimation = ({ onComplete }) => {
  return (
    <div className="flex items-center justify-center bg-white w-full h-screen">
      <Lottie
        animationData={animationData}
        loop={false}
        style={{ width: 400, height: 400 }}
        onComplete={onComplete}
      />
    </div>
  );
};

export default SignatureAnimation;
