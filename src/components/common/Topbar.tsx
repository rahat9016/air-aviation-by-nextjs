import { useState } from "react";
import Logo from "../../assets/logo.png";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { NavData, socialLink } from "../../data/data";
import HelpCenter from "./HelpCenter";
type NavItemType = {
    name: string;
    location?: string | undefined;
    children?: {
        name: string;
        location?: string | undefined;
    }[];
};

export function TopBar() {
    const [open, setOpen] = useState<boolean>(false);
    const { pathname } = useLocation();
    const path = pathname.split('/')[1]
    return (
        <div className=" z-50">
            <div className="h-[70px] md:h-[80px] lg:h-[80px] flex items-center justify-center bg-white shadow-2xl font-inter">
                <div className="container px-mobileContainer xl:px-0">
                    <div className="flex justify-between items-center">
                        <Link to={"/"}>
                            <img
                                src={Logo}
                                alt="KM group"
                                className="w-[70px] xl:w-[100px]"
                            />
                        </Link>
                        <ul className="hidden lg:flex items-center text-right gap-14">
                            <li>
                                <HelpCenter className="text-primary" />
                            </li>
                            <li>
                                <ul className="flex gap-[10px] text-primary text-xl">
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
                                                    </Link>
                                                </li>
                                            )
                                        );
                                    })}
                                </ul>
                            </li>
                        </ul>
                        <div
                            className="w-8 h-8  flex items-center justify-center rounded-sm cursor-pointer lg:hidden  "
                            onClick={() => setOpen(!open)}
                        >
                            {open ? (
                                <CgClose className="text-2xl text-primary font-bold" />
                            ) : (
                                <HiOutlineMenu className="text-2xl text-primary" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------responsive menu----------------- */}
            <nav
                className={`lg:hidden ${
                    open ? "w-full h-min left-0" : "w-full left-[-999999px]"
                }  bg-primary shadow-3xl absolute z-50 py-20`}
            >
                <ul className="flex flex-col items-center py-2">
                    {NavData.map((navItem: NavItemType, index) => (
                        <li
                            key={index}
                            className="font-medium text-white font-inter text-base py-2"
                        >
                            <Link
                                to={navItem?.location || ''}
                                className={`${
                                    navItem?.location === pathname
                                        ? "bg-secondary block px-10 py-2 rounded-sm shadow-lg"
                                        : ""
                                }`}
                            >
                                {navItem.name}
                                
                            </Link>
                        </li>
                    ))}
                    <HelpCenter className="text-white block" />
                    <ul className="flex gap-3 mt-6">
                        {socialLink?.map((social, index) => {
                            return (
                                social.href != "" && (
                                    <li
                                        key={index}
                                        className="text-xl text-white"
                                    >
                                        {" "}
                                        <Link to={social?.href} target="_blank">
                                            {<social.icon />}
                                        </Link>{" "}
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </ul>
            </nav>
            <nav className="bg-primary h-[50px] xl:h-[60px] hidden lg:flex items-center justify-center shadow-3xl z-50 sticky top-0">
                <ul className="flex gap-2">
                    {NavData.map((navItem: NavItemType, index) => {
                        return (
                            <li key={index} className="relative group">
                                <Link
                                    to={
                                        navItem.location
                                            ? navItem.location
                                            : "#"
                                    }
                                    className={`transition-all duration-300  ${
                                        navItem.location === `/${path}`
                                            ? "bg-secondary rounded-md "
                                            : ""
                                    } font-medium  font-inter text-white text-base py-[15px] xl:py-5 px-2 lg:px-6 xl:px-5 2xl:px-10`}
                                >
                                    {navItem.name}
                                    
                                </Link>
                                {/* show children */}
                                {/* {navItem && navItem?.children && (
                                    <ul className="absolute left-0 w-[320px] top-[-999990px] group-hover:top-[42px] z-50 bg-white">
                                        {navItem?.children?.map(
                                            (item, index) => (
                                                <li key={index} className="py-4 hover:bg-secondary hover:text-white border-t-[0.1px] border-[#3b5c7753]">
                                                    <Link
                                                        to={
                                                            item.location
                                                                ? item.location
                                                                : "#"
                                                        }
                                                        className={`font-medium  font-inter text-base py-[15px] xl:py-5 px-2 lg:px-6 xl:px-5 2xl:px-10`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )} */}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
