import { Helmet } from 'react-helmet'
interface TitleType {
    title: string;
    desc?: string
}
const ReactHelmetDefaultValue = {
  desc: 'KM Air Aviation Ltd. is a leading name in the aviation industry, committed to providing top-notch air travel experiences for passengers around the world. As a premier airline, we pride ourselves on our dedication to safety, comfort, and convenience. Our story began with a vision to transform air travel into an unforgettable journey, and today, we continue to pursue excellence in everything we do.'
}
export function ReactHelmet ({ title, desc = ReactHelmetDefaultValue?.desc } : TitleType) {
  return (
      <Helmet>
        <meta charSet='utf-8' />
        <meta name={title} content={desc} />
        <title>{title} | KM-AIR & AVIATION</title>
      </Helmet>
  )
}
