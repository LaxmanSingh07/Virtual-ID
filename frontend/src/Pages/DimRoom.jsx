import MainDim from "../Components/DimRoom/MainDim";

function DimRoom() {
  return (
    <div className="mx-auto my-12 flex gap-10 flex-col ">
      <div className="flex justify-center flex-col items-center mb-8">
        <h1 className="text-center text-5xl font-bold mb-6 mx-52">
          Bring your vision to life with our <br /> 2D room design tool.
        </h1>
        <p className="text-xl mx-auto px-28 w-fit justify-center text-center font-semibold text-gray-300">
          Input your room dimensions, and Virtual-ID will generate a detailed
          layout, <br /> allowing you to experiment with various arrangements of
          room accessories.
        </p>
      </div>
      <MainDim />
    </div>
  );
}

export default DimRoom;
