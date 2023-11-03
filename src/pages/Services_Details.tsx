import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/service_hero_bg.png"
import { useLocation } from "react-router-dom";
import { service_data } from "../data/service";
import { NotFound } from "./NotFound";
import vector_Bg  from "../assets/vector_bg.png"
const Services_Details = () => {
    const { pathname } = useLocation();
    const path = pathname.split('/')[2]
    const service = service_data?.find(data => data.id.toString() == path)
    if(service === undefined) return <NotFound />
    return (
        <Layout>
        <ReactHelmet title={service?.title} />
          <Common_Hero bg={bg}  />
          <div className='mt-0 lg:-mt-28 bg-white shadow-3xl container px-mobileContainer xl:px-0 mb-8 lg:mb-10 xl:mb-20'>
                <div className="px-10 bg-no-repeat bg-top mb-20 pb-10"
                style={{ backgroundImage: `url(${vector_Bg})` }}>
                <div className="text-center pt-28">
                    <h1 className="font-inter font-bold text-2xl text-primary">{service?.title}</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-28">
                    <div className="bg-primary p-10 text-center rounded-l-[15px]">
                    <h1 className="font-inter font-bold text-2xl text-white mb-8">{service?.title}</h1>
                    <p className="text-white">{service?.desc}</p>
                    </div>
                    <div>
                        <img src={service.img} alt="KM" className="w-full h-full" />
                    </div>
                </div>
                </div>
          </div>    
      </Layout>
    );
};

export default Services_Details;