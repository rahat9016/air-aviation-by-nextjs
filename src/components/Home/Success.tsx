import success_bg from "../../assets/success.png";
import CommentBox from "../common/CommentBox";
const Success = () => {
  return (
    <div
      style={{ backgroundImage: `url(${success_bg})` }}
      className="relative py-16 bg-no-repeat bg-cover bg-center mt-10 xl:mt-28"
    >
      <div className="absolute w-full h-[180px] bg-white/50 top-28 "></div>

      <div className="container px-mobileContainer xl:px-0 flex justify-start">
        <CommentBox
          title="KEYS TO SUCCESS"
          desc="Key to success At KM Air Aviation Ltd, success isn't just a destination; it's a journey powered by keys that unlock doors to new horizons. Join us on this journey, where your success is not just our goal; it's our commitment."
          className="text-white bg-primary/98 z-10"
        />
      </div>
    </div>
  );
};

export default Success;
