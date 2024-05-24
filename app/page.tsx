"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const [like, setLike] = useState(0);

  const handleClick = () => {
    setLike(like + 1);

    if (navigator.vibrate) {
      // Vibrate for 100ms
      navigator.vibrate(100);
      // console.log("vibrate...");
    }
    const audio = new Audio("/sound/PC-Mouse06-2.mp3");
    audio.play();
    // console.log("audio playing...");
  };

  return (
    <div className="container m-auto">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-center text-5xl pb-10">Hello World!</h1>
        <p className="text-center pb-5">いいね： {like} </p>
        <button
          className="flex items-center px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline transition duration-300"
          onClick={handleClick}
        >
          <FaHeart className="mr-2 text-red-200" /> Like
        </button>
      </div>
    </div>
  );
}
