import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { HeroData } from '../../data/data'
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
          return <div key={data.title} className='relative'>
            <img src={data.bannerImage} alt="" className='w-full h-[150px] xlg:h-[180px] sm:h-[320px] xl:h-[675px]'/>
            <div className='container px-mobileContainer xl:px-0 absolute left-1/2 top-1/2 lg:top-1/3 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-base sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-primary sm:mb-2 xl:mb-4'>{data.title}</h1>
              <h2 className='mb-2 sm:mb-4 xl:mb-10 text-xs sm:text-lg lg:text-xl xl:text-2xl text-primary '>{data.subTitle}</h2>
              <button className='bg-secondary text-white font-inter text-xs xl:text-base font-semibold px-2 py-1 sm:px-4 sm:py-2 xl:px-8 xl:py-3 rounded-full'>Learn More</button>
            </div>
          </div>})}
      </Slider>
    </div>
  )
}
