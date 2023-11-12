import Span from "./Span";

<<<<<<< HEAD
const Common_Hero = ({ bg, title, desc, isShowSpan = false }: {bg?: string; title?: string; desc?: string; isShowSpan?: boolean}) => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`
        }}
        className='w-full bg-no-repeat bg-cover bg-center h-[180px] sm:h-[240px] md:h-[260px] lg:h-[380px] xl:h-[591px] flex justify-center text-center'
        >
            <div className="mt-10 xl:mt-20 px-mobileContainer xl:px-0">
                {title && <h1 className="text-primary font-inter font-bold text-xl md:text-4xl mb-4">{title}</h1> }
                {desc && <p className="text-primary font-inter font-normal mb-2 md:mb-5 text-xs md:text-base">{desc}</p> }
                {isShowSpan && <Span />}
            </div>
            
        </div>
    );
=======
const Common_Hero = ({
  bg,
  title,
  desc,
  isShowSpan = false,
}: {
  bg?: string;
  title?: string;
  desc?: string;
  isShowSpan?: boolean;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="w-full bg-no-repeat bg-cover bg-center h-[180px] sm:h-[240px] md:h-[260px] lg:h-[380px] xl:h-[675px] flex justify-center text-center"
    >
      <div className="mt-10 xl:mt-20 px-mobileContainer xl:px-0">
        {title && (
          <h1 className="text-primary font-poppins font-bold text-xl md:text-4xl mb-4">
            {title}
          </h1>
        )}
        {desc && (
          <p className="text-primary font-inter font-normal mb-2 md:mb-5 text-xs md:text-base">
            {desc}
          </p>
        )}
        {isShowSpan && <Span />}
      </div>
    </div>
  );
>>>>>>> origin/safia/dev
};

export default Common_Hero;
