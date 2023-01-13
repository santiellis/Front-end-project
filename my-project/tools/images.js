import React from "react";
import Image from "next/image";
import handcoin from "../public/mano-con-monedas.png";
import handcell from "../public/manos-con-telefono.png";
import sircoffe from "../public/senor-con-cafe.png";

function Images() {
  return (
    <div className="flex-1 flex justify-center space-x-7 h-96 ">
      <div className="relative h-24 w-96 bg-yellow-400 rounded-lg">
        <div className="relative top-0 left-48 bg-white border-2 z-20 border-black rounded-md h-3 w-3"></div>
        <h1 className="relative top-1 left-3 font-semibold text-2xl">
          Banking just got
        </h1>
        <h1 className="relative top-1 left-3 font-semibold text-2xl">
          smarter
        </h1>
        <div className="relative flex h-7 w-36 -top-12 left-56 hover:-rotate-6 duration-500 hover:">
          <div className="relative border-2 items-center border-black z-10 bg-white w-32 font-medium  hover:bg-slate-50 rounded text-center -rotate-12 text-sm select-none">
            Get Early Access
          </div>
          <div className="absolute -bottom-1 left-1 bg-opacity-25 items-center bg-black h-2 w-32 rounded text-center -rotate-12 text-sm select-none"></div>
        <div className="relative -top-5 right-1 bg-white border-2 border-black z-20 rounded-md h-3 w-3"></div>
        </div>
        <div className="relative -top-5 left-72 bg-white border-2 border-black z-20 rounded-md h-3 w-3"></div>
          
        <Image src={sircoffe} width={600} className="rounded-md" />
        <div className="absolute top-36 left-12 w-1/3">
          <p className="text-xl text-black font-semibold">We care about you</p>
        </div>
      </div>
      <div className="relative flex items-end">
        <div className="absolute top-32 left-7 w-1/3">
          <p className="text-xl text-white font-medium">
            Get monthly salary reward on your spends all years
          </p>
        </div>
        <Image
          src={handcoin}
          height={270}
          width={400}
          className="flex flex-1 rounded-md "
        ></Image>
        <button className="absolute left-10 bottom-5 border-2 border-black font-medium bg-white rounded-md w-28 hover:bg-slate-100">
          Know More
        </button>
      </div>
      <div className="relative flex items-end">
        <div className="absolute top-32 left-7 w-1/3">
          <p className="text-xl font-semibold">Banking at your fingertips</p>
        </div>
        <Image
          src={handcell}
          height={270}
          width={400}
          className="rounded-md border-2 border-black"
        ></Image>
      </div>
    </div>
  );
}

export default Images;
