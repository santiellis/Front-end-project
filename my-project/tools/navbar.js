import React from "react";
//tablet: laptop: desktop: 

function Navbar() {
  return (
    <div className="fixed bg-white h-16">
      <div className="flex-1 flex justify-evenly">
        <div className="flex-1 flex h-5 w-screen">
          <h1 className="fixed top-4 left-6 text-2xl tablet:text-xl decoration-black decoration-4 font-black select-none drop-shadow-xl shadow-black">
            Pino
          </h1>
          <div className="fixed top-4 left-80 px-60 flex space-x-32">
            <button className="font-medium hover:text-yellow-500">Community</button>
            <button className="font-medium hover:text-yellow-500">Product</button>
            <button className="font-medium hover:text-yellow-500">About us</button>
          </div>
          <div className="fixed top-4 right-20">
            <button className="bg-yellow-400 font-bold border-2 border-black border-spacing-3 px-4 py-1 border-solid rounded hover:bg-yellow-500">Download Pino</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
