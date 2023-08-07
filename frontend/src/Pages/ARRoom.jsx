import ArPageData from "../Components/ARRoom/ArPageData";
import ArMain from "../Components/ARRoom/ArMain";

function ARRoom() {
  return (
    <div className>
      <div className="flex justify-around py-7">
        <div className="flex flex-col gap-3 ">
          <h1>What is Provides?</h1>
          <p>
            Immerse yourself in the world of <br />
            augmented reality using your camera.
          </p>
        </div>
        <div className=" grid  grid-cols-2 grid-rows-2 gap-4">
          {<ArPageData />}
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-3 mb-9 py-7 ">
        {<ArMain />}
      </div>
    </div>
  );
}

export default ARRoom;
