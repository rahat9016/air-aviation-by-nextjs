import success_bg from "../../assets/success.png";
import CommentBox from "../common/CommentBox";
const Success = () => {
  return (
    <div
      style={{ backgroundImage: `url(${success_bg})` }}
      className="py-20 bg-no-repeat bg-cover bg-center mt-10 xl:mt-28"
    >
      <div className="container px-mobileContainer xl:px-0">
        <CommentBox
          title="KEYS TO SUCCESS"
          desc="Safety is the driving force behind everything we do at trucky transportation company. Our core safety value of “safety is everyone’s job – all the time” is a commitment that starts at the top of our executive management team with our founders."
          className="text-white"
        />
      </div>
    </div>
  );
};

export default Success;
