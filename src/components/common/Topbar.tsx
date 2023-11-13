import { useEffect, useState } from "react";
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
    const [sticky, setSticky] = useState<boolean>(false);
    const [scroll, setScroll] = useState<number>(0);
    const { pathname } = useLocation();
    const path = pathname.split("/")[1];

    useEffect(() => {
        const handleSticky = () => {
            setSticky(window.scrollY >= 30);
            setScroll(window.scrollY)
        };
        window.addEventListener("scroll", handleSticky);
        return () => {
            window.removeEventListener("scroll", handleSticky);
        };
    }, [window.scrollY]);
console.log(window.scrollY)
    return (
        <div
            className={`${
                pathname !== "/" || sticky
                    ? "pb-[80px] lg:h-[100px]"
                    : "pb-[80px] lg:pb-0"
            }`}
        >
            <div
                className={`z-50 fixed w-full bg-white  ${
                    pathname !== "/" || sticky
                        ? "bg-white shadow-md"
                        : "lg:bg-transparent"
                }`}
            >
                <div
                    className={`flex items-center justify-center font-inter h-[80px] ${pathname !== "/" || scroll > 30?"lg:h-[100px]":"lg:h-[150px]"} bg-gradient-to-b from-white to-transparent`}
                >
                    <div className="container px-mobileContainer xl:px-0 flex items-center justify-between">
                        <Link to={"/"}>
                            <img
                                src={Logo}
                                alt="KM group"
                                className="w-[60px] xl:w-[85px]"
                            />
                        </Link>
                        {/* --------------------desktop menu---------------- */}
                        <nav
                            className={`hidden lg:flex items-center gap-40 xl:gap-48`}
                        >
                            <ul className="flex gap-10 xl:gap-16 items-center ">
                                {NavData.map((navItem: NavItemType, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="relative group"
                                        >
                                            <Link
                                                to={
                                                    navItem.location
                                                        ? navItem.location
                                                        : "#"
                                                }
                                                className={`transition-all  duration-300  ${
                                                    navItem.location ===
                                                    `/${path}`
                                                        ? `text-red-500`
                                                        : ""
                                                } font-medium  font-inter text-primary text-base py-[15px] xl:py-5 `}
                                            >
                                                {navItem.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className="hidden lg:flex items-center text-right gap-14">
                                <li>
                                    <ul className="flex gap-5 text-primary text-xl">
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
                        </nav>
                        {/* ---------------responsive menu----------------- */}
                        <nav
                            className={`lg:hidden bg-primary w-full py-10 top-[80px] ${
                                open ? "left-0 " : "left-[-999999px]"
                            } absolute flex items-center justify-center`}
                        >
                            <ul className="flex flex-col items-center py-2">
                                {NavData.map((navItem: NavItemType, index) => (
                                    <li
                                        key={index}
                                        className="font-medium text-white font-inter text-base py-2"
                                    >
                                        <Link
                                            to={navItem?.location || ""}
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
                                <HelpCenter className="text-white block underline py-6" />
                                <ul className="flex gap-3 mt-6">
                                    {socialLink?.map((social, index) => {
                                        return (
                                            social.href != "" && (
                                                <li
                                                    key={index}
                                                    className="text-xl text-white"
                                                >
                                                    {" "}
                                                    <Link
                                                        to={social?.href}
                                                        target="_blank"
                                                    >
                                                        {<social.icon />}
                                                    </Link>{" "}
                                                </li>
                                            )
                                        );
                                    })}
                                </ul>
                            </ul>
                        </nav>
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
        </div>
    );
}
