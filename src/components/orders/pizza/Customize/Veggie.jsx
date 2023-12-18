import React from "react";

const Veggie = ({items}) => {
 
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <label key={index} className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-900 text-sm">{item}</span>
        </label>
      ))}
    </div>
  );
};

export default Veggie;
