import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs'
import { BiLogoFacebook, BiLogoWhatsapp } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import waterLogo from '../../assets/kmWaterlogo.png'
import { Link } from 'react-router-dom'
export function ContactSection () {
  return (
    <div className='xl:-mb-16 mb-10 px-mobileContainer lg:px-0'>
      <div className='w-full lg:w-9/12 mx-auto py-10 lg:py-20 flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-[45%] xl:w-[33%] flex items-center '>
          <div className='md:w-[100px] h-[450px] lg:h-[520px] flex flex-col items-center gap-10 justify-center lg:justify-between px-4 py-20 shadow-5xl '>
            <Link to='#'><BsInstagram className='text-primary text-lg md:text-xl lg:text-2xl xl:text-3xl' /></Link>
            <Link target='_blank' to='https://www.facebook.com/KMCargomy/'><BiLogoFacebook className='text-primary text-lg md:text-xl lg:text-2xl xl:text-3xl' /></Link>
            <Link target='_blank' to='https://www.linkedin.com/company/kmcargo/?trk=public_profile_experience-item_profile-section-card_image-click&originalSubdomain=bd'>
              <FaLinkedinIn className='text-primary text-lg md:text-xl lg:text-2xl xl:text-3xl' />
            </Link>
            <BiLogoWhatsapp className='text-primary text-lg md:text-xl lg:text-2xl xl:text-3xl' />
          </div>
          <div className=' bg-primary w-full h-[450px] lg:h-[700px] flex flex-col items-center justify-center gap-2 lg:gap-8 text-white shadow-R5xl px-8 py-12 relative'>
            <ul className='text-center mb-2'>
              <li><BsFillTelephoneFill className='mx-auto mb-2 text-base lg:text-xl' /></li>
              <li className='text-sm lg:text-base mb-1'>24/7 Support</li>
              <li className='text-sm lg:text-base'>+6016 4490 437 <br /> +60 11-5755 7431</li>
            </ul>
            <ul className='text-center mb-2'>
              <li className='mx-auto'><MdEmail className='mx-auto mb-2 text-base lg:text-xl' /></li>
              <li className='text-sm'>Say Hello To Us</li>
              <li className='text-[#FFDBA6] text-base'>info@kmcargo.com.my</li>
            </ul>
            <ul className='text-center mb-2'>
              <li className='mx-auto'><MdLocationOn className='mx-auto mb-2 text-base lg:text-xl' /></li>
              <li className='text-sm md:text-base'>29, Lebuh Pudu,<br /> City Centre, 50050, <br />Kuala Lumpur, Malaysia
              </li>
            </ul>
            <div className='flex items-center justify-center gap-3'>
              <BsInstagram className=' text-base lg:text-xl' />
              <Link target='_blank' to='https://www.facebook.com/KMCargomy/'><BiLogoFacebook className=' text-base lg:text-xl' /></Link>
              <Link target='_blank' to='https://www.linkedin.com/company/kmcargo/?trk=public_profile_experience-item_profile-section-card_image-click&originalSubdomain=bd'>
                <FaLinkedinIn className=' text-base lg:text-xl' />
              </Link>
              <BiLogoWhatsapp className=' text-base lg:text-xl' />
            </div>
            <img src={waterLogo} alt='' className='absolute bottom-3 lg:bottom-8 right-3  lg:right-8 w-20 lg:w-32' />
          </div>
        </div>
        <div className='w-full lg:w-[55%] xl:w-[68%] h-[300px] lg:h-[600px] shadow-R5xl'>
          <iframe
            title='KM Cargo & Logistics'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.9512200765178!2d101.69676166959131!3d3.1461333388855413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc491620b36279%3A0xe660cfdc178fa256!2sKM%20Cargo%20%26%20Logistics%20SDN.%20BHD.!5e0!3m2!1sen!2sus!4v1694245355280!5m2!1sen!2sus'
            width='100%'
            height='100%'
            style={{ border: '0' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <div />
      </div>
    </div>
  )
}
