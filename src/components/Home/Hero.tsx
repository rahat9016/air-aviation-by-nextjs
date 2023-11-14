import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { HeroData } from '../../data/data'
import Span from '../Span'
export function Hero () {
  // the size of screen will return true | false if screen size change
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
  
  }
  return (
    <div className='w-full overflow-hidden xl:h-[675px]' id='hero'>
      <Slider {...settings}>
          {HeroData.map(data => {
          return <div key={data.title} className='relative' >
            <img src={data.bannerImage} alt="" className='w-full h-[150px] xlg:h-[180px] sm:h-[320px] xl:h-[675px]'/>
            <div className=  '   text-left container px-mobileContainer xl:px-0 absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2  '>
            <h1 className='text-base font-poppins sm:text-2xl lg:text-3xl xl:text-6xl font-extrabold uppercase text-primary sm:mb-2 xl:mb-4 xl:mt-72 leading-none'>{data.title}</h1>
              <h2 className='mb-2 sm:mb-4 xl:mb-6 font-poppins text-xs sm:text-lg lg:text-[30px] xl:text-[32px] font-medium  text-primary leading-none'>{data.subTitle}</h2>
              <Span margin='m-0'/>
            </div>
          </div>})}
      </Slider>
    </div>
  )
}
