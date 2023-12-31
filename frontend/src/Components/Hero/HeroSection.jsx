import React from "react";

function HeroSection() {
  return (
    <section class="py-10 lg:mb-32 z-10 ">
      <div class="py-10 md:py-16 lg:py-10 px-4 md:px-8 lg:px-16 flex flex-col justify-center text-center ">
        <div class="mb-2 md:mb-4 lg:mb-6 md:px-24 text-5xl md:text-6xl font-bold tracking-tight leading-none md:text-center text-white">
          Revolutionize your interior design with Augmented Reality
        </div>
        <p class="py-6 md:py-0 px-6 :px-4 text-lg md:text-lg lg:text-xl font-normal text-gray-500 md:text-center dark:text-gray-200">
          <span class="text-green-500 font-semibold">
            Are you transforming your living space?
          </span>{" "}
          Our innovative augmented reality technology lets you design your dream
          room with ease. Experiment with our endless combinations of items.
        </p>
        {/* <form class="w-full max-w-md mx-auto">
          <label
            for="default-email"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Email sign-up
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="default-email"
              class="block w-full p-3 md:p-4 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email here..."
              required
            />
            <button
              type="submit"
              class="mt-2 md:mt-0 ml-0 md:ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-3 md:px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}

export default HeroSection;
