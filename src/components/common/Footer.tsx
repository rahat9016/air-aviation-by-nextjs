import { HiArrowRight } from 'react-icons/hi'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { Link } from 'react-router-dom'
export function Footer () {
  return (
    <div>
      
      <div className='bg-primary w-full pt-10 pb-2 relative'>
        <div className='container px-2'>
          <div className='lg:flex justify-between'>
            <div className='text-center lg:text-left'>
              <p className='font-inter font-light text-xs text-white leading-[4px]'>SIGN UP FOR OUR</p>
              <h1 className='text-lg lg:text-2xl font-bold text-white'>NEWS LETTER</h1>
            </div>
            <div className='w-full md:w-[60%] lg:w-[45%] mx-auto my-4 lg:my-0 flex items-center justify-center gap-1'>
              <div className='w-full h-[31px] px-3 py-2 rounded-md bg-[#E6E6E6] flex items-center'><input type='email' placeholder='Enter Your Email...' className='outline-none bg-transparent w-full' /></div>
              <button className='w-[61px] h-[31px] p-2 bg-secondary text-white rounded-md flex items-center justify-center'><HiArrowRight /></button>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-8 items-center text-white'>
              <h2 className='text-sm lg:text-base'>Help Center</h2>
              <ul className='flex gap-4 text-lg mt-4 lg:mt-0'>
                
                <li><Link to={'#'}><BiLogoInstagram /></Link></li>
                <li><Link to={'https://www.facebook.com/KMCargomy/'} target='_blank'><BiLogoFacebook /></Link></li>
                <li><Link to={'https://www.linkedin.com/company/kmcargo/?trk=public_profile_experience-item_profile-section-card_image-click&originalSubdomain=bd'} target='_blank'><FaLinkedinIn /></Link></li>
                <li><Link to={'#'}><FaWhatsapp /></Link></li>
              </ul>
            </div>
          </div>
          <div><p className='text-center lg:text-left text-xs lg:text-sm text-white mt-8 py-2'>Copyrights@2023 by KM Group. All Rights Reserved </p></div>
        </div>
      </div>
    </div>
  )
}
