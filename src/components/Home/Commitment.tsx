import commitment from "../../assets/our_commitment_bg.png"
import CommentBox from "../common/CommentBox";

const Commitment = () => {
    return (
        <div style={{backgroundImage: `url(${commitment})`}} className="py-11 mt-10 xl:mt-28">
            <div className="container px-mobileContainer xl:px-0">
            <CommentBox title="OUR COMMITMENT" desc="SAFETY IS THE DRIVING FORCE BEHIND EVERYTHING WE DO AT TRUCKY TRANSPORTATION COMPANY. OUR CORE SAFETY VALUE OF “SAFETY IS EVERYONE’S JOB – ALL THE TIME” IS A COMMITMENT THAT STARTS AT THE TOP OF OUR EXECUTIVE MANAGEMENT TEAM WITH OUR FOUNDERS." className="text-white"/>
            </div>
        </div>
    );
};

export default Commitment;