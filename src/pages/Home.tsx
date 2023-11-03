
import Commitment from "../components/Home/Commitment"
import Contact_ from "../components/Home/Contact_"
import Request_Feedback from "../components/Home/Request_Feedback"
import Success from "../components/Home/Success"
import Transportation from "../components/Home/Transportation"
import Why from "../components/Home/Why"
import { ReactHelmet } from "../components/common/Helmet"
import { Hero } from "../components/Home/Hero"
import { Layout } from "../components/common/Layout"
import { goToTop } from "../utility/goToTop"
import Home_Service from "../components/Home/Home_Service"

export function Home () {
  goToTop()
  return (
    <Layout>
      <ReactHelmet title='Home' />
      <Hero />
      <Home_Service />
      <Commitment />
      <Transportation /> 
      <Success />
      <Why />
      <Contact_ />
      <Request_Feedback />
    </Layout>
  )
}
