import { teamData } from "../../data/team";
import Team_Card from "./Team_Card";

const Team_Box = () => {
  return (
    <div className="py-10 lg:py-36 flex flex-col items-center  ">
      {teamData.map((team, index) => (
        <Team_Card team={team} index={index} />
      ))}
    </div>
  );
};

export default Team_Box;
