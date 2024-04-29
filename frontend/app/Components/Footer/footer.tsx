import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full p-4 border-t-2 border-t-gray-600 text-white">
      <div className="max-w-full w-[1000px] flex justify-between items-center m-auto">
        <div>
          <h1 className="text-xl font-semibold">Chess.co</h1>
        </div>
        <div className="flex gap-4">
          <Link href={"/"}>
            <Github size={40} />
          </Link>
          <Link href={"/"}>
            <Twitter size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
}
