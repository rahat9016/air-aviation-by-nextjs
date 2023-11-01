import { Helmet } from 'react-helmet'
interface TitleType {
    title: string
}
export function ReactHelmet ({ title } : TitleType) {
  return (
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title} | KM-AIR & AVIATION</title>
      </Helmet>
  )
}
