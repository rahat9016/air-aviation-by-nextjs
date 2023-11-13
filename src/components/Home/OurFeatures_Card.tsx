// OurFeatures_Card.jsx

import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden h-[320px] lg:min-h-[300px] cursor-pointer feature-detail" onClick={() => navigate(``)}>
      <div className="w-full h-full bg-no-repeat bg-center bg-cover group relative" style={{ backgroundImage: `url(${service.img})` }}>
        <div className="bottom-text space-y-1">
          <h5 className="text-white text-sm ">Ground</h5>
          <div className="flex">
            <Span margin="m-0" />
          </div>
          <h1 className="uppercase text-white text-base font-bold ">Handling</h1>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures_Card;
