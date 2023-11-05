import { service_data } from "../../data/service";
import Service_Card from "./Service_Card";
import vector_Bg from "../../assets/vector_bg.png";
const Service_Box = () => {
    return (
        <div className="container px-mobileContainer xl:px-0 bg-white drop-shadow-2xl">
            <div
                className=" bg-no-repeat bg-top mb-20  bg-contain"
                style={{ backgroundImage: `url(${vector_Bg})` }}
            >
                <div className="text-center py-10 md:py-16 lg:py-24 xl:py-40 ">
                    <h2 className="font-inter text-base lg:text-2xl leading-10 text-[#3B5C77]">We’ve got a full range of</h2>
                    <h1 className="font-inter text-lg lg:text-[32px] font-bold text-[#3B5C77] leading-normal
                    
                    ">Transportation & Logistics Services</h1>
                    <span className="block w-[35px] h-[3px] bg-secondary mx-auto rounded-full mt-7"></span>
                </div>
                {service_data?.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className={`mt-8 xl:mt-8 flex ${
                                index % 2 == 0 ? "justify-start" : "justify-end"
                            }`}
                        >
                            <Service_Card
                                id={service?.id}
                                img={service?.img}
                                title={service.title}
                                desc={service.desc}
                                index={index}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Service_Box;
