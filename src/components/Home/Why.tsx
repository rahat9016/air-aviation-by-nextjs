import { WhyData } from "../../data/data";
import location_ from "../../assets/location_.png"
const Why = () => {
    return (
        <div>
            <div className="container px-mobileContainer mt-10 xl:mt-28 xl:px-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6">
                {
                    WhyData.map((data, index) => <div key={index} className="bg-primary text-white py-10 xl:py-20 px-5 xl:px-10 text-center rounded-[15px]">
                        <h1 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-10">{data.title}</h1>
                        <p className="text-xs md:text-sm xl:text-base">{data.desc}</p>
                    </div>)
                }
                
            </div>
            <img src={location_} alt="" className="mx-auto"/>
        </div>
    );
};

export default Why;