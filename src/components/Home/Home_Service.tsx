import { service_data } from "../../data/service";
import Span from "../Span";
import Home_Service_Card from "./Home_Service_Card";
import home_service_bg from "../../assets/our-service-bg.jpg"

const Home_Service = () => {
  return (
    <div className=" mt-8 xl:mt-20">
      <div  className={`text-center mb-10 bg-no-repeat bg-top bg-contain`} 
      
      style={{
        backgroundImage: `url${home_service_bg}`
      }}>
        <h4 className="text-primary font-semibold mb-3 text-base font-poppins">WHAT WE PROVIDE FOR CLIENTS</h4>
        <h1 className="text-xl lg:text-5xl font-bold font-poppins text-primary uppercase mb-3">
          OUR SERVICES
        </h1>
        <div className="my-2">
          <Span />
        </div>{" "}
      </div>
      <div className="container px-mobileContainer xl:px-0 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {service_data?.slice(0, 4).map((service, index) => {
          return <Home_Service_Card key={index} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Home_Service;
