import coma from "../../assets/coma.png";
import profile from "../../assets/profile.png";
interface ITeamData {
    profile: string;
    comment: string;
    position: string;
    name?: string | undefined;
}

const Team_Card = ({ team, index }: { team: ITeamData; index: number }) => {
    return (
        <div
            className={`w-full lg:w-[85%] flex flex-col items-center  mb-10 lg:mb-48 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } `}
        >
            <div className="basis-full lg:basis-[35%]">
                <div className="md:w-[280px] lg:w-[352px] rounded-[5px]">
                    <img
                        src={team?.profile === "" ? profile : team?.profile}
                        alt="KM"
                        className={ `mx-auto ${index % 2 === 0 ?"":"md:ml-auto" }  w-7/12 md:w-[180px] lg:w-[280px] rounded-[5px]`}
                    />
                </div>
            </div>
            <div className="basis-full lg:basis-[65%]">
                <img src={coma} alt="km" />
                <p
                    className={`text-[#424242] mt-2 text-sm  font-poppins text-left`}
                >
                    {team?.comment}
                </p>
                <h2
                    className={`font-medium font-poppins text-lg lg:text-2xl text-[#514C4D] mt-2 lg:mt-5 mb-1 `}
                >
                    {team?.name}
                </h2>
                <h3
                    className={`text-[#514C4D] text-[10px]  font-poppins lg:text-[11px]  tracking-[.15rem] leading-none uppercase `}
                >
                    {team?.position}
                </h3>
            </div>
        </div>
    );
};

export default Team_Card;
