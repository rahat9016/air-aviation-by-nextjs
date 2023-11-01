import success_bg from "../../assets/success.png"
import CommentBox from "../common/CommentBox";
const Success = () => {
    return (
        <div style={{ backgroundImage: `url(${success_bg})` }}
        className="py-20 bg-no-repeat bg-cover bg-center mt-10 xl:mt-28">
            <div className="container px-mobileContainer xl:px-0">
            <CommentBox
                    title="KEYS TO SUCCESS"
                    desc="SAFETY IS THE DRIVING FORCE BEHIND EVERYTHING WE DO AT TRICKY TRANSPORTATION COMPANY. OUR CORE SAFETY VALUE OF “SAFETY IS EVERYONE’S JOB ALL THE TIME” IS A COMMITMENT THAT STARTS AT THE TOP OF OUR EXECUTIVE MANAGEMENT TEAM WITH OUR FOUNDERS."
                    className="text-white"
                />
            </div>
        </div>
    );
};

export default Success;