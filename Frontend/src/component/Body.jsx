import axios from "axios";
import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa";
function Body() {
  const [selectFile, setSelectFile] = useState(null);
  const [download, setDownload] = useState("");
  const [converted, setConverted] = useState("");

  const handleButton = (event) => {
    console.log(event.target.files[0]);
    setSelectFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectFile) {
      setConverted("please select a valid file");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectFile);
    try {
      const response = await axios.post(
        "http://localhost:4000/convertFile",
        formData,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      console.log(url);
      const link = document.createElement("a");
      console.log(link);
      link.href = url;
      console.log(link);
      link.setAttribute(
        "download",
        setSelectFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      console.log(link);
      document.body.appendChild(link);
      console.log(link);
      link.click();
      link.parentNode.removeChild(link);
      setSelectFile(null);
      setDownload("");
      setConverted("File Converted Successfully");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status == 400) {
        setDownload("Error occurred: ", error.response.data.message);
      } else {
        setConverted("");
      }
    }
  };
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
                onChange={handleButton}
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
                <span className="text-3xl mr-2 ">
                  {selectFile ? selectFile.name : "Choose File"}
                </span>
              </label>
              <button
                onClick={handleSubmit}
                disabled={!selectFile}
                className="text-white font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-900 duration-300 disabled:bg-slate-200 disabled:pointer-events-none disabled:text-black"
              >
                Convert File
              </button>
              {converted && (
                <div className="text-green-500 text-center">{converted}</div>
              )}
              {download && (
                <div className="text-red-500 text-center">{download}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
