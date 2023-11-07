
import { teamData } from '../../data/team';
import Team_Card from './Team_Card';
import bg from "../../assets/vector_bg_2.png"

const Team_Box = () => {
    return (
        <div className=' py-10 lg:py-20'>
            <div
            className=" bg-no-repeat bg-top  bg-contain flex flex-col items-center"
            style={{ backgroundImage: `url(${bg})` }}
            >

            {
                teamData.map((team, index) => <Team_Card team={team} index={index} />)
            }
            </div>
        </div>
    );
};

export default Team_Box;