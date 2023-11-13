import { useNavigate } from "react-router-dom";

interface IServiceDataType {
    id: number,
    img: string,
    bg_img?: string,
    icon?: string,
    title: string,
    sub_title: string,
    desc: string,
    location: string,
}
const Home_Service_Card = ({ service }: {service: IServiceDataType}) => {
    const navigate = useNavigate();
    return (
        <div className="relative rounded-[15px] overflow-hidden h-[320px] lg:min-h-[450px] cursor-pointer" onClick={()=>navigate(`/services/${service.id}`)} >
            <div className="w-full h-full bg-no-repeat bg-center bg-cover group duration-500 transition-all hover:scale-110 " style={{ backgroundImage: `url(${service.img})` }}>
            <div className="w-full h-full duration-300 bg-[rgba(59,92,119,0.50)] transition-all  group-hover:bg-[rgba(234,36,78,0.8)] flex flex-col items-center justify-center text-center">
                <img src={service.icon} alt="KM" className="mb-8 duration-500 transition-all ease-in-out hidden group-hover:block" />
                <h1 className="text-white font-bold text-xl lg:text-2xl mb-5 capitalize">{service.title}</h1>
               <div className="group  ">
               <button className="text-white font-medium text-sm duration-300 transition-all ease-in lg:text-base  hidden group-hover:block capitalize ">view Details</button>
                <hr className=" text-center group-hover:w-8  group-hover:border-2 border-white " />
               </div>
            </div>
            </div>
        </div>
    );
};

export default Home_Service_Card;