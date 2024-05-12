import Common_Hero from "../components/Common_Hero";
import { ReactHelmet } from "../components/common/Helmet";
import { Layout } from "../components/common/Layout";
import bg from "../assets/about-us-banner.jpg";
import about_circle from "../assets/circle_about.png";
import { aboutData } from "../data/about";
import { goToTop } from "../utility/goToTop";
import Span from "../components/Span";
const About = () => {
  goToTop();
  return (
    <Layout>
      <ReactHelmet title={"About Us"} />
      <Common_Hero bg={bg} />
      <div className="mt-0 lg:-mt-80 bg-white shadow-3xl container px-mobileContainer xl:px-0 mb-8 lg:mb-10 xl:mb-5 py-5 lg:py-16 xl:pb-28">
        <div className="pt-10 xl:pt-20 text-center  bg-[center_right_450px] bg-no-repeat"
          style={{ backgroundImage: `url(${about_circle})` }}
        >
          <h1 className="text-primary font-bold text-2xl xl:text-[40px] mb-[22px] font-poppins">
            About Us
          </h1>
          <p className="text-primary font-medium mb-[19px] text-base font-inter">
            Sky is not the limit, we are ready when you are
          </p>
          <Span />
        </div>
        <div className="xl:px-48 text-center">
          <div
          
          >
            <h1 className="font-bold text-2xl text-primary font-inter my-5 lg:my-20">
              <span className="font-normal">WE ARE</span> KM AIR AVIATION LTD.
            </h1>
          </div>
          <p className="text-black text-justify lg:text-center font-medium font-inter text-sm leading-7">
            KM Air Aviation Ltd. is a leading name in the aviation industry,
            committed to providing top-notch air travel experiences for
            passengers around the world. As a premier airline, we pride
            ourselves on our dedication to safety, comfort, and convenience. Our
            story began with a vision to transform air travel into an
            unforgettable journey, and today, we continue to pursue excellence
            in everything we do.
          </p>
        </div>
      </div>
      <div className="container px-mobileContainer xl:px-0 flex flex-col lg:flex-row mb-[136px] gap-5">
        <div className="lg:basis-[60%] h-[500px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Mn82ya2Mx3U?autoplay=1"
            title="KM Air Aviation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="basis-[40%] h-[500px] bg-white  drop-shadow-md px-10 ">
          <div
            // style={{ backgroundImage: `url(${double_circle})` }}
            className=" flex justify-center w-full bg-no-repeat bg-[80%] text-right-top bg-[length:100px_100px]   lg:pt-10"
          >
            <h1 className="font-bold lg:text-2xl text-primary text-center">
              WHY CHOOSE US
            </h1>

          </div>
          <Span className="my-5"/>

          <p className="text-black text-xs text-center font-medium mx-auto font-inter capitalize max-w-[18rem]">
          Safety is the driving force behind everything we do at Trucky Transportation Company.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 my-7 gap-7 ">
            {aboutData.map((data, index) => (
              <div key={index} className="flex justify-center items-center " >
                <div className="bg-primary-extra-light text-center  rounded-full w-32  h-32 flex justify-center items-center ">
                <div className="flex flex-col items-center justify-center">
                  <img src={data?.img} alt="KM" className="mx-auto mb-3" />
                  <h2 className="text-center text-primary font-bold font-inter text-sm">
                    {data?.title}
                  </h2>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
