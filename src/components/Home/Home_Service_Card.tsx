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
            <div className="w-full h-full bg-no-repeat bg-center bg-cover group" style={{ backgroundImage: `url(${service.img})` }}>
            <div className="w-full h-full duration-300 bg-[rgba(59,92,119,0.50)] group-hover:bg-[rgba(59,92,119,0.85)]  flex flex-col items-center justify-center text-center">
                <img src={service.icon} alt="KM" className="mb-8 duration-300 hidden group-hover:block" />
                <h1 className="text-white font-bold text-xl lg:text-2xl mb-5">{service.title}</h1>
                <h3 className="text-white font-medium text-sm lg:text-base">{service.sub_title}</h3>
            </div>
            </div>
        </div>
    );
};

export default Home_Service_Card;