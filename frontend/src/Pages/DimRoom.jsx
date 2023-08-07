import MainDim from "../Components/DimRoom/MainDim";

function DimRoom() {
  return (
    <div className="flex gap-10  flex-col ">
      <div className="flex justify-center flex-col items-center">
        <div className=" text-[25px] font-bold mb-6">
          Bring your vision to life with our 2D room design tool.
        </div>
        <p>
          Input your room dimensions, and Virtual-ID will generate a detailed
          layout, allowing you to experiment with various arrangements of room
          accessories.
        </p>
      </div>
      <MainDim />
    </div>
  );
}

export default DimRoom;
