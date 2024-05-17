import { useNavigate } from "react-router-dom";

const Service_Card = ({
  id,
  img,
  title,
  desc,
  index,
}: {
  id: number;
  img: string;
  title: string;
  desc: string;
  index: number;
}) => {
  const words = desc.split(" ");
  const displayText = words.slice(0, 30).join(" ");
  const navigate = useNavigate();
  return (
    <div
      className={`w-full lg:w-[62.5%] flex flex-col bg-blue  overflow-hidden p-4  ${
        index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
      } `}
    >
      <div className="basis-3/5 flex flex-col items-center justify-center  px-12  text-center text-white">
        <h1 className="text-lg font-inter uppercase lg:text-2xl font-bold  ">
          {title}
        </h1>
        <p className="text-sm font-inter font-extralight mt-3 mb-4 ">
          {displayText}
        </p>
        <button
          onClick={() => navigate(`/services/${id}`)}
          className="bg-secondary text-white px-4 py-2 font-semibold rounded-[10px] outline-none my-3 "
        >
          Read More
        </button>
      </div>
      <div className="basis-2/5">
        <img src={img} alt="KM" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Service_Card;
