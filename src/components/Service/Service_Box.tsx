import { service_data } from "../../data/service";
import Service_Card from "./Service_Card";
import vector_Bg from "../../assets/vector_bg.png";
import Span from "../Span";
const Service_Box = () => {
    return (
        <div className="container px-mobileContainer xl:px-0 bg-white pt-12 drop-shadow-2xl">
            <div
                className=" bg-no-repeat bg-top mb-20  bg-contain"
                style={{ backgroundImage: `url(${vector_Bg})` }}
            >
                <div className="text-center py-10 md:py-16 lg:pb-24 lg:pt-22 ">
                    <h2 className="font-inter text-base lg:text-2xl leading-10 text-[#3B5C77]">We’ve got a full range of</h2>
                    <h1 className="font-inter text-lg lg:text-[32px] font-bold text-[#3B5C77] leading-normal
                    mb-6">Transportation & Logistics Services</h1>
                    <Span />
                </div>
                {service_data?.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className={`mt-2 xl:mt-8 flex ${
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
