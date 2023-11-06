import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/service-details-banner.webp"
import { useLocation } from "react-router-dom";
import { service_data } from "../data/service";
import { NotFound } from "./NotFound";
import vector_Bg  from "../assets/vector_bg.png"
import { goToTop } from '../utility/goToTop';
const Services_Details = () => {
    goToTop()
    const { pathname } = useLocation();
    const path = pathname.split('/')[2]
    const service = service_data?.find(data => data.id.toString() == path)
    if(service === undefined) return <NotFound />
    return (
        <Layout>
        <ReactHelmet title={service?.title} />
          <Common_Hero bg={bg}  />
          <div className='px-mobileContainer mt-0 lg:-mt-28 bg-white drop-shadow-md container  mb-8 lg:mb-10 xl:mb-20'>
                <div className="bg-no-repeat bg-top bg-contain mb-20 pb-10"
                style={{ backgroundImage: `url(${vector_Bg})` }}>
                <div className="text-center pt-8 lg:pt-28">
                    <h1 className="font-inter font-bold text-2xl text-primary">{service?.title}</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-28">
                    <div className="bg-primary p-10 text-center ">
                    <h1 className="font-inter font-bold text-xl lg:text-2xl text-white mb-3 lg:mb-8">{service?.title}</h1>
                    <p className="text-white text-sm lg:text-base">{service?.desc}</p>
                    </div>
                    <div>
                        <img src={service?.img} alt="KM" className="w-full h-full" />
                    </div>
                </div>
                </div>
          </div>    
      </Layout>
    );
};

export default Services_Details;