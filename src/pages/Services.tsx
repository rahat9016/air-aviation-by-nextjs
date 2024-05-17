import Common_Hero from '../components/Common_Hero'
import { ReactHelmet } from '../components/common/Helmet'
import { Layout } from '../components/common/Layout'
import Service_Box from '../components/Service/Service_Box'
import { goToTop } from '../utility/goToTop'
export function Services (){
  goToTop()
  return (
    <Layout>
      <ReactHelmet title='Services' />
        <Common_Hero bg={'https://i.ibb.co/hL8bYFs/Group-5-2.jpg'}  />
        <div className='lg:-mt-80'>
          <Service_Box />
        </div>
    </Layout>
  )
}
