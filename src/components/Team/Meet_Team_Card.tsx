interface IMeetTeamType {
    profile: string;
    position: string;
    name: string;
}
const Meet_Team_Card = ({ data }: { data: IMeetTeamType }) => {
    return (
        <div className="bg-[#E9F3FA] h-[267px] flex items-center rounded-[15px] overflow-hidden relative group cursor-pointer">
            <img src={data?.profile} alt="KM" className="w-[96px] mx-auto" />
            <div className="w-full h-[70px] bg-[rgba(59,91,120,0.6)] absolute left-0 bottom-0  duration-300 px-3 py-2 ">
                <h1 className="text-white text-[15px] font-medium font-poppins leading-loose uppercase">
                    {data.name}
                </h1>
                <p className="text-white text-[9px] font-poppins tracking-[.15rem]">
                    {data.position}
                </p>
            </div>
        </div>
    );
};

export default Meet_Team_Card;
