import React from 'react';

export default function ImageDisplayPage() {
  const imageUrl = '/interior.jpg';

  const handleButtonClick = (buttonNumber: number) => {
    console.log(`Button ${buttonNumber} clicked!`);
    alert(`You clicked Button ${buttonNumber}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Image Display</h1>

      <div className="mb-8">
        <img
          src={imageUrl}
          alt="Displayed Image"
          className="max-w-sm md:max-w-md rounded shadow-lg"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => handleButtonClick(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Button 1
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-200"
        >
          Button 2
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
        >
          Button 3
        </button>
      </div>
    </div>
  );
}