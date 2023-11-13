import Span from "../Span";
import { WhyData } from "../../data/data";
import location_ from "../../assets/location_.png"
import { useState } from "react";
const Why = () => {
    const [readFullDesc, setReadFullDesc] = useState<boolean[]>([])



    const toggleReadDesc = (index: number) => {
        setReadFullDesc((prev) => {
            console.log(prev)
            const updated = [...prev]
            updated[index] = !updated[index]
            return updated
        })

    }

    return (
        <div>
            <div className="container px-mobileContainer mt-10 xl:mt-28 xl:px-0 flex flex-col md:flex-row gap-6">
                {
                    WhyData.map((data, index) => <div key={index} className={`  text-white   text-center  md:basis-[33.33%] `}>
                        <div className="bg-gradient-to-b from-[#2A6B9E] to-primary py-10  rounded-[15px] xl:py-20 px-5 xl:px-10  md:min-h-[350px] xl:min-h-[403px] relative shadow-3xl">
                       
                        <h1 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-10">{data.title}</h1>
                        <div className="xl:-mt-5 mb-4">
                            <Span />
                        </div>
                        <p className="text-xs md:text-sm xl:text-base text-ellipsis">{readFullDesc[index] ? data?.desc : data?.desc?.split(' ').slice(0, 30)?.join(' ')}<span className={readFullDesc[index] ? "hidden" : " inline-block"}>...</span><button onClick={() =>toggleReadDesc(index)} className=" font-medium  text-white text-base  px-3 py-2 rounded-full inline-block mx-auto underline" >{readFullDesc[index] ? 'Read less': 'Read more'}</button></p>
                        
                        </div>
{           index ===1  &&            <img src={location_} alt="" className="mx-auto"/>
}                    </div>)
                }
                
            </div>
        </div>
    );
};

export default Why;