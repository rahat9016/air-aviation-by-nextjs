import req_bg from "../../assets/request_bg.jpg";
// import km_white from "../../assets/km_white.png";
import { Button } from "../common/Button";
import { useSentMessage } from "../../hooks/useMessageHook";
import { useReCaptcha } from "../../hooks/useContext";
import ReCAPTCHA from "react-google-recaptcha";
const Request_Feedback = () => {
    const {
        handleChange,
        handleContactForm,
        handleTextareaChange,
        contactInfo,
        error,
        ToastContainer
    } = useSentMessage();
    const { verifyCaptcha, isCaptchaVerified, resetReCaptcha } =
        useReCaptcha() || {};
    return (
        <div>
            <ToastContainer />
            <div className="container px-mobileContainer xl:px-0 mb-10 xl:mb-24 ">
                <h1 className="font-bold text-2xl text-primary text-center mb-10 font-inter">
                    Request a feedback
                </h1>
                <div className="flex flex-col lg:flex-row gap-6 ">
                    <div className="relative basis-full lg:basis-1/2 xl:h-[360px]">
                        <img
                            src={req_bg}
                            alt=""
                            className="w-full h-full  "
                        />
                        {/* <img
                            src={km_white}
                            alt=""
                            className="w-[80px] lg:w-[140px] absolute top-[83%] left-[83%] -translate-x-1/2 -translate-y-1/2"
                        /> */}
                    </div>
                    <form onSubmit={handleContactForm} className="basis-full lg:basis-1/2">
                        <div className="flex flex-col lg:flex-row  gap-2">
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Your full name*"
                                className="w-full border border-gray rounded-md p-2 xl:p-3 mb-5 focus:outline-none  focus:ring focus:primary"
                                value={contactInfo?.name}
                                onChange={handleChange}
                            />
                            <input
                                name="phone"
                                type="number"
                                required
                                placeholder="Your phone here*"
                                className="w-full border border-gray rounded-md p-2 xl:p-3 mb-5 focus:outline-none focus:ring focus:primary"
                                value={contactInfo?.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Your e-mail here"
                            className="w-full border border-gray rounded-md p-2 xl:p-3 mb-5 focus:outline-none focus:ring focus:primary"
                            value={contactInfo?.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="comment"
                            required
                            id=""
                            cols={30}
                            rows={10}
                            placeholder="Your message here..."
                            className="w-full border border-gray rounded-md p-2 xl:p-3 mb-3 h-[220px] focus:outline-none focus:ring focus:primary"
                            onChange={handleTextareaChange}
                            value={contactInfo?.comment}
                        ></textarea>
                        {(contactInfo?.name && contactInfo?.phone &&
                        contactInfo.comment ) ? 
                        <ReCAPTCHA
                            sitekey={"6LdK6E8oAAAAAJ6D_-rvV7WvtnbCabxA_gtDogTA"}
                            onChange={verifyCaptcha}
                            onExpired={resetReCaptcha}
                        />
                        : ""}
                        {!isCaptchaVerified && <p className='my-2 text-secondary'>{error != '' && error}</p>}
                        <Button
                            type="submit"
                            className="bg-secondary text-white px-6 py-2 rounded-md "
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Request_Feedback;
