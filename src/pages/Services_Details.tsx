import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/service-details-banner.jpg";
import { useLocation } from "react-router-dom";
import { service_data } from "../data/service";
import { NotFound } from "./NotFound";
import vector_Bg from "../assets/service_d_vector.svg";
import { goToTop } from "../utility/goToTop";
import Span from "../components/Span";
const Services_Details = () => {
  goToTop();
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  const service = service_data?.find((data) => data.id.toString() == path);
  if (service === undefined) return <NotFound />;
  return (
    <Layout>
      <ReactHelmet title={service?.title} />
      <Common_Hero bg={bg} />
      <div className="px-mobileContainer mt-0 lg:-mt-80 bg-white drop-shadow-md container mb-8 lg:mb-10 xl:mb-20 pt-10">
        <div
          className="bg-no-repeat bg-contain bg-[center_top_40px] mb-48 pb-6"
          style={{ backgroundImage: `url(${vector_Bg})` }}
        >
          <div className="text-center pt-8 lg:pt-[87px]">
            <h1 className="font-poppins uppercase font-bold text-3xl lg:text-[40px] text-primary mb-[19px]">
              {service?.title}
            </h1>
            <Span />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-20 ">
            <div className="bg-blue px-4 flex flex-col items-center  justify-center lg:px-[72px] text-center md:rounded-l-[15px]">
              <h1 className="font-inter font-bold text-xl  uppercase lg:text-2xl text-white mb-3 lg:mb-6">
                {service?.title}
              </h1>
              <p className="text-white font-inter text-sm lg:text-base font-extralight">
                {service?.desc}
              </p>
            </div>
            <div className="md:rounded-r-[15px] overflow-hidden">
              <img src={service?.img} alt="KM" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services_Details;
