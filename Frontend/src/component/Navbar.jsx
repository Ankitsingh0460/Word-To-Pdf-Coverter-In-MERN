import React from "react";

function Navbar() {
  return (
    <>
      <div className="max-w-screen-2xl mx:auto container px-6 py-4 md:px-40 shadow-lg h-16  bg-slate-600 text-white fixed">
        <div className="flex justify-between">
          <h1 className="text-2xl text-bold cursor-pointer font-bold hover:scale-125 duration-300hover:scale-125 duration-300">
            Word<span className="text-3xl text-green-500">To</span>Pdf
          </h1>
          <h1 className="text-2xl text-bold cursor-pointer font-bold hover:scale-125 duration-300">
            Home
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
