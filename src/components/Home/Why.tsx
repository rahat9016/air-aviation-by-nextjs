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
            <div className="container px-mobileContainer mt-10 xl:mt-28 xl:px-0 flex  gap-6">
                {
                    WhyData.map((data, index) => <div key={index} className={`bg-primary text-white py-10 xl:py-20 px-5 xl:px-10 text-center rounded-[15px] h-auto  basis-[33.33%]`}>
                        <h1 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-10">{data.title}</h1>
                        <p className="text-xs md:text-sm xl:text-base">{readFullDesc[index] ? data?.desc : data?.desc?.split(' ').slice(0, 30)?.join(' ')} <button onClick={() =>toggleReadDesc(index)} className=" font-medium text-sm text-white bg-secondary px-3 py-2 rounded-full block mx-auto mt-4" >{readFullDesc[index] ? 'Read less': 'Read more'}</button></p>
                    </div>)
                }
                
            </div>
            <img src={location_} alt="" className="mx-auto"/>
        </div>
    );
};

export default Why;