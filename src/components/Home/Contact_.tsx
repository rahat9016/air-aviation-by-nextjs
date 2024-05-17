
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import waterLogo from "../../assets/water_KM.png"
import { socialLink } from "../../data/data";
const Contact_ = () => {
    return (
        <div>
            <h1 className="text-center text-primary font-bold font-inter mt-6 ">
                CONTACT US
            </h1>
            <div className="container px-mobileContainer xl:px-0 my-6 xl:my-24">
                <div className="flex flex-col md:flex-row xl:gap-6 ">
                    <div className="flex items-center">
                        <div className=" bg-primary w-full lg:w-[320px]  flex flex-col items-center justify-center gap-2 lg:gap-8 text-white shadow-3xl px-10 py-12 relative  ">
                            <ul className="text-center mb-2">
                                <li>
                                    <BsFillTelephoneFill className="mx-auto mb-2 text-base lg:text-xl" />
                                </li>
                                <li className="text-sm lg:text-base mb-1">
                                    24/7 Support
                                </li>
                                <li className="text-sm lg:text-base">
                                    +88 02-489 57 489
                                </li>
                            </ul>
                            <ul className="text-center mb-2">
                                <li className="mx-auto">
                                    <MdEmail className="mx-auto mb-2 text-base lg:text-xl" />
                                </li>
                                <li className="text-sm">Say Hello To Us</li>
                                <li className="text-[#FFDBA6] text-base">
                                info@kmairaviation.com
                                </li>
                            </ul>
                            <ul className="text-center mb-2">
                                <li className="mx-auto">
                                    <MdLocationOn className="mx-auto mb-2 text-base lg:text-xl" />
                                </li>
                                <li className="text-sm md:text-base">
                                    Ahmed Plaza, Level-05(Lift 04)
                                    <br />
                                    Plot-06, Road-02, Sector-03
                                    <br />
                                    Jashimuddin Ave, Uttara,<br/> Dhaka-1230
                                </li>
                            </ul>
                            <div className="flex items-center justify-center gap-3 z-40">
                            <ul className='flex gap-[10px] text-white text-xl'>
                  {
                    socialLink?.map((social, index) => {
                      return (social.href != "" && <li key={index}> <Link target='_blank' to={social?.href}>{<social.icon/>}</Link> </li>)})
                  }
                </ul>
                            </div>
                            <img src={waterLogo} alt='' className='absolute left-3 bottom-1 lg:bottom-3  w-20 lg:w-32' />
                        </div>
                    </div>
                    <div className="w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1278.1455302999518!2d90.39920640206152!3d23.861701732450918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c518835e70a3%3A0x57fa86869e8268ee!2sKM%20Air%20Aviation%20LTD!5e0!3m2!1sen!2sbd!4v1699673782363!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div />
                </div>
            </div>
        </div>
    );
};

export default Contact_;
