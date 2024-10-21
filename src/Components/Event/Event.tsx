import React from "react";

function Event() {
  return (
    <div>
      <header className="text-center py-6 bg-indigo-600 text-white">
        <h1 className="text-3xl font-bold">2024 North Island Writers Conference Program</h1>
        <p className="mt-2">January 19-21, 2024</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-md shadow hover:bg-gray-200">
            Add to Calendar
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-400">
            Register Now
          </button>
        </div>
      </header>
    </div>
  );
}

export default Event;
