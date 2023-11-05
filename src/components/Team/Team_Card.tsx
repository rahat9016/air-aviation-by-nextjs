import coma from "../../assets/coma.png"
interface ITeamData {
    profile: string,
    comment: string,
    name: string,
    position: string,

}

const Team_Card = ({ team, index }: { team: ITeamData, index: number}) => {
    return (
        <div className={`w-full lg:w-[90%] flex flex-col items-center mb-52  gap-5 lg:gap-10 ${index % 2 === 0 ? "md:flex-row": "md:flex-row-reverse"} `}>
            <div className='basis-full lg:basis-1/2'>
                <img src={team?.profile} alt='KM' className="mx-auto w-4/12 md:w-[180px] lg:w-[221px]" />
            </div>
            <div className='basis-full lg:basis-1/2'>
                <img src={coma} alt="km"/>
                <p className={`text-[#424242] mt-2 text-sm lg:text-base  font-poppins text-justify`}>{team?.comment}</p>
                <h2 className={`font-bold font-poppins text-lg lg:text-2xl text-[#514C4D] mt-2 lg:mt-5 mb-1 ${index % 2 === 0 ? "": "text-right"}`}>{team?.name}</h2>
                <h3 className={`text-[#514C4D] text-[10px]  font-poppins lg:text-[11px]  tracking-[.15rem] leading-none ${index % 2 === 0 ? "": "text-right"}`}>{team?.position}</h3>
            </div>
        </div>
    );
};

export default Team_Card;