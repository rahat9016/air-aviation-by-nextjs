// OurFeatures_Card.jsx

// import { useNavigate } from "react-router-dom";
import Span from "../Span";
import "./style.css"

// ... (imports and interfaces)

interface IServiceDataType {
  id: number;
  img: string;
  bg_img?: string;
  icon?: string;
  title: string;
  sub_title: string;
  desc: string;
  location: string;
}

const OurFeatures_Card = ({ service }: { service: IServiceDataType }) => {
  // const navigate = useNavigate();

  return (
    <div className="basis-3/5 hover:basis-4/5 duration-500 transition-all bg-cover  bg-no-repeat relative   h-[320px] lg:min-h-[300px]  cursor-pointer group " style={{ backgroundImage: `url(${service.img})` }}>
      <div className=" group " >
        {/* Gradient Mask */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-gray-500 hover:h-full block group-hover:block"></div>

        {/* Text Content */}
        <div className="absolute bottom-4 left-4 text-white">
          <h5 className="text-white">{service.title}</h5>
          <div className="flex">
            <Span margin="m-0" />
          </div>
          <h1 className="uppercase">{service.sub_title}</h1>
        </div>
      </div>

      {/* Clickable Area */}
      {/* <div
        className="absolute inset-20 z-10"
        onClick={() => navigate(`/services/${service.id}`)}
      ></div> */}
    </div>
  );
};

export default OurFeatures_Card;
