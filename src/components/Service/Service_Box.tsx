import { service_data } from "../../data/service";
import Service_Card from "./Service_Card";
import vector_Bg from "../../assets/vector_bg.png";
const Service_Box = () => {
    return (
        <div className="container px-mobileContainer xl:px-0 bg-white shadow-3xl ">
            <div
                className=" bg-no-repeat bg-top mb-20 pb-10"
                style={{ backgroundImage: `url(${vector_Bg})` }}
            >
                <div className="text-center text-lg md:text-xl xl:text-2xl font-bold text-primary py-10 md:py-16 lg:py-24 xl:py-40">
                    <h1>
                        We’ve got
                        <br />
                        a full range of
                        <br />
                        transportation & logistics services
                    </h1>
                </div>
                {service_data?.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className={`mb-8 xl:mb-8 flex ${
                                index % 2 == 0 ? "justify-start" : "justify-end"
                            }`}
                        >
                            <Service_Card
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
