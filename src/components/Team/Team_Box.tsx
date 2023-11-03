
import { teamData } from '../../data/team';
import Team_Card from './Team_Card';

const Team_Box = () => {
    return (
        <div className='container px-mobileContainer xl:px-20 py-20 bg-white '>
            {
                teamData.map((team, index) => <Team_Card team={team} index={index} />)
            }
        </div>
    );
};

export default Team_Box;