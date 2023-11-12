interface IMeetTeamType {
  profile: string;
  position: string;
  name: string;
}
const Meet_Team_Card = ({ data }: { data: IMeetTeamType }) => {
  return (
    <div className="bg-[#E9F3FA]  lg:h-[240px] xl:h-[267px] xl:w-full h-full flex  items-center rounded-[15px] overflow-hidden relative group cursor-pointer">
      <img
        src={data?.profile}
        alt="KM"
        className="w-full lg:h-[240px] xl:h-[267px]"
      />
      <div className="w-full h-[58px] md:h-[70px] bg-[rgba(59,91,120,0.6)] absolute left-0 bottom-0  duration-300 px-3 py-2 ">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-[12px]  md:text-sm font-medium font-poppins leading-none uppercase">
            {data.name}
          </h1>
          <p className="text-white text-[8px] text-center font-poppins tracking-[.15rem] uppercase ">
            {data.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet_Team_Card;
