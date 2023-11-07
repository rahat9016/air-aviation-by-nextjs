import coma from "../../assets/coma.png"
import profile from "../../assets/profile.png"
interface ITeamData {
    profile: string,
    comment: string,
    name: string,
    position: string,

}

const Team_Card = ({ team, index }: { team: ITeamData, index: number }) => {
    return (
        <div className={`w-full lg:w-[80%] flex flex-col items-center mb-10 lg:mb-48 last:mb-0 gap-3 lg:gap-5 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} `}>
            <div className='basis-full lg:basis-[40%] '>
                <div className="md:w-[280px] lg:w-[352px] h-[180px] md:h-[280px] lg:h-[352px] flex items-center justify-center rounded-[5px]">
                    <img src={team?.profile === "" ? profile : team?.profile} alt='KM' className="mx-auto w-4/12 md:w-[180px] lg:w-[221px]" />
                </div>
            </div>
            <div className='basis-full lg:basis-[60%]'>
                <img src={coma} alt="km" />
                <p className={`text-[#424242] mt-2 text-sm lg:text-base  font-poppins text-justify`}>{team?.comment}</p>
                <h2 className={`font-bold font-poppins text-lg lg:text-2xl text-[#514C4D] mt-2 lg:mt-5 mb-1 ${index % 2 === 0 ? "" : "text-right"}`}>{team?.name}</h2>
                <h3 className={`text-[#514C4D] text-[10px]  font-poppins lg:text-[11px]  tracking-[.15rem] leading-none ${index % 2 === 0 ? "" : "text-right"}`}>{team?.position}</h3>
            </div>
        </div>
    );
};

export default Team_Card;