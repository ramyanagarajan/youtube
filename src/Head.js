import React from "react";

const Head = () => {
  return (
    <div className=" flex justify-between p-3">
      <div className="flex justify-between w-60">
        <img
          className="h-9"
          src="https://cdn-icons-png.flaticon.com/512/6499/6499731.png"
        />
        <img
          className="h-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="w-6/12">
        <input
          type="text"
          className="border border-gray-400 p-3 rounded-l-full w-6/12"
        />
        <button className="border border-gray-400 bg-gray-100 p-3 rounded-r-full">
          🔍
        </button>
      </div>
      <img
        className="h-10"
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      />
    </div>
  );
};

export default Head;
