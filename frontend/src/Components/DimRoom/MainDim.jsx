function MainDim() {
  return (
    <div className="w-[80vw] h-[100vh]  grid grid-rows-[auto_2fr] grid-cols-[auto_1fr]  gap-5   ml-[23px] mr-[23px] mb-[70px]">
      <div className=" bg-red-300 flex justify-between rounded-lg">
        <div></div>
        <button className="bg-blue">Set</button>
      </div>
      <div className="w-[35vw] bg-yellow-300 row-span-2 rounded-lg "></div>
      <div className="w-[55vw]  bg-green-300 rounded-lg"></div>
    </div>
  );
}

export default MainDim;
