
const Common_Hero = ({ bg, title, desc }: {bg?: string; title?: string; desc?: string}) => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`
        }}
        className='w-full bg-no-repeat bg-cover bg-center h-[180px] sm:h-[240px] md:h-[260px] lg:h-[380px] xl:h-[675px] flex items-center justify-center text-center'
        >
            <div>
                {title && <h1 className="text-primary font-inter font-bold text-4xl mb-4">{title}</h1> }
                {desc && <p className="text-primary font-inter font-normal">{desc}</p> }
            </div>
            
        </div>
    );
};

export default Common_Hero;