import { BiLogoFacebook, BiLogoWhatsapp } from "react-icons/bi";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import waterLogo from "../../assets/water_KM.png"
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
                                    info@kmcargo.com.my
                                </li>
                            </ul>
                            <ul className="text-center mb-2">
                                <li className="mx-auto">
                                    <MdLocationOn className="mx-auto mb-2 text-base lg:text-xl" />
                                </li>
                                <li className="text-sm md:text-base">
                                    Ahmed Plaza, Level-05(Lift 04)
                                    <br />
                                    House-06, Road-02, Sector-03
                                    <br />
                                    Jashimuddin Ave, Uttara,<br/> Dhaka-1230
                                </li>
                            </ul>
                            <div className="flex items-center justify-center gap-3 z-40">
                                <BsInstagram className=" text-base lg:text-xl" />
                                <Link
                                    target="_blank"
                                    to="https://www.facebook.com/KMCargomy/"
                                >
                                    <BiLogoFacebook className=" text-base lg:text-xl" />
                                </Link>
                                <Link
                                    target="_blank"
                                    to="https://www.linkedin.com/company/kmcargo/?trk=public_profile_experience-item_profile-section-card_image-click&originalSubdomain=bd"
                                >
                                    <FaLinkedinIn className=" text-base lg:text-xl" />
                                </Link>
                                <BiLogoWhatsapp className=" text-base lg:text-xl" />
                            </div>
                            <img src={waterLogo} alt='' className='absolute bottom-3 lg:bottom-8  w-20 lg:w-32' />
                        </div>
                    </div>
                    <div className="w-full">
                        <iframe
                            title="KM Cargo & Logistics"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.9512200765178!2d101.69676166959131!3d3.1461333388855413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc491620b36279%3A0xe660cfdc178fa256!2sKM%20Cargo%20%26%20Logistics%20SDN.%20BHD.!5e0!3m2!1sen!2sus!4v1694245355280!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div />
                </div>
            </div>
        </div>
    );
};

export default Contact_;
