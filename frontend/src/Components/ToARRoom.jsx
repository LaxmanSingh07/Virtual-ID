import React from "react";

function ToARRoom() {
  return (
    <div
      role="status"
      class="flex gap-20 p-8 space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center"
    >
      <div class="flex flex-col justify-between">
        <div class="font-semibold text-xl my-1">
          Real Time Room Visualization
        </div>
        <div class="mb-4 font-thin text-5xl text-gray-400">
          Design your Room in Real Time with Virtual Visualization
        </div>
        <div class="text-gray-400 leading-6 mb-6">
          Immerse yourself in the future of interior design. Use your camera to
          virtually place furniture and decor items in your room, experiencing
          an instant virtual preview.
        </div>
        <button
          type="button"
          class="w-32 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-md p-2 text-center mr-2 mb-2"
        >
          Get Started
        </button>
      </div>
      <div class="mx-auto items-center justify-center">
        <img src="../../assets/01.png" alt="right-image" />
      </div>
    </div>
  );
}

export default ToARRoom;
