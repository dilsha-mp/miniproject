import React from 'react';

function CategoryChip({ name, active, onClick }) {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border
        ${active 
          ? "bg-orange-500 text-white border-orange-500 shadow-md scale-105" 
          : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100 hover:border-orange-400"
        }`}
    >
      {name}
    </button>
  );
}

export default CategoryChip;
