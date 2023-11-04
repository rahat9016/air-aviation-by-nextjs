import hero_bg1 from "../assets/hero_bg1.png"
import hero_bg2 from "../assets/hero_bg2.png"
import hero_bg3 from "../assets/hero_bg3.png"
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
    name: 'About Us',
    location: '/about-us',
  },
  {
    name: 'Blog',
    location: '/blog',
  },
]

// -------------Hero Section data -------------
export const HeroData = [
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
  {
    title: 'Inspiring Aviation, Empowering You',
    subTitle: 'We\'re ready when you are',
    btnUrl: '#',
    bannerImage: hero_bg3,
  },
]
export const WhyData = [
  {
    title: "WHO WE ARE",
    desc: "At the heart of KM Air Aviation is a relentless passion for aviation, a commitment    to excellence, and a dedication to serving our customers with the highest standards of safety, reliability, and innovation. Established as a frontrunner in the aviation industry, KM Air Aviation is more than just an airline; we are a team of highly skilled professionals, cutting-edge technology, and a global network of routes that connect people, businesses, and cargo to destinations across the world."
  },
  {
    title: "WHY US?",
    desc: "Safety is our paramount concern. We uphold the highest safety standards and    regulations, ensuring that every flight, cargo shipment, or passenger transport is executed with uncompromising safety measures. We maintain a fleet of state-of-the-art aircraft, meticulously maintained to the highest industry standards. Whether you're flying with us or shipping your cargo, our top-tier aircraft guarantee comfort, safety, and performance. From booking to completion, we ensure a seamless and enjoyable experience. Our commitment to excellence is reflected in our ability to customize services to meet the unique needs of our  passengers and cargo customers."
  },
  {
    title: "WHAT WE DO",
    desc: "Our cargo services are known for efficiency and reliability. We offer solutions for    general cargo, specialized shipments, oversized freight, and more. We pride ourselves on global connectivity and timely deliveries. For time-sensitive    shipments, our Express Delivery service ensures that your cargo reaches its    destination swiftly and securely. Our worldwide transport services provide    efficient and reliable connections to destinations across the globe. KM Air    Aviation is your go-to choice for aviation services that prioritize safety,    excellence, and customer satisfaction. KM Air Aviation is your trusted partner,    soaring to new heights in aviation excellence."
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