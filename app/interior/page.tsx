"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ImageDisplayPage() {
  const imageUrl = "/interior.jpg";
  const router = useRouter();

  const handleButtonClick = (buttonNumber: number) => {
    if (buttonNumber === 1) {
      router.push("/ac");
    } else if (buttonNumber === 2) {
      router.push("/fusebox");
    } else if (buttonNumber === 3) {
      router.push("/pws");
    } else {
      console.log(`Unhandled button number: ${buttonNumber}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Interior</h1>

      <div className="mb-8">
        <img
          src={imageUrl}
          alt="Displayed Interior Image"
          className="max-w-sm md:max-w-md rounded shadow-lg"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => handleButtonClick(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          AIR CONDITIONER
        </button>

        <button
          onClick={() => handleButtonClick(2)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-200"
        >
          FUSE BOX
        </button>

        <button
          onClick={() => handleButtonClick(3)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
        >
          POWER WINDOW SWITCHES
        </button>
      </div>
    </div>
  );
}
