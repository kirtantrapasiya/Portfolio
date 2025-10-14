import React, { useState } from 'react';

const Button = ({sectionName}) => {

  return (
    <div className='cursor-pointer m-2 inline-block'>
      <div className='p-0.5 bg-yellow-400 rounded-full flex gap-1'>
        <button className='bg-[#2E402C] text-white px-6 py-2 rounded-full text-sm hover:shadow-lg transition'>
          {`View ${sectionName}`}
        </button>
      </div>
    </div>
  );
};

export default Button;
