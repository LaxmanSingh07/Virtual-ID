import ArPageData from "../Components/ARRoom/ArPageData";
import ArMain from "../Components/ARRoom/ArMain";

function ARRoom() {
  return (
    <div className="mx-auto my-6">
      <div className="flex justify-around py-7">
        <div className="flex flex-col gap-2 mx-6">
          <h1 className="text-blue-500 font-semibold">What it Provides?</h1>
          <div className="leading-2 text-gray-200 text-lg">
            Immerse yourself in the world of augmented <br /> reality using your
            camera.
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center w-fit px-8">
          {<ArPageData />}
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-3 py-12 mb-8">
        {<ArMain />}
      </div>
    </div>
  );
}

export default ARRoom;
