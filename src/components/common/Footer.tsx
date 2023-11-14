import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { socialLink } from "../../data/data";
// import HelpCenter from "./HelpCenter";
export function Footer() {
    return (
        <div>
            <div className="bg-primary w-full pt-10 pb-2 relative px-mobileContainer lg:px-0">
                <div className="container px-2">
                    <div className="lg:flex justify-between">
                        <div className="text-center lg:text-left">
                            <p className="font-inter font-light text-xs text-white leading-[4px]">
                                SIGN UP FOR OUR
                            </p>
                            <h1 className="text-lg lg:text-2xl font-bold text-white">
                                NEWSLETTER
                            </h1>
                        </div>
                        <div className="w-full md:w-[60%] lg:w-[45%] mx-auto my-4 lg:my-0 flex items-center justify-center gap-1">
                            <div className="w-full h-[31px] px-3 py-2 rounded-md bg-[#E6E6E6] flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email..."
                                    className="outline-none bg-transparent w-full"
                                />
                            </div>
                            <button className="w-[61px] h-[31px] p-2 bg-secondary text-white rounded-md flex items-center justify-center">
                                <HiArrowRight />
                            </button>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center text-white">
                            {/* <HelpCenter className="text-white" /> */}
                            <ul className="flex gap-[10px] text-white text-xl">
                                {socialLink?.map((social, index) => {
                                    return (
                                        social.href != "" && (
                                            <li key={index}>
                                                {" "}
                                                <Link
                                                    target="_blank"
                                                    to={social?.href}
                                                >
                                                    {<social.icon />}
                                                </Link>{" "}
                                            </li>
                                        )
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between mt-8">
                        <p className="text-center lg:text-left text-xs lg:text-sm text-white ">
                            Copyrights &copy; 2023 by KM Air Aviation. All Rights
                            Reserved{" "}
                        </p>
                        <Link
                            to={"https://tecnobz.com/"}
                            target="_blank"
                            className="block text-center lg:text-left text-xs lg:text-sm text-white"
                        >
                            {" "}
                            Developed by{" "}
                            <span className="underline text-sm uppercase">tecno bz</span>{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
