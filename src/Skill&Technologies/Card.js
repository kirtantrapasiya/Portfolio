import React from 'react';

const Card = ({ title, items, icon }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition border border-gray-200 h-full flex flex-col">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4 shadow">
        <img src={icon} alt="icon" className="w-18 h-18 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow">
        {items}
      </p>
    </div>
  );
};

export default Card;
