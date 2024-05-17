import transportation_bg from "../../assets/home_making_transportaion_bg.jpg";
import CommentBox from "../common/CommentBox";
const Transportation = () => {
    return (
        <div
            style={{ backgroundImage: `url(${transportation_bg})` }}
            className="relative py-16 bg-no-repeat bg-cover bg-center mt-10 xl:mt-28"
        >
            <div className="absolute w-full h-[200px] bg-primary/50 top-[28%] "></div>
            <div className="container px-mobileContainer xl:px-0 flex justify-end">
                <CommentBox
                    title="MAKING TRANSPORTATION FAST AND SAFE"
                    desc="KM Air Aviation Ltd, where we're not just making transportation fast and safe; we're transforming the very essence of air cargo logistics. 
                    Your cargo's journey is our priority, and we're dedicated to making it swift, secure, and successful."
                    className="bg-[rgba(255,255,255,0.95)] text-primary z-10"
                />
            </div>
        </div>
    );
};

export default Transportation;
