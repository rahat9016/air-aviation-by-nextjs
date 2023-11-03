import { service_data } from "../../data/service";
import Home_Service_Card from "./Home_Service_Card";

const Home_Service = () => {
    return (
        <div className=" mt-10 xl:mt-20">
            <div className="text-center mb-10">
                <h4 className="text-primary">WHAT WE PROVIDE FOR CLIENTS</h4>
                <h1 className="text-3xl font-bold">OUR SERVICES</h1>
            </div>
            <div className="container px-mobileContainer xl:px-0 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-4 gap-4 ">
                {service_data?.slice(0,4).map((service, index) => {
                    return <Home_Service_Card key={index} service={service} />;
                })}
            </div>
        </div>
    );
};

export default Home_Service;
