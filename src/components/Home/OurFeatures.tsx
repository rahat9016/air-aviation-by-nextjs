import Span from "../Span";
import home_service_bg from "../../assets/our-service-bg.jpg"
import OurFeatures_Card from "./OurFeatures_Card";
import { featureData } from "../../data/feature";
import location_ from "../../assets/location_.png"

const Our_Features = () => {
  return (
    <div className=" mt-8 xl:mt-20">
      <div  className={`text-center mb-10 bg-no-repeat bg-top bg-contain`} 
      
      style={{
        backgroundImage: `url${home_service_bg}`
      }}>
        <h4 className="text-primary font-semibold mb-3 text-base font-poppins">WHAT WE PROVIDE FOR CLIENTS</h4>
        <h1 className="text-xl lg:text-5xl font-bold font-poppins text-primary uppercase mb-3">
          OUR Features
        </h1>
        <div className="my-2">
          <Span />
        </div>
      </div>
      <div className="container px-mobileContainer xl:px-0 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-4  ">
        {featureData?.slice(0, 4).map((service, index) => {
          return <OurFeatures_Card key={index} service={service} />;
        })}
      </div>
      <img src={location_} alt="" className="mx-auto"/>

    </div>
  );
};

export default Our_Features;
