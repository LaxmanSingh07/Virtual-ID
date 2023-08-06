import React from "react";
import HeroSection from "../Components/Hero/HeroSection";
import MiddleOne from "../Components/MiddleOne";
import ToARRoom from "../Components/ToARRoom";
import To2DRoom from "../Components/To2DRoom";

function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <MiddleOne />
      </div>
      <div className="flex flex-col p-28 mx-10 space-y-32">
        <ToARRoom />
        <To2DRoom />
      </div>
      {/* Hero-End */}
      <div class="flex justify-center text-2xl font-bold my-10">
        Transform your space with ease. Start designing now!
      </div>
    </>
  );
}

export default Home;