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
    <div className="font-poppins group basis-3/5 hover:basis-4/5 duration-500 transition-all bg-cover  bg-no-repeat relative   h-[320px] lg:min-h-[300px]  cursor-pointer group " style={{ backgroundImage: `url(${service.img})` }}>
      <div >
        {/* Gradient Mask */}
        <div className="absolute bottom-0 left-0 w-full h-1/2  bg-gradient-to-b from-transparent to-black transition-all duration-500 group-hover:bg-[#204868]    group-hover:opacity-60 group-hover:h-full"></div>

        {/* Text Content */}
        <div className="absolute bottom-4 left-4 text-white group-hover:space-y-2 space-y-1 group-hover:top-[40%] group-hover:right-[5%] transition-all duration-500 ease-in-out group-hover:text-center">
          <h5 className="text-white uppercase  text-[14px]">{service.title}</h5>
          <div className="flex group-hover:justify-center  ">
          <Span margin="m-0" className="group-hover:hidden"  />
          <Span margin="m-0" className="group-hover:block -hover:transform group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out -translate-x-full group-hover:translate-x-0" />
            
          
          </div>
          <h1 className="uppercase  font-semibold text-[16px] group-hover:text-[18px]">{service.sub_title}</h1>
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
