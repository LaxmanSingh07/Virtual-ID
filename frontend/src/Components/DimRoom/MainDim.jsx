function MainDim() {
  return (
    <div className="grid grid-rows-[auto_2fr] grid-cols-[auto_1fr]  gap-5   ml-[23px] mr-[23px] mb-[70px]">
      <div className="w-[58%] flex flex-col justify-between rounded-lg">
        <form className="h-[18%]">
          <label></label>
          <input type="text" className="" />
          <button type="submit" className="">
            set
          </button>
        </form>
        <div className="h-[80%] bg-yellow-300 rounded-lg"></div>
      </div>

      <div className="w-[30%] bg-yellow-100 rounded-lg"></div>
    </div>
  );
}

export default MainDim;
