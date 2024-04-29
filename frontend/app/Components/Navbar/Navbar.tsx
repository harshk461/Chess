import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full p-4 bg-[#222831] text-white shadow-md shadow-black">
      <div className="max-w-full w-[1000px] flex items-center justify-between m-auto">
        <h1 className="font-bold text-2xl">Chess</h1>
        <div className="flex gap-4 items-center text-xl ">
          <Link href={"/"}>Play Online</Link>
          <Link href={"/auth/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
