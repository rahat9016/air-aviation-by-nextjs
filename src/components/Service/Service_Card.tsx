const Service_Card = ({ img, title, desc, index }: {img: string; title: string; desc: string; index: number}) => {
    return (
        <div className={`w-full lg:w-[62%] flex flex-col bg-primary rounded-[15px]  ${index%2==0 ? "md:flex-row": "md:flex-row-reverse"} `}>
            <div className="basis-3/5 flex flex-col items-center justify-center p-4 text-center text-white">
                <h1 className="text-lg lg:text-2xl font-bold mb-4">{title}</h1>
                <p className="text-sm lg:text-base">{desc}</p>
            </div>
            <div className="basis-2/5">
                <img src={img} alt="KM" className="h-full w-full"/>
            </div>
        </div>
    );
};

export default Service_Card;