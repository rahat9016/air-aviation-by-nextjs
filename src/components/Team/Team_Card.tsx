import coma from "../../assets/coma.png"
interface ITeamData {
    profile: string,
    comment: string,
    name: string,
    position: string,

}

const Team_Card = ({ team, index }: { team: ITeamData, index: number}) => {
    return (
        <div className={`w-full lg:w-[90%] flex mb-20 gap-10 ${index % 2 === 0 ? "flex-row": "flex-row-reverse"} `}>
            <div className='basis-full lg:basis-1/2'>
                <img src={team?.profile} alt='KM' />
            </div>
            <div className='basis-full lg:basis-1/2'>
                <img src={coma} alt="km" />
                <p className={`text-[#424242] mt-2 `}>{team?.comment}</p>
                <h2 className={`font-bold text-2xl text-[#514C4D] mt-5 mb-1 ${index % 2 === 0 ? "": "text-right"}`}>{team?.name}</h2>
                <h3 className={`text-[#514C4D] ${index % 2 === 0 ? "": "text-right"}`}>{team?.position}</h3>
            </div>
        </div>
    );
};

export default Team_Card;