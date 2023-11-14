import { useNavigate } from "react-router-dom";

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
const Home_Service_Card = ({ service }: { service: IServiceDataType }) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative rounded-[15px] overflow-hidden h-[320px] lg:min-h-[450px] cursor-pointer"
      onClick={() => navigate(`/services/${service.id}`)}
    >
      <div
        className="w-full h-full bg-no-repeat bg-center bg-cover group transition delay-150 duration-500 ease-in-out  hover:scale-110 "
        style={{ backgroundImage: `url(${service.img})` }}
      >
        <div className="w-full h-full duration-300 bg-[rgba(59,92,119,0.50)] transition-all    group-hover:bg-[rgba(234,36,78,0.8)] flex flex-col items-center justify-center text-center">
          <img
            src={service.icon}
            alt="KM"
            className="mb-8 duration-500 transition-all ease-in-out transform animate-[wiggle_1s_ease-in-out_infinite] scale-0 group-hover:scale-105"
          />
          <h1 className="text-white font-bold text-xl lg:text-2xl mb-5 transition delay-150 duration-500 ease-in-out capitalize">
            {service.title}
          </h1>
          <div className="group  ">
            {/* <button className="text-white font-medium text-sm duration-300 transition-all ease-in lg:text-base  hidden group-hover:block capitalize ">view Details</button>
                <hr className=" text-center group-hover:w-8  group-hover:border-2 border-white s" /> */}
            {/* <button
                    className="group group-hover:text-white  px-6 py-2 hidden group-hover:block after:bg-primary mx-auto  text-xs lg:text-sm font-semibold capitalize font-inter lg:mt-5 mb-5"
                    
                >
view details            
      <span className="w-[50%] hover:w-full h-[1.5px] duration-300 bg-primary block"></span>
                </button> */}
            <button className="group/edit delay-150 duration-500 scale-0 ease-in-out   group-hover:scale-105  group-hover:text-white px-6 py-2  after:bg-primary mx-auto text-xs lg:text-sm font-semibold capitalize font-inter lg:mt-5 mb-5">
              view details
              <span className="  w-[30%] group-hover/edit:w-full h-[1.5px] duration-300 bg-primary block"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Service_Card;
