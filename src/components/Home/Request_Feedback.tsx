import req_bg from "../../assets/request_bg.png"
import km_white from "../../assets/km_white.png"
import { Button } from "../common/Button";

const Request_Feedback = () => {
    return (
        <div>
            <div className="container px-mobileContainer xl:px-0 mb-10 xl:mb-24 ">
                <h1 className="font-bold text-2xl text-primary text-center mb-10 font-inter">Request a feedback</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="relative">
                    <img src={req_bg} alt="" className="w-full xl:h-[368px]" />
                        <img src={km_white} alt="" className="absolute bottom-20 right-4 "/>
                    </div>
                    <form >
                        <input type="text" placeholder="Your full name" className="w-full border border-gray rounded-md p-3 mb-6" />
                        <input type="email" placeholder="Your e-mail here" className="w-full border border-gray rounded-md p-3 mb-6" />
                        <textarea name="" id="" cols={30} rows={10} placeholder="Your message here..."className="w-full border border-gray rounded-md p-3 mb-6 h-[220px]" ></textarea>
                        <Button className="bg-secondary text-white px-3 py-1 rounded-md">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Request_Feedback;