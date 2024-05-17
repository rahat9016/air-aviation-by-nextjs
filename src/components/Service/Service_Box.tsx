import { service_data } from "../../data/service";
import Service_Card from "./Service_Card";
import vector_Bg from "../../assets/vector_bg.png";
import Span from "../Span";
const Service_Box = () => {
  return (
    <div className="container px-mobileContainer xl:px-0 bg-white pt-12 lg:mb-[136px] drop-shadow-lg">
      <div
        className=" bg-no-repeat bg-top mb-20  bg-contain"
        style={{ backgroundImage: `url(${vector_Bg})` }}
      >
        <div className="text-center py-10 md:pt-16 md:pb-20 lg:pb-28 lg:pt-22 ">
          <h2 className="font-inter text-base lg:text-2xl leading-10 text-blue">
            We’ve got a full range of
          </h2>
          <h1
            className="font-poppins text-lg lg:text-[32px] font-bold text-blue leading-normal
                    mb-4"
          >
            Transportation & Logistics Services
          </h1>
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
