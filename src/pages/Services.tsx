import Common_Hero from '../components/Common_Hero'
import { ReactHelmet } from '../components/common/Helmet'
import { Layout } from '../components/common/Layout'
import bg from "../assets/service-banner.jpg"
import Service_Box from '../components/Service/Service_Box'
import { goToTop } from '../utility/goToTop'
export function Services (){
  goToTop()
  return (
    <Layout>
      <ReactHelmet title='Services' />
        <Common_Hero bg={bg}  />
        <div className='lg:-mt-80'>
          <Service_Box />
        </div>
    </Layout>
  )
}
