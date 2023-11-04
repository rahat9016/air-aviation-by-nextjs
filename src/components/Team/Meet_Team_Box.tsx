import { meatTeamData } from "../../data/team";
import Meet_Team_Card from "./Meet_Team_Card";

const Meet_Team_Box = () => {
    return (
        <div className="my-10 lg:mb-20 pb-10">
            <div className="text-center mb-10">
                <h1 className="font-poppins text-primary text-xl lg:text-[32px] font-bold mb-[5px]">MEET OUR TEAM</h1>
                <p className="text-xs lg:text-sm text-primary font-poppins">We work together for success</p>
            </div>
            <div className="grid grid-cols-1 xlg:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6 ">
                {meatTeamData?.map((data) => (
                    <Meet_Team_Card data={data} />
                ))}
            </div>
        </div>
    );
};

export default Meet_Team_Box;
