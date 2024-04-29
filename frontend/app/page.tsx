/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import { Crown } from "lucide-react";

export default function page() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-[1000px] max-w-full h-full m-auto mt-[100px] flex gap-[40px] lg:flex-row flex-col p-4 items-center">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="w-full flex flex-col items-start gap-1 text-white">
            <h1 className="text-3xl md:text-6xl font-bold">Your Ultimate</h1>
            <h1 className="text-5xl md:text-8xl font-bold">CHESS</h1>
            <h1 className="text-3xl md:text-6xl font-bold">Destination</h1>
          </div>

          <div className="text-xl text-white mt-4">
            Chess.co is your premier destination for mastering the timeless game
            of chess. Whether you're a beginner looking to learn the basics or
            an experienced player aiming to sharpen your skills.
          </div>

          <button className="w-full flex gap-2 bg-green-500 items-center justify-center p-4 text-3xl font-bold text-white rounded-lg my-4 shadow-md shadow-black">
            <Crown size={35} /> Play Online
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img className="w-full " src="./chess.png" alt="chess board" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
