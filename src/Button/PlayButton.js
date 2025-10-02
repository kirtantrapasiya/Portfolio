import React from "react";

const PlayButton = ({ onClick, className = "" }) => {
  return (
    <div className={`inline-block transform ${className}`}>
      <div className="p-0.5 bg-yellow-400 rounded-full flex items-center hover:shadow-lg">
        <button
          onClick={onClick}
          className="bg-[#2E402C] text-white px-5 py-2 md:px-5 md:py-2 font-sans rounded-full md:text-sm text-sm"
        >
          View My Portfolio
        </button>

        <div
          className="flex items-center justify-center rounded-full bg-white border-2 md:border-4 border-yellow-400"
          style={{ width: "2.3em", height: "2.3em" }}
        >
          <div
            className="ml-0.5"
            style={{
              width: 0,
              height: 0,
              borderTop: "0.45em solid transparent",
              borderBottom: "0.45em solid transparent",
              borderLeft: "0.75em solid black",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
