import Common_Hero from '../components/Common_Hero'
import { ReactHelmet } from '../components/common/Helmet'
import { Layout } from '../components/common/Layout'
import bg from "../assets/service_hero_bg.png"
import Service_Box from '../components/Service/Service_Box'
import { goToTop } from '../utility/goToTop'
export function Services (){
  goToTop()
  return (
    <Layout>
      <ReactHelmet title='Services' />
        <Common_Hero bg={bg}  />
        <div className='mt-0 lg:-mt-28'>
          <Service_Box />
        </div>
    </Layout>
  )
}
