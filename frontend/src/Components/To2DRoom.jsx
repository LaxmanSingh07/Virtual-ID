import React from "react";
import { Link, Navigate } from "react-router-dom";

function To2DRoom() {
  return (
    <div
      role="status"
      class="flex gap-20 p-8 space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center"
    >
      <div class="items-center justify-center">
        <img src="../../assets/02.png" />
      </div>
      <div class="flex flex-col justify-between">
        <div class="font-mono text-xl my-1">Precise Room Design</div>
        <div class="mb-4 font-semibold text-5xl text-gray-400">
          Take the guesswork out of designing your room
        </div>
        <div class="text-gray-400 leading-6 mb-6 font-thin">
          Simplify room planning. Input your room's dimensions, and Virtual-ID
          will generate a precise 2D design for exploring different layouts and
          placements.
        </div>
        <Link
          to="/2d-room"
          class="w-32 text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl text-md p-2 text-center mr-2 mb-2"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default To2DRoom;
