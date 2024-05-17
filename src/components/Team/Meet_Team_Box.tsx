import { meatTeamData } from "../../data/team";
import Meet_Team_Card from "./Meet_Team_Card";

const Meet_Team_Box = () => {
  return (
    <div className="mb-10 mt-20 lg:mb-[136px] pb-16 lg:pb-48">
      <div className="text-center mb-10 flex justify-center items-center">
        <div className="w-[356px] bg-primary h-[0.5px] hidden md:block"></div>
        <div className="mx-5 pt-6">
          {" "}
          <h1 className="font-inter text-primary text-xl lg:text-[32px] font-bold mb-[5px]">
            MEET OUR TEAM
          </h1>
          <p className="text-xs lg:text-sm text-primary font-inter">
            We work together for success
          </p>
        </div>
        <div className="w-[356px] bg-primary h-[0.5px] hidden md:block"></div>
      </div>
      <div className="mx-auto">
        <div className="grid mx-auto grid-cols-2 xlg:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-6 ">
          {meatTeamData?.map((data) => (
            <Meet_Team_Card data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meet_Team_Box;
