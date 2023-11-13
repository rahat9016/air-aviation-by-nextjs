import hero_bg1 from "../assets/banner2.jpg"
import hero_bg2 from "../assets/banner3.jpg"
import hero_bg3 from "../assets/banner-1.png"
import { BiLogoFacebook } from 'react-icons/bi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
// ---------------Nav Data-----------------
export const NavData = [
  {
    name: 'Home',
    location: '/',
  },
  {
    name: 'Services',
    location: '/services',
    // children: [
    //   {
    //     name: 'Permit Services',
    //     location: '/permit-services',
    //   },
    //   {
    //     name: 'Ground Support',
    //     location: '/ground-support',
    //   },
    //   {
    //     name: 'Joint Charter Flight',
    //     location: '/joint-charter-flight',
    //   },
    //   {
    //     name: 'Aviation Fuel',
    //     location: '/aviation-fuel',
    //   },
    //   {
    //     name: 'Hotel Accommodation',
    //     location: '/hotel-accommodation',
    //   }
    // ]
  },
 
  {
    name: 'Our Team',
    location: '/team',
  },
  {
    name: 'Career',
    location: '/career',
  },
  {
    name: 'Blog',
    location: '/blog',
  },
  {
    name: 'About Us',
    location: '/about-us',
  },
  
]

// -------------Hero Section data -------------
export const HeroData = [
  {
    title: 'Inspiring Aviation, Empowering You',
    subTitle: 'We\'re ready when you are',
    btnUrl: '#',
    bannerImage: hero_bg3,
  },
  {
    title: 'Inspiring Aviation, Empowering You',
    subTitle: 'We\'re ready when you are',
    btnUrl: '#',
    bannerImage: hero_bg1,
  },
  {
    title: 'Inspiring Aviation, Empowering You',
    subTitle: 'We\'re ready when you are',
    btnUrl: '#',
    bannerImage: hero_bg2,
  },
  
]
export const WhyData = [
  {
    title: "WHO WE ARE",
    desc: "At KM Air Aviation Ltd,we take pride in being the driving force behind seamless cargo logistics in the aviation industry. As a Global Sales Agent (GSA) for leading cargo airlines, we're not just a company; we're the architects of efficient air transportation solutions."
  },
  {
    title: "WHY US?",
    desc: "Choose KM Air Aviation Ltd for a cargo & PAX GSA partnership that goes beyond transportation – it's a commitment to excellence, reliability, and a smooth journey to success."
  },
  {
    title: "WHAT WE DO",
    desc: "we are more than a company; we are the architects of seamless air cargo solutions. Our commitment is to elevate the standards of the aviation industry through a range of comprehensive services tailored to meet the unique needs of our clients. We are really good at Global Sales Agent (GSA), International Connectivity, Strategic Partnerships, Tailored Cargo Solution, Efficiency in Motion& Sustainable Practices in cargo industries."
  },
]
export const socialLink = [
  {
    icon: BiLogoFacebook ,
    href: "https://www.facebook.com/kmairaviation"
  },
  {
    icon: FaLinkedinIn ,
    href: "https://linkedin.com/company/km-air-aviation"
  },
  {
    icon: FaWhatsapp ,
    href: "https://wa.me/+8801896202053"
  },
]