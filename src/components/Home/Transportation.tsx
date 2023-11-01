import transportation_bg from "../../assets/transport.png";
import CommentBox from "../common/CommentBox";
const Transportation = () => {
    return (
        <div
            style={{ backgroundImage: `url(${transportation_bg})` }}
            className="py-16 bg-no-repeat bg-cover bg-center mt-10 xl:mt-28"
        >
            <div className="container px-mobileContainer xl:px-0 flex justify-end">
                <CommentBox
                    title="MAKING TRANSPORTATION FAST AND SAFE"
                    desc="SAFETY IS THE DRIVING FORCE BEHIND EVERYTHING WE DO AT TRICKY TRANSPORTATION COMPANY. OUR CORE SAFETY VALUE OF “SAFETY IS EVERYONE’S JOB ALL THE TIME” IS A COMMITMENT THAT STARTS AT THE TOP OF OUR EXECUTIVE MANAGEMENT TEAM WITH OUR FOUNDERS."
                    className="bg-[rgba(255,255,255,0.81)] text-primary"
                />
            </div>
        </div>
    );
};

export default Transportation;
