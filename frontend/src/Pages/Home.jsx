import HeroSection from "../Components/Hero/HeroSection";
import MiddleOne from "../Components/MiddleOne";
import ToARRoom from "../Components/ToARRoom";
import To2DRoom from "../Components/To2DRoom";

function Home() {
  return (
    <>
      <div className="bg-hero-image bg-cover bg-center  mr-4 md:h-[550px] md:mx-8 " >
        <HeroSection />
      </div>
      <div >
        <MiddleOne />
      </div>
      <div className="flex flex-col p-2 md:p-20 m-10 space-y-32">
        <ToARRoom />
        <To2DRoom />
      </div>
      {/* Hero-End */}
      <div className="flex justify-center text-center text-white text-xl md:text-2xl font-bold pb-8 font-mono">
        Transform your space with ease. Start designing now!
      </div>
    </>
  );
}

export default Home;
