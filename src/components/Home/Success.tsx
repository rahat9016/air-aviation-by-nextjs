import success_bg from "../../assets/success.png"
import CommentBox from "../common/CommentBox";
const Success = () => {
    return (
        <div style={{ backgroundImage: `url(${success_bg})` }}
        className="py-20 bg-no-repeat bg-cover bg-center mt-10 xl:mt-28">
            <div className="container px-mobileContainer xl:px-0">
            <CommentBox
                    title="KEYS TO SUCCESS"
                    desc="KM Air Aviation has proven to be a shining example of these principles,
                    consistently rising above the industry's challenges. The foremost key to success
                    for KM Air Aviation is its unyielding commitment to the safety and security of the
                    passengers and cargo. KM Air Aviation boasts a team of highly skilled and
                    experienced professionals, from management to dedicated ground crews. In
                    today's world, environmental responsibility is a crucial component of success in
                    the aviation industry. By creating jobs and supporting charitable initiatives, the
                    company aims to be a responsible corporate citizen. These key principles are
                    the foundation upon which KM Air Aviation has built its reputation as a leader
                    in the aviation industry."
                    className="text-white"
                />
            </div>
        </div>
    );
};

export default Success;