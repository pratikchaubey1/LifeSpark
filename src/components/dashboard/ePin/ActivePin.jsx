import React from "react";

function ActivePin() {
  return (
    <div className="w-full min-h-[60vh] flex items-start justify-center px-4 py-6">
      <div className="w-full max-w-lg space-y-4">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-indigo-600">
          Used ePin
        </h2>

        {/* Content box */}
        <div className="bg-white border border-indigo-400 rounded-lg shadow-md p-6">
          <p className="text-gray-600 font-semibold italic text-center">
            There are no any record
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivePin;

