import Span from "../Span";
import about_circle from "../../assets/circle_about.png";

const Career_Box = () => {
  return (
    <div className="mb-[136px]">
      <div className="flex justify-center flex-col">
        <div
          style={{ backgroundImage: `url(${about_circle})` }}
          className="bg-no-repeat pt-[129px] xl:w-[50%] mx-auto xl:bg-left-380 bg-right "
        >
          <p className="text-center font-bold text-[40px] text-primary mb-4 leading-none font-poppins">
            Featured Jobs
          </p>
          <p className="font-medium leading-8 text-[#254871] text-center font-inter mb-[10px]">
            Join our team and experience a dynamic work environment <br /> with
            opportunities for growth.
          </p>
          <Span />
        </div>
      </div>
      <div className="mt-[90px] pb-[431px] xl:mx-[26px] font-inter">
        <div className="shadow-md bg-[#F5F5F5] py-[35px] flex justify-between rounded items-center sm:flex-row flex-col gap-2">
          <div className="xl:border-r w-full basis-2/5 border-[#C0C6C7] ">
            <p className="text-center text-xl text-primary font-semibold leading-none">
              No Openings
            </p>
          </div>
          <div className="xl:border-r border-[#C0C6C7] w-full basis-1/5">
            <p className="text-center text-primary leading-none">Deadline</p>
          </div>
          <div className="w-full flex sm:flex-row flex-col justify-center xl:gap-32 md:gap-24 gap-4 basis-2/5 items-center">
            <p className="text-primary">Full Time</p>
            <p>
              <button disabled className="py-[14px] px-[32px] bg-[#EA244E] rounded-[5px] text-white font-medium leading-none opacity-20">
                Apply
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career_Box;
