import { RiPlantLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";
import { FiDroplet } from "react-icons/fi";

function ArPageData() {
  const dataAr = [
    {
      icon: <RiPlantLine size={30} />,
      desc: "Immerse Yourself in Virtual Design",
    },
    {
      icon: <BsSun size={30} />,
      desc: "Personalized Interior Design Journey",
    },
    {
      icon: <FaTemperatureLow size={30} />,
      desc: "Seamless Room Integration",
    },
    {
      icon: <FiDroplet size={30} />,
      desc: "Collaborate and Share",
    },
  ];

  return (
    <>
      {dataAr.map((data) => (
        <div className="flex gap-3" key={data.desc}>
          <span>{data.icon}</span>
          <p>{data.desc}</p>
        </div>
      ))}
    </>
  );
}

export default ArPageData;
