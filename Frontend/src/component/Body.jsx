import React from "react";
import { FaFileWord } from "react-icons/fa";
function Body() {
  return (
    <>
      <div className="bg-slate-300  max-w-screen-2xl mx:auto container px-6 py-4 md:px-40 ">
        <div className=" flex h-screen items-center justify-center ">
          <div className="border-2 border-dashed px-4 py-2 md:px-8 py-6 border-indigo-400 rounded-lg shadow-lg">
            <h1 className="text-3xl text-center font-bold mb-4">
              Convert Word To PDF Online{" "}
            </h1>
            <p className="text-center text-sm mb-5">
              Easily convert Word document to PDF format online, without having
              to install any software
            </p>

            <div className="flex flex-col items-center space-y-4">
              <input
                type="file"
                accept=".doc,.docx"
                className="hidden"
                id="FileInput"
              ></input>
              <label
                htmlFor="FileInput"
                className="w-full flex item-center justify-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg shadow-lg cursor-pointer boarder-blue-300 hover:bg-blue-700 duration-300  hover:text-white"
              >
                <FaFileWord className="text-3xl" />
                <span className="text-3xl mr-2 ">Choose File</span>
              </label>
              <button className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-900 duration-300 ">
                Convert File
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
