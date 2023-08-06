import React from "react";

function MiddleOne() {
  return (
    <ul className="px-20 flex gap-6 justify-between bg-transparent">
      <li class="px-4 py-2 font-normal">
        <h4 className="font-bold">Virtual Visualization</h4>
        <span className="text-sm text-gray-200">Instant AR Room Preview</span>
      </li>
      <li class="px-4 py-2 text-sm font-medium ">
        <h4 className="font-bold">2D Room Design</h4>
        <span className="text-sm text-gray-200 font-mono">
          Accurate Layout Generator
        </span>
      </li>
      <li class="px-4 py-2 text-sm font-medium ">
        <h4 className="font-bold">Extensive Catalogue</h4>
        <span className="text-sm text-gray-200">
          Diverse Furniture Selection
        </span>
      </li>
    </ul>
  );
}

export default MiddleOne;
