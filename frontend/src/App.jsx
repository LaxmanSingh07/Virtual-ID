import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Card } from "flowbite-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* tailwind */}
      <div className="flex justify-center items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="m-4 font-2xl">
        Vite + <span className="text-red-800 font-semibold">React</span>
      </h1>
      <div className="card mt-6">
        {/* Material UI */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        {/* Flowbite */}
        <a
          href="#"
          class="m-6 flex flex-col justify-center item-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            weBuilds
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Building V-ID (Virtual Interior Designer).
          </p>
        </a>
      </div>
    </>
  );
}

export default App;
