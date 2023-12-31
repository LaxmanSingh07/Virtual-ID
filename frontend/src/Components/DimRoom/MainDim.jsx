function MainDim() {
  return (
    <div className="flex justify-evenly items-center gap-4 py-12 mb-8">
      <div className="w-[58%] justify-around">
        <form class="flex flex-wrap flex-grow gap-8 mx-2">
          <div class="mb-6 flex-grow w-full sm:w-auto">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Dimension 1
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div class="mb-6 flex-grow w-full sm:w-auto">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Dimension 2
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <button
            type="button"
            class="text-white h-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 my-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Set
          </button>
        </form>
        <div className=" h-[615px] bg-blue-100 rounded-lg"></div>
      </div>
      <div className="w-[30%] h-[700px] bg-yellow-100 rounded-lg"></div>
    </div>
  );
}

export default MainDim;
